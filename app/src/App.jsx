import { useState } from 'react'
import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import RegressionForm from './components/RegressionForm'

function App() {

  return (
    <Tabs defaultActiveKey="profile">
      <Tab eventKey="home" title="Home">
        <br/>
        <p>Tab 1 content</p>
      </Tab>
      <Tab eventKey="regression" title="Regression">
        <br/>
        <p>Tab 2 content</p>
        <RegressionForm/>
      </Tab>
      <Tab eventKey="classification" title="Classification">
        <br/>
        <p>Tab 3 content</p>
      </Tab>
      <Tab eventKey="unsupervised" title="Unsupervised">
        <br/>
        <p>Tab 4 content</p>
      </Tab>
  </Tabs>
  )

}

export default App
