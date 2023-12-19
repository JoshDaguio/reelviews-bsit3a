import React from 'react'
import './post.css';

function Post(props) {
  return (
    <div>
        <div className = 'content'>
            <div className='content2'>
                <div className='content3'>
                    <h1> {props.title } </h1>
                    <p> {props.content} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
