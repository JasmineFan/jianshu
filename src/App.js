import React, { Component } from "react";
import { Globalstyle } from "./style.js";
import { GlobalStyleIcon } from "./statics/iconfont/iconfont";
import Header from "./common/header/index.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route ,Routes} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <GlobalStyleIcon />
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<div>home</div>}></Route>
                <Route path="/detail" exact element={<div>detail</div>}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
