import React, { Component } from "react";
import API from './JSONplaceholderService';
import UserCardComponent from "./UserCardComponent";


class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            todos: []
        };
        this.runApi();
    }

    runApi() {
        API.getUsers((result) => this.setUsers(result.data));
        API.getTodos((result) => this.setTodos(result.data));
    }

    setUsers(users) {
        this.setState({ users })
    }
    
    setTodos(todos) {
        this.setState({ todos })
    }

    render() {

        return (
            <div>
                <h2>Пользователи</h2>
                {this.state.users.map((elem, id) => <UserCardComponent key={id} user={elem} />)}
            </div>
        )
    }
}

export default UserList;
