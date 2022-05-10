import React from "react";
import Post from "./Post";

function PostContainer() {

    const data = [
        {
            title: 'Очень важная новость 1',
            content: 'Содержание поста 1'
        },
        {
            title: 'Очень важная новость 2',
            content: 'Содержание поста 2'
        },
        {
            title: 'Очень важная новость 3',
            content: 'Содержание поста 3'
        },
        {
            title: 'Очень важная новость 4',
            content: 'Содержание поста 4'
        },
        {
            title: 'Менее важная новость 5',
            content: 'Содержание поста 5'
        }
    ]

    return (
        <div>
            {data.map((item, i) => <Post key={i} item_data={item} />)}
        </div>
    )
}

export default PostContainer;