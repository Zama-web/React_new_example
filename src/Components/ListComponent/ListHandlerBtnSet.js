import React, { Component } from "react";


class ListHandlerBtnSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedColum: 'ID',
            sortDesc: true
        }
    }


    sortById() {
        let { sortedColum, sortDesc } = this.state;
        if (sortedColum === 'ID') {
            sortDesc = !sortDesc;
        } else {
            sortDesc = true;
        }

        this.props.sortById({
            desc: sortDesc
        })
        
        this.setState((prev) => {
            prev.sortedColum = 'ID';
            prev.sortDesc = sortDesc;
            return prev;
        })
    }

    sortByName() {
        this.props.sortByWord('name');
    }

    sortByUsername() {
        this.props.sortByWord('username')
    }


    render() {
        return (
            <div className="btnSet">
                <button onClick={this.sortById.bind(this)}> By id </button>
                <button onClick={() => this.sortByName()}> By name </button>
                <button onClick={() => this.sortByUsername()}> By username </button>
            </div>
        )
    }
}

export default ListHandlerBtnSet;