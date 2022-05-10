import React, { Component } from "react";

class AddUserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            phone: ''
        }
    }

    submitHandler(event) {
        event.preventDefault();
        let { name, username, phone } = this.state;
        this.props.addUserInfo({ name, username, phone });
        this.setState(() => {
            return {
                name: '',
                username: '',
                phone: ''
            }
        })
    }

    changeInputValue(event, inputName) {
        this.setState((prev) => {
            prev[inputName] = event.target.value;
            return prev;
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.submitHandler(event) }>

                <div className="field">
                    <p>Имя</p>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.changeInputValue(event, 'name')} />
                </div>

                <div className="field">
                    <p>Ник</p>
                    <input value={this.state.username} type="text"
                        onChange={(event) => this.changeInputValue(event, 'username')} />
                </div>

                <div className="field">
                    <p>Телефон</p>
                    <input value={this.state.phone} type="text"
                        onChange={(event) => this.changeInputValue(event, 'phone')} />
                </div>

                <button> Добавить </button>

            </form>
        )
    }
}

export default AddUserItem;