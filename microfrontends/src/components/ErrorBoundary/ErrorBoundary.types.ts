export type MicrofrontendErrorFallback<
  TProps = {},
  TError = { message: string; cause?: any }
> = JSX.Element | React.FC<{ error: TError; retry?: () => void } & TProps>;
