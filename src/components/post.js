import React from 'react';
const Post  = ({title, content, author}) => {

    return (
        <div className='postData'>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>By {author}</p>
        </div>
    )
};

export default Post ;