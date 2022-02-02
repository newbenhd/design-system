import React from "react";

class ErrorBoundaries extends React.Component<
  {
    fallbackComponent: React.ReactNode;
  },
  { hasError: boolean }
> {
  constructor(props: { fallbackComponent: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallbackComponent;
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;
