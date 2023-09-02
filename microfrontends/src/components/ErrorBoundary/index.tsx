import React, { Component } from "react";
import { MicrofrontendErrorFallback } from "./ErrorBoundary.types";

type ErrorBoundaryState<TError> = {
  error: TError | null;
  errorInfo: any;
};

type ErrorBoundaryProps<TProps, TError> = {
  children: React.ReactNode;
  Fallback: MicrofrontendErrorFallback<TProps, TError>;
};

export class ErrorBoundary<
  TError extends { message: string; cause?: any }
> extends Component<
  ErrorBoundaryProps<{}, TError>,
  ErrorBoundaryState<TError>
> {
  constructor(props: ErrorBoundaryProps<{}, TError>) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error & TError, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo && this.state.error) {
      const error = this.state.error;
      const cause = this.state.errorInfo;
      if (error) {
        error.cause = cause;
      }
      const Fallback = this.props.Fallback;
      // Error path
      return typeof Fallback === "function" ? (
        <Fallback error={error} />
      ) : (
        Fallback
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
