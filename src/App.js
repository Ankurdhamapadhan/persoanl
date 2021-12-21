import './App.css';

import React, { useState } from 'react'
import Navbar from "./Component/Navbar"
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App=()=> {
 const  page = 4;
 const  apiKey=process.env.REACT_APP_API_key

 const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/"><News  setProgress={setProgress} apiKey={apiKey} key="science" pageSize={page} country="in" category="general" /></Route>
          <Route exact path="/bussiness"><News  setProgress={setProgress} apiKey={apiKey} key="bussiness" pageSize={page} country="in" category="business"/></Route>
          <Route exact path="/Entertainment"><News  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={page} country="in" category="entertainment"/></Route>
          <Route exact path="/Genral"><News  setProgress={setProgress} apiKey={apiKey} key="genral" pageSize={page} country="in" category="general"/></Route>
          <Route exact path="/Health"><News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize={page} country="in" category="health"/></Route>
          <Route exact path="/Science"><News  setProgress={setProgress} apiKey={apiKey} key="science" pageSize={page} country="in" category="science"/></Route>
          <Route exact path="/Sports"><News  setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={page} country="in" category="sports"/></Route>
          <Route exact path="/Technology"><News  setProgress={setProgress} apiKey={apiKey} key="echnology" pageSize={page} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
}

export default App

