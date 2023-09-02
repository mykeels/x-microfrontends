export type MicrofrontendManifest = {
  scope: string;
  module: string;
  entry: string;
  events: {
    consumes: string[];
  } & {
    [key: string]: MicrofrontendEvent;
  };
  auth: MicrofrontendAuth;
  slots: {
    routes?: MicrofrontendRoute[];
  } & {
    [name: string]: MicrofrontendCustomSlot[];
  };
  createdOn: string;
  manifestId: string;
};

export type MicrofrontendRouteOptions = {
  route: string;
  module?: string;
  host?: string;
  auth?: MicrofrontendAuth;
};

type MicrofrontendRoute = string | MicrofrontendRouteOptions;

export type MicrofrontendCustomSlotOptions = {
  title?: string;
  module: string;
  host?: string;
  defines?: boolean;
  auth?: MicrofrontendAuth;
};

type MicrofrontendCustomSlot =
  | string
  | (MicrofrontendCustomSlotOptions & { [key: string]: any });

type MicrofrontendEventOptions = {
  examples: (string | object)[];
};

type MicrofrontendEvent = MicrofrontendEventOptions & { [key: string]: any };

type MicrofrontendAuthOptions = {
  required?: boolean;
  permissions?: MicrofrontendPermission[];
};

export type MicrofrontendPermission = `${"read-only" | "manage"}:${string}`;

type MicrofrontendAuth = MicrofrontendAuthOptions & { [key: string]: any };

export type MicrofrontendMountProps = {
  homedir: string;
  navigate: (href: string) => any;
  manifests: MicrofrontendManifest[];
  fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  eventBus?: MicrofrontendEventBus;
  layout: MicrofrontendLayout;
  user?: { permissions: MicrofrontendPermission[] };
  rpcClient?: (
    endpoint: string
  ) => <TMessage>(message: TMessage) => Promise<any>;
  ErrorBoundary: (props: { children: any }) => JSX.Element;
};

type MicrofrontendEventBus = {
  emit: (event: string, ...args: any) => any;
  on: (event: string, fn: (...args: any) => any) => any;
  off: (event: string, fn?: (...args: any) => any) => any;
};

type MicrofrontendNavItem = {
  text: string;
  icon?: string | JSX.Element | (() => JSX.Element);
  url: string;
  disabled?: boolean;
  type?: string;
  className?: string;
  children?: MicrofrontendNavItem[];
};

type MicrofrontendLayout = {
  navItems: MicrofrontendNavItem[];
  logout?: () => any;
};

export type MicrofrontendWindowRecord<
  TScope extends string,
  TModule extends string
> = {
  [scope in TScope]: {
    [module in TModule]: MicrofrontendController;
  };
};

export type MountFn = (
  containerRef: string | HTMLElement,
  props: Partial<MicrofrontendMountProps>
) => () => any;
export type UnmountFn = (containerRef: string | HTMLElement) => any;

export type MicrofrontendDefaultExport = {
  default: {
    mount: MountFn;
    unmount: UnmountFn;
  };
};

export type MicrofrontendController = {
  mount: MountFn;
  unmount: UnmountFn;
  instances: number;
  scope: string;
  module: string;
  tracker?: {
    increment: () => void;
    decrement: () => void;
    hasZeroInstances: () => boolean;
  };
};

declare global {
  interface Window {
    $mfs: MicrofrontendWindowRecord<string, string>;
  }
}
