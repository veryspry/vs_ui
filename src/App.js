import React, { Fragment, Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Test, Auth } from "./views";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={Test} />
          <Route exact path="/auth" component={Auth} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
