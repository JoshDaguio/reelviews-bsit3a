import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import BlogDetails from './BlogDetails';
import BlogPost from './BlogPost';
import BlogSidebar from './BlogSidebar';
import './blog.css';

const BlogPage = () => {

	const [posts, setPosts] = useState([
		{ title: '', author: '', content: '', imageUrl: '' },
	]);

	const [newPost, setNewPost] = useState({
		title: '',
		author: '',
		content: '',
	});

	const handleAddPost = (e) => {
		e.preventDefault();
		if (newPost.title && newPost.content) {
			setPosts([...posts, newPost]);
			setNewPost({ title: '', author: '', content: '', imageUrl: '' });	
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			Resizer.imageFileResizer(
				file,
				300,
				200,
				'JPEG',
				100,
				0,
				(resizedImage) => {
					setNewPost({ ...newPost, imageUrl: resizedImage });
				},
				'base64'
			);
		}
	};

	return (
		<div>
			<BlogDetails />
			<div className="container" style={{ padding: '90px 0' }}>

				<div className="row">
					<div className="col-md-8" style={{ paddingRight: '40px'}}>
						{/* Blog Posts */}
						<form onSubmit={handleAddPost}>
							<h3 className="cnb">CREATE A NEW BLOG POST</h3>
								<input
								type="text"
								className="form-control mb-3"
								placeholder="Title"
								value={newPost.title}
								onChange={(e) =>
									setNewPost({ ...newPost, title: e.target.value })
								}/>

								<input
								type="text"
								className="form-control mb-3"
								placeholder="Author"
								value={newPost.author}
								onChange={(e) =>
									setNewPost({ ...newPost, author: e.target.value })
								}/>

								<textarea
								className="form-control mb-3"
								placeholder="Content"
								value={newPost.content}
								onChange={(e) =>
									setNewPost({ ...newPost, content: e.target.value })
								}/>

								<label className="mb-2">Thumbnail:</label>
								<div className="input-group mb-3">
									<input
										type="file"
										className="form-control visually-hidden" style={{ paddingTop: '1rem', paddingBottom: '2.9rem' }} // Add a class for visually hiding the text
										id="thumbnail"
										accept="image/*"
										onChange={handleImageChange}
										aria-describedby="thumbnailBtn"
									/>
								</div>

								<button className="post-btn">Add Post</button>
						</form>

						<div className="row">
							{posts.map((post, index) => (
							<BlogPost
								key={index}
								title={post.title}
								author={post.author}
								content={post.content}
								imageUrl={post.imageUrl}
							/>
							))}
						</div>
					</div>

					<div className="col-md-4">
						{/* Sidebar */}
						<BlogSidebar />
					</div>
				</div>

			</div>
		</div>
	)

}

export default BlogPage