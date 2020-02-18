# rn-global-error-handler

> React Native error handler for unhandled exception

[![NPM](https://img.shields.io/npm/v/rn-global-error-handler.svg)](https://www.npmjs.com/package/rn-global-error-handler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rn-global-error-handler
```

## Usage

### Bare minimum
Extend your top level component from SafeComponent. This shows a popup whenever an unhandled exception airses.

```
import { Text } from "react-native";
import SafeComponent from "rn-global-error-handler";

class App extends SafeComponent {
  constructor(){
    super();
  }

  render(){
    return <Text>Cool App!</Text>
  }  
}

```

## License

MIT © [mujib517](https://github.com/mujib517)
