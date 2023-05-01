import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostData from './components/PostData';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" exact element={<About />}>
        </Route>
        <Route path="/contact" exact element={<Contact />}>
        </Route>

        <Route path="/" exact element={
          <div>
            <Nav />
            <h1 className="main-heading">Let's Learn React</h1>
            <PostData />
          </div>
        }>
        </Route>
        <Route path="/form" exact element={<Form />}>
        </Route>
      </Routes>


    </BrowserRouter>
  );
}

function Nav() {
  return (
    <div className="Navbar">
      <li>Home</li>
      <Link to="/about">
        <li>About Us</li>
      </Link>
      <li>Contact Us</li>
      <Link to="/form">
        <li>form</li>
      </Link>
    </div>
  );
}

export default App;