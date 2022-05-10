import React, {Component} from 'react';
import Counter from './Counter';
import TodoItem from './TodoItem';

const data = [
    {
        id: 1,
        title: 'поесть',
        content: 'очень вкусно',
        completed: true
    },
    {
        id: 2,
        title: 'по работать',
        content: 'ответственно с интересом',
        completed: false
    },
    {
        id: 3,
        title: 'поужинать',
        content: 'в ресторане',
        completed: false
    },
    {
        id: 4,
        title: 'поспать',
        content: 'Приятных снов',
        completed: false
    },
    {
        id: 5,
        title: 'смотреть сон',
        content: 'хороший сон',
        completed: false
    },
    {
        id: 6,
        title: 'Снова утро',
        content: 'Позавтракать',
        completed: false
    },
    {
        id: 7,
        title: 'ddddfgj 555555 5 ',
        content: 'ffffgj d7g d7gf 7dfgj777777',
        completed: false
    },
    {
        id: 8,
        title: 'dddhjhg dfjgfj dfgj',
        content: 'fffd fgj dfgjdjfg d ',
        completed: false
    }
]

class TodoContainer extends Component {

    constructor() {
        super();
        this.state = {data}
    }

    changeCompleted(id) { // changeCompleted - этот метод находит id и меняет его свойство completed (если true, то на false и наоборот)
        let data = this.state.data;
        data.find(elem => elem.id === id).completed = !data.find(elem => elem.id === id).completed
        this.setState({ data });
    }


    render() {
        const data = this.state.data;

        const allTodos = () => data.length;
        const doneTodos = () => data.filter(elem => elem.completed).length;
        
        return (
            <div>
                {data.map((item, id) => <TodoItem
                                            key={id}
                                            changeCompleted={(id)=>this.changeCompleted(id)}
                                            descr={item} />)}
                <Counter done={doneTodos()} all={allTodos()} />
            </div>
        )    
    }
}


export default TodoContainer; 