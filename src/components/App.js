import React from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import Guest from './Guest';
import Auth from "./Auth"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='dashboard' element={<Auth Component={Dashboard} />}></Route>
          <Route path='guest' element={<Guest />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>hello from React</h1> */}
    </div >
  );
}

export default App;
