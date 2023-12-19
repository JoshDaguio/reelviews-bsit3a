import React from 'react';
import './blog.css';

function BlogSidebar() {

	return (
		<div>
			{/* <!-- SIDEBAR --> */}
			<aside>

				{/* widget search */}
				<div className="widget-search">
					<form className="search-form">
						<label for="sidebar-search" className="sr-only">Search</label>
						<input type="text" id="sidebar-search" placeholder="Search..."></input>
					</form>
				</div>

				{/* widget recent posts */}
				<div className="widget-recents">
					<h5 className='sidebar-heading rp-title'>RECENT POSTS</h5>
					<div className="list-unstyled">
							<p className="list-group-item-text custom-link">
								The 5 Most Anticipated Movies for the 4th Quarter of 2023
							</p>
							<p className="list-group-item-text custom-link">
								The Hottest TV Shows on Netflix: A Look at the Most-Watched Series
							</p>
							<p className="list-group-item-text custom-link">
								The Worst Movies of 2022: The Cinematic Letdowns
							</p>
					</div>
				</div>

				{/* widget categories */}
				<div className="widget-categories">
					<h5 className='sidebar-heading categories-title'>CATEGORIES</h5>
					<ul className='list-unstyled'>
						<li> <p className="custom-link category">Collections</p> </li>
						<li> <p className="custom-link category">Movies</p> </li>
						<li> <p className="custom-link category">Series</p> </li>
					</ul>
				</div>
			</aside>
		</div>
	)

}

export default BlogSidebar  