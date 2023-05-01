import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 5,
            num2: 10
        }
    }

    increment = () => {
        this.setState((prevState) => {
        return {number: prevState.number + 1 }
        })
    }

    decrement = () => {
        this.setState({ num2: this.state.num2 - 1 })
    }

    xyz = () => {
        console.log("ok");
        // return this.state.number
    }



    render() {
        return (
            <div>
                <h1>Contact Page {this.state.number}</h1>
                {this.xyz()}
                <button onClick={this.increment}>Click me</button>
                <button onClick={this.decrement}>Click Here {this.state.num2}</button>
                <br />
                <Link to="/about">
                    <button onClick={this.increment}>Go Back</button>
                </Link>

            </div>
        )
    }
}

export default Contact;