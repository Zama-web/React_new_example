import React, {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component {

    constructor({ descr, changeCompleted }) {      
        super(); // для работы с методом - constructor()
        this.descr = descr;
        this.state = { completed: descr.completed }; // state сохраняет изначальное состояние
        this.changeCompleted = changeCompleted;
    }

    changeClass() {
        this.setState({ // setState() - метод, который меняет state
            completed: !this.state.completed
        })
        this.changeCompleted(this.descr.id);
    }

    render() {
        let className_ = "item" + (this.state.completed ? ' completed' : '');
        return (
            <div onClick={()=>this.changeClass()} className={className_}>
                <h2>{this.descr.title}</h2>
                <p> {this.descr.content} </p>
            </div>
        )
    }
}

export default TodoItem;