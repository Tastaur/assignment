import React from 'react';

import { ErrorPage } from '../../../pages/ErrorPage';


export interface IProps {
  children: JSX.Element,
}

export interface State {
  hasError: boolean,
  errorMessage: string,
  stackTrace: string,
}

export class ErrorBoundary extends React.Component<IProps, State> {
  state = {
    hasError: false,
    errorMessage: '',
    stackTrace: '',
  };

  componentDidCatch(error: Error, info: React.ErrorInfo){
    this.setState({
      hasError: true,
      errorMessage: error.message,
      stackTrace: info.componentStack.trim().split(/\r?\n/).map(str => str.trim()).join('\n'),
    });
  }

  renderError(){
    const { errorMessage, stackTrace } = this.state;
    return (
      <ErrorPage message={errorMessage} stack={stackTrace}/>
    );
  }

  render(){
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError){
      return this.renderError();
    }
    return children;
  }

}