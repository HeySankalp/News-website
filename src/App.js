import { useState } from 'react';
import './App.css';
import bg1 from "../src/components/bg1.jpg";
import LoadingBar from 'react-top-loading-bar'


import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {

  const [Progress, setProgress] = useState(0)
  const setProg = (prog) => {
    setProgress(prog)
  }

  return (
    <>
      <div style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}>

        <Router>

          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={Progress}
            height={3}
            loaderSpeed={600}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" setProg={setProg} />}  />
            <Route exact path="/about" element={<About setProg={setProg} />} />
            <Route exact path="/business" element={<News setProg={setProg} key="business" category="business" />}/>
            <Route exact path="/entertainment" element={<News setProg={setProg} key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" setProg={setProg} category="health" />} />
            <Route exact path="/science" element={<News key="science" setProg={setProg} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" setProg={setProg} category="sports" />}/>
            <Route exact path="/technology" element={<News key="technology" setProg={setProg} category="technology" />}/>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}
export default App