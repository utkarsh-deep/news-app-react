import logo from './logo.svg';
import './App.css';

import {BrowserRouter , Switch, Route } from 'react-router-dom';
import Header from './components/header'
import About from './components/About'
import Contact from './components/contact'
import Home from './components/Home'
import AddNews from './components/AddNews';
import ShowNews from "./components/Shownews";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/addnews" component={AddNews} />
            <Route exact path="/news" component={ShowNews} />
            
            
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
