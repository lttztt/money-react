import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
// import Layout from './components/Layout'
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import Tag from './views/Tag';


export default function App() {
  return (
    <Router>
      <Switch>
        {/* exact 是精确匹配， 注意 404 不需要这样*/}
        <Route exact path="/tags">
          <Tags/>
        </Route>
        <Route exact path="/tag/:id">
          <Tag/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

