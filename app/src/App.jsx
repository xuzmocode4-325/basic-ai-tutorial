import { useState } from 'react'
import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './pages/Home'
import RegressionPage from './pages/RegressionPage'
import ClassificationPage from './pages/ClassificationPage';
import UnsupervisedPage from './pages/UnsupervisedPage';


function App() {
  const [key, setKey] = useState("home");

  return (
    <Tabs 
      defaultActiveKey="home" 
      className="full-width mt-3"
      id="main-tab"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        <br/>
        <Home className="p-3"/>
        <p>Tab 1 content</p>
      </Tab>
      <Tab eventKey="regression" title="Regression">
        <br/>
        <RegressionPage className="p-3"/>
        <p>Tab 2 content</p>
      </Tab>
      <Tab eventKey="classification" title="Classification">
        <br/>
        <ClassificationPage className="p-3"/>
        <p>Tab 3 content</p>
      </Tab>
      <Tab eventKey="unsupervised" title="Unsupervised">
        <br/>
        <UnsupervisedPage className="p-3"/>
        <p>Tab 4 content</p>
      </Tab>
  </Tabs>
  )

}

export default App
