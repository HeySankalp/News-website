import { useState } from 'react';
import './App.css';
import bg1 from "../src/components/bg1.jpg";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';


const App = ()=>{
  
  const [Progress, setProgress] = useState(0)
 const setProg = (prog)=>{
    setProgress(prog)
  }

    return (
      <>
        <div style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}>

          <Router>

            <NavBar/>
            <LoadingBar
              color='#f11946'
              progress={Progress}
              height={3}
              loaderSpeed={600}
              // onLoaderFinished={() => setProgress(0)}
            />
            <Switch>
              <Route exact path="/"><News  key="general" category="general" setProg={setProg} /></Route>
              <Route exact path="/about"><About setProg={setProg} /></Route>
              <Route exact path="/business"><News setProg={setProg} key="business" category="business" /></Route>
              <Route exact path="/entertainment"><News setProg={setProg} key="entertainment" category="entertainment" /></Route>
              <Route exact path="/health"><News key="health" setProg={setProg} category="health" /></Route>
              <Route exact path="/science"><News key="science" setProg={setProg}  category="science" /></Route>
              <Route exact path="/sports"><News key="sports" setProg={setProg}  category="sports" /></Route>
              <Route exact path="/technology"><News key="technology" setProg={setProg}  category="technology" /></Route>
            </Switch>
            <Footer/>
          </Router>
        </div>
      </>
    )
}
export default App