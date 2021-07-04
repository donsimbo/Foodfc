import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Menu, Footer, Sidebar, Header, Home } from "./componnets"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>

        <Route path="/" exact component={() => <Menu />}/>
        <Route path="/Home" exact component={() => <Home />}/>

        
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
