import React from "react";
import './Counter.css';


function Counter({ done, all }) {
    
    const emojiList = ['😡', '😠', '☹️', '😔', '😏', '🙂', '😀', '🤣', '🤣']
    
    return (
        <div className="counter">
            <span> {done} </span> /
            <span> {all} </span>
            <span className="emoji"> {emojiList[done]} </span>
        </div>
    )
}

export default Counter;