import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './components/Layout'



export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
function NoMatch(){
  return <h2>404</h2>
}

function Statistics() {
  return (
    <Layout>
      <h3>统计3</h3>
    </Layout>
  )
}


  function Tags() {
    return (
      <Layout>
        <h3>标签3</h3>
      </Layout>
    )
  }

  function Money() {
  return (
    <Layout>
      <h3>记账3</h3>
    </Layout>
  )
}
