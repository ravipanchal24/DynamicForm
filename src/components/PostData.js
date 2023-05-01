import React, {useState} from 'react';
import Post from './post';

const PostData = () => {
    const [post , setPost] = useState([
        {
            title: 'Post 1',
            content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
            author: 'Manish'
        },
        {
            title: 'Post 2',
            content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
            author: 'Ravi'
        },
        {
            title: 'Post 3',
            content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
            author: 'Manisha'
        }
    ]);
    return(
        <div className='postFeed'>
            {
                post.map((post, key) => (
                    <Post title={post.title} content={post.content} author={post.author} key={key}/>
                ))
            }
        </div>
    )
};

export default PostData;