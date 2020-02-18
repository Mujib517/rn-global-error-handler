import React, { Component } from 'react'

export default class SafeComponent extends Component {
  constructor() {
    super();

    this.registerErrorHandler();
  }

  registerErrorHandler = () => ErrorUtils.setGlobalHandler(this.handleError);

  handleError = (err, fatal) => {
    console.log(err);
    console.log(`is fatal?: ${fatal}`);
    alert("Something went wrong. Please try again later");
  }

  render() {
    return <h1>This is a Safe Component</h1>
  }
}
