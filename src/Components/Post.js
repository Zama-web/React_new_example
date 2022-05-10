import React from "react";
import './Post.css';
import ButtonSet from "./ButtonSet";


function Post({item_data}) {

    let { title, content } = item_data; // диструктивное присвоение -
            /*  аналогичная запись строчки выше:
                let item_data = {
                    title: item_data.title,
                    content: item_data.content
                } 
            */
    
    const date = new Date().toTimeString();

    return (
        <div className="post">
            <h2> {title} </h2>
            <p>  {content} </p>
            <p>  {date} </p>
            
            <ButtonSet/>    
        </div>
    )
}

export default Post;