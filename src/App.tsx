import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/style/plugin/main.css';
import './assets/style/styles.scss';

import Routes from './config/route'
import { HashRouter  as Router, Route, Link, Switch } from 'react-router-dom'
import Layout from "@components/layout"
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router basename="/">
          <Switch>
            <Layout>
              {
                Routes.map((route, index) => (
                  <Route exact path={route.path} component={route.component} key={index} />
                ))
              }
            </Layout>

          </Switch>
        </Router>
      </Suspense>

    </div>
  );
}

export default App;
