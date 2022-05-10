import React, { Component } from "react";
import API from "../UserComponent/JSONplaceholderService";
import AddUserItem from "./AddUserItem";
import ListItem from "./ListItem";
import './List.css'
import ListHandlerBtnSet from "./ListHandlerBtnSet";


class ListContainer extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        API.getUsers((response) => this.setUsers(response.data));
    }

    setUsers(newUsers) {
        const users = newUsers.map(user => {
            const { id, name, username, phone } = user;
            return { id, name, username, phone };
        })
        this.setState(() => { return { users } });
    }

    addUserInfo(user) {
        this.setState((prev) => {
            user.id = Math.max(...prev.users.map(user_ => user_.id)) + 1;
            prev.users.push(user);
            return prev;
        })
    }

    sortById({desc}) {
        this.setState((prev) => {
            const coef = +desc*2 -1;
            prev.users.sort((a, b) => coef*(a.id - b.id));
            return prev;
        })
    }

    sortByWord(attr) {
        this.setState((prev) => {
            prev.users.sort((a, b) => {
                a = a[attr].toLowerCase();
                b = b[attr].toLowerCase();
                if (a > b) return 1
                else if (a < b) return -1
                return 0;
            });
            return prev;
        })
    }


    render() {
        return (
            <div>
                <AddUserItem addUserInfo={(user) => this.addUserInfo(user)} />

                <ListHandlerBtnSet
                    sortById={this.sortById.bind(this)}
                    sortByWord={this.sortByWord.bind(this)} />

                <ul>
                    {this.state.users.map((user, i) => <ListItem key={i} user={user} />)}
                </ul>

            </div>
        )
    }
}

export default ListContainer;