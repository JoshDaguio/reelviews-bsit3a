import React from 'react';
import BlogPost from './BlogPost';
import './blog.css';

const BlogList = ({post}) => {
    return (
        <div>
            {post.map((post,index) => (
                <BlogPost key={index} title={post.title} author={post.author} imageUrl={post.imageUrl} content={post.content} />
            ))}
        </div>
    )
}

export default BlogList