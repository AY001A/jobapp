import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todos from './Todos';
import Todo from './Todo';
import Home from './components/Home';


export default function App () {
  return (<div className='App'>
      <Router>
      <Switch>
          <Route exact path='/' children={<Home />} />
          <Route exact path='/' children={<Todos />} />
                 <Route path='/todos/:id' children={<Todo />} />
        </Switch>
      </Router>
    </div>
  )
}