import React, { Component } from "react";

const handleError = (err, fatal) => {
  console.log(err);
  console.log(`is fatal?: ${fatal}`);
  alert("Something went wrong. Please try again later");
}

export default class SafeComponent extends Component {
  constructor(props) {
    super(props);

    this.registerErrorHandler();
  }

  registerErrorHandler = () => ErrorUtils.setGlobalHandler(handleError);

  render() {
    return <h1>This is a Safe Component</h1>
  }
}

const safe = (component, customHandler) => {
  if (!component) {
    throw new Error("first argument to safe function must be a component");
  }
  if (customHandler && typeof customHandler !== "function") {
    throw new Error("second argument to safe function must be a function")
  }
  ErrorUtils.setGlobalHandler(customHandler || handleError);

  return component;
}

export { safe };