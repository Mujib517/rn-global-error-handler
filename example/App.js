import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';


import SafeComponent, { safe } from "rn-global-error-handler";
import Home from './Home';

function customErrHandler() {
  alert("This is a custom error handler");
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
}

// class App extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <Home />
//         </SafeAreaView>
//       </>
//     );
//   }
// };

export default safe(App, true, customErrHandler);
