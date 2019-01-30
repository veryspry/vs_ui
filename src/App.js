import React, { Fragment, Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { Header, Flex } from "./components";
import { Home, Auth, BlogList } from "./views";

import GlobalStyles from "./styles/global";

import theme from "./theme";

const client = new AWSAppSyncClient({
  url: process.env.REACT_APP_AUTH_ENDPOINT,
  region: "us-east-2",
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: process.env.REACT_APP_API_KEY
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
          {/* Global Style reset */}
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={BlogList} />
                <Route exact path="/auth" component={Auth} />
              </Fragment>
            </BrowserRouter>
          </ThemeProvider>
        </Rehydrated>
      </ApolloProvider>
    );
  }
}

export default App;
