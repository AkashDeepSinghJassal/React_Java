import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Detail/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Search from './pages/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Search></Search>
        </Route>
        <Route exact path="/:id">
          <App></App>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
reportWebVitals();
