import React from 'react';
import './blogpost.css';

const BlogPost = ({ title, author, content, imageUrl }) => {

	return (
		/* BLOG CONTENT */
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					
					<article className="blog-post">	
						<div className="row">
							<div className="col-md-6">
								<div className="img-container">
									<img src={imageUrl} alt="" className="img-fluid" />
								</div>
							</div>

							<div className="col-md-6">
								<header>
									<h4>{title}</h4>
									<div>
										<p className="author">{author}</p>
									</div>
								</header>
								<div>
									<p className="post-content">{content}</p>
								</div>
							</div>
						</div>
					</article>

				</div>
			</div>
		</div>
	)	

}

export default BlogPost