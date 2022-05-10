import React, { Component } from "react";


class CounterClick extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    incr() {
        this.setState((prev) => { return { count: prev.count + 1 } })
    }

    render() {

        return (
            <div>
                <p onClick={() => { this.incr(); this.incr(); this.incr(); this.incr(); }}>
                    {this.state.count}
                </p>
            </div>
        )
    }
}

export default CounterClick;