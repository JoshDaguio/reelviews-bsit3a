import React from 'react';
import BlogBanner from '../Images/movie-reviews-1.jpg'; 
import './blog.css';

function BlogDetails() {

	return (
		<div>
			<div className="blog-header">
				<h1 className="blog-title display-4 text-white">BLOG</h1>
				<img className="blog-img"src={BlogBanner} alt="Blog" />
			</div>
		</div>
	)
	
}

export default BlogDetails