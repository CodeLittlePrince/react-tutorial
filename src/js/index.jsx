import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom';
import 'scss/index.scss';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Luozi from './pages/Luozi.jsx';

const list = [
  {name: 'Kitty', age: 7},
  {name: 'Tom', age: 8},
  {name: 'Jerry', age: 9},
  {name: 'Harry', age: 10},
  {name: 'Muji', age: 7},
  {name: 'Haly', age: 8}
];

ReactDOM.render(
    <Router>
        <Layout>
            <Route path="/" exact render={() => (<Home list={list}/>)} />
            <Route path="/luozi" component={Luozi}/>
        </Layout>
    </Router>,
    document.getElementById('app')
);