import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  state = {
    views: 0
  }
  
  clickToView = () => {
    console.log("Adding to Views");
  
    this.setState({
      views: this.state.views + 1
    })
  };
  render () {
    return (
      <React.Fragment>
      <BrowserRouter>
      
        <Navbar viewNumbers={this.state.views}/>

        <Switch>
            <Route exact path="/" render={ () => <Home myFunction={this.clickToView}/>} />
            <Route exact path="/about" component={About}/>
        </Switch>

      </BrowserRouter>
    </React.Fragment>
    )
  }
};

export default App;
