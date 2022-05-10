import React, { Component } from "react";


class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        let { id, name, username, phone } = this.props.user;
        return (
            <li>
                <span> {id}) </span>
                <span> {name} </span>
                <span> {username} </span>
                <span> {phone} </span>
            </li>
        )
    }
}

export default ListItem;
