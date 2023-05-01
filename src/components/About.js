import { Component, useState } from "react";
import React from "react";
import Contact from "./Contact";
import { Link } from 'react-router-dom'
const About = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const returnPromise = () => {
    const promise = new Promise((resolve, reject) => {
      if (counter === 0) resolve();
      else reject();
    });
    return promise;
  };

  const func = async () => {
    const result = await fetch("https://api.github.com/users/ravipanchal24");
    // result.then(console.log(result));
    console.log(result);
    setTimeout(() => {
      returnPromise()
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("fail");
        });
    }, 3000);
  };

  console.log("start");

  console.log(counter);

  setTimeout(() => {
    console.log("first timeout");
  }, 1000);

  func();

  const [state, setState] = useState({ name: "Ravi", age: 25, location: "Delhi" });
  function setProfile() {
    setState({ ...state, name: "Ravi Panchal" })
  }

  const array = [1, 2, 3, 4];
  console.log(...array);
  console.log(array);

  let obj = { name: "Ravi", age: 25, location: "Delhi", prop: "abc" }
  // const {prop, ...rest} = obj;
  const [element1, ...rest] = array;
  console.log(rest);
  console.log(obj);


  return (
    <div className="about">
      <h1>About Page</h1>
      <h1>{state.name}</h1>
      <p style={{ color: "red" }}>{counter}</p>
      <button onClick={setProfile}>Click me</button>
      <button onClick={func}>Promise button</button>
      <form style={{ padding: "25px" }}>
        <label htmlFor="username">Username </label>
        <input type="text" name="username" required />
        <br />

        <input type="checkbox" name="check" id="check" />
        <label htmlFor="check">Check here</label>
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/contact">
        <button>Contact Us</button>
      </Link>
    </div>
  );
};

// class About extends Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 })
//     }

//     render() {
//         return (
//             <div className="about">
//                 <h1>About Page</h1>
//                 <p style={{ color: "red" }}>{this.state.count}</p>
//                 <button onClick={this.increment.bind()}>Click me</button>
//             </div>
//         );
//     }
// }

export default About;
