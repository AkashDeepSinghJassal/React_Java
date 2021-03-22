import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Detail/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './pages/Search'
import ReactCodeGen from './pages/ReactCodeGen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Search></Search>
        </Route>
        <Route exact path = "/rcg">
          <ReactCodeGen></ReactCodeGen>
        </Route>
        <Route exact path="/:id">
          <App></App>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
