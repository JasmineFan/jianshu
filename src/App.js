import React, { Component } from "react";
import { Globalstyle } from "./style.js";
import { GlobalStyleIcon } from "./statics/iconfont/iconfont";
import Header from "./common/header/index.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
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
            <div>
              <Header />
              <Route path="/" exact component={(props)=><Home{...props} />}></Route>
              <Route path="/detail/:id" exact component={(props)=><Detail {...props} />}></Route>
              {/* <Route path="/detail" exact component={(props)=><Detail {...props} />}></Route> */}
              
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
