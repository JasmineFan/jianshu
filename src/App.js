import React, { Component } from "react";
import { Globalstyle } from './style.js';
import { GlobalStyleIcon } from './statics/iconfont/iconfont'
import Header from "./common/header/index.js";
import store from "./store/index.js";
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <GlobalStyleIcon />
        <Provider store={store}> 
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
