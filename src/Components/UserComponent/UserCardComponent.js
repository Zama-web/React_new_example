import React, { Component } from "react";
import './UserCardComponent.css';


class UserCardComponent extends Component {
    constructor({ user }) {
        let { name, username, email } = user;
        super();
        this.name = name;
        this.username = username;
        this.email = email;
    }

    render() {

        return (
            <div className="cardUser" >
                <h2> {this.name} </h2>
                <p> {this.username} </p>
                <a href="email"> {this.email} </a>
            </div>
        )
    }
}

export default UserCardComponent;