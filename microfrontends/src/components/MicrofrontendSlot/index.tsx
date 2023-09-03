import React, { useContext, useId } from "react";
import { ErrorBoundary } from "../ErrorBoundary";
import { MicrofrontendContext } from "../../contexts";
import { Microfrontend } from "../Microfrontend";
import { getMicrofrontendsByName } from "./MicrofrontendSlot.utils";
import { MicrofrontendCustomSlotOptions } from "../Microfrontend/Microfrontend.types";

type MicrofrontendSlot = MicrofrontendCustomSlotOptions & {
  [key: string]: any;
};

type MicrofrontendSlotProps = {
  name: string;
  transform?: (slots: MicrofrontendSlot[]) => MicrofrontendSlot[];
  Fallback?: React.ComponentType<{ slot?: MicrofrontendSlot }>;
  Loading?: React.ComponentType<{ slot?: MicrofrontendSlot }>;
  className?: string | string[] | { [key: string]: boolean };
};

export const MicrofrontendSlot = ({
  name,
  transform,
  Fallback,
  Loading,
  className,
  ...props
}: MicrofrontendSlotProps) => {
  const id = useId();
  const { manifests, user, ...contextProps } = useContext(MicrofrontendContext);

  const slots = getMicrofrontendsByName(manifests, name, {
    user,
  });

  // @ts-ignore
  const transformedSlots = transform(slots);

  return (
    <>
      {transformedSlots.map((slot, index) => (
        <ErrorBoundary
          key={`slot-${slot.scope}-${slot.module}-${id}-${index}`}
          Fallback={
            typeof Fallback === "function"
              ? (errorProps) => (
                  <Fallback slot={slot} {...props} {...errorProps} />
                )
              : Fallback || (() => <></>)
          }
        >
          <Microfrontend
            {...{ manifests, user, ...slot, ...contextProps, ...props }}
            Fallback={
              typeof Fallback === "function"
                ? (errorProps) => (
                    <Fallback slot={slot} {...props} {...errorProps} />
                  )
                : Fallback || (() => <></>)
            }
            Loading={
              typeof Loading === "function"
                ? () => <Loading slot={slot} />
                : Loading || (() => <></>)
            }
            entry={slot.entry}
            module={slot.module}
            scope={slot.scope}
            className={className}
            id={`slot-${slot.scope}-${id}-${index}`}
          />
        </ErrorBoundary>
      ))}
    </>
  );
};

MicrofrontendSlot.defaultProps = {
  transform: (slots) => slots,
  Fallback: () => <div>Sorry, there was an error loading this component</div>,
  Loading: () => <div>...loading...</div>,
} satisfies Partial<MicrofrontendSlotProps>;

export * from "./MicrofrontendSlot.utils";
