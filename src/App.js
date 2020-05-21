import React from 'react';

import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import Login from './container/Login';
import List from './pages/list';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact render={()=><Redirect to='/login' />} />
        <Route path='/login' component={Login}/>
        <Route path='/list' component={List}/>
      </Router>
    </div>
  );
}

export default App;
