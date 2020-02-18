import React, { Component } from 'react'

import SafeComponent from 'rn-global-error-handler'

export default class App extends Component {
  render() {
    return (
      <div>
        <SafeComponent />
      </div>
    )
  }
}
