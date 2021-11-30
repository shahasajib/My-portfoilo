import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Project from './Components/Project/Project';
import Projects from './Components/Projects/Projects';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SingleProjects from './Components/SingleProject/SingleProjects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='contact'>
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          {/* <Route path="/project/:id">
            <SingleProjects></SingleProjects>
          </Route> */}

        </Switch>

      </Router>
    </div>
  );
}

export default App;
