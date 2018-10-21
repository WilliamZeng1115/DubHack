import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { base } from './base';

import Navbar from './Components/Layout/Navbar';
import Home from './Components/Home/Home';
import Dashboard from './Components/DashBoard/Dashboard';
import About from './Components/About/About';
import SignIn from'./Components/Auth/SignIn'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Dashboard' component={Dashboard} />
                    <Route exact path='/About' component={About} />
                    <Route path='/signin' component={SignIn}/>
                    {/*<Route exact path=*/}
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
