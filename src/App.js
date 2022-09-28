import React, { Component } from "react";
import { Globalstyle } from "./style.js";
import { GlobalStyleIcon } from "./statics/iconfont/iconfont";
import Header from "./common/header/index.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Home from './pages/home'
import Detail from "./pages/detail";

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <GlobalStyleIcon />
        <Provider store={store}>
          <div>         
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" exact element={ <Home/>}></Route>
                <Route path="/detail" exact element={ <Detail/> }></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
