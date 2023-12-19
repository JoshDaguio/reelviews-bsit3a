import React from 'react';
import HomeBanner from '../Images/home-welcome-1.jpg';
import Inception from '../Images/inception-1.jpg';
import Friends from '../Images/friends-1.jpeg';
import Parasite from '../Images/parasite-1.jpg';
import AnticipatedMovies from '../Images/anticipated-movies-1.jpg';
import HottestTVShow from '../Images/hottest-tv-shows-1.jpg';
import CinematicLetdowns from '../Images/cinematic-letdowns-1.jpg';
import './Home.css';

function HomeDetails() {

	return (
		<div>
			<div className="home-header">
				<h1 className="home-title display-3 text-white">WELCOME TO REELVIEWS!</h1>
				<hr className="home-hr"/> 
				<p className="home-subtitle h4 text-white">Your Source of Movie & Series Reviews!</p>
				<img className="home-img overlay" src={HomeBanner} alt="Welcome to ReelViews" />
			</div>	

			<div className="py-5">
				<h2>IN THE SPOTLIGHT</h2>
				<hr />
				<div className="container py-3">
					
					<div className="row">
						{/* First Card */}
						<div className="col-12 col-sm-8 col-md-6 col-lg-4">
							<div className="card h-100 d-flex flex-column">
								<img className="card-img" src={Inception} alt="Inception" />
								<div className="card-body">
									<button className="btn btn-sm text-white mb-auto">MOVIES</button>
									<h5 className="card-title py-3">Inception: Unraveling the Layers of Dreams and Reality in Christopher Nolan's Mind-Bending Thriller</h5>
									<p className="card-text">
										Title: “Inception” Rating: 8/10 Summary “Inception,” directed by Christopher Nolan, is a mind-bending sci-fi thriller
										that delves into the power of dreams and the intricacies of the human mind. The...<br /><br />
									</p>
								</div>
								<div className="mt-auto mb-3 ml-3">
									<button className="card-btn">Read More</button>
								</div>
							</div>
						</div>

						{/* Second Card */}
						<div className="col-12 col-sm-8 col-md-6 col-lg-4">
							<div className="card h-100 d-flex flex-column">
								<img className="card-img" src={Friends} alt="Friends" />
								<div className="card-body">
									<button className="btn btn-sm text-white mb-auto">SERIES</button>
									<h5 className="card-title py-3">Friends: The Beloved Sitcom that Defined a Generation</h5>
									<p className="card-text">
										Title: “Friends” Rating: 9/10 Summary “Friends” is a highly acclaimed sitcom that aired from 1994 to 2004.
										Directed by James Burrows, Kevin S. Bright, and and various other directors, the show stars Jennifer Aniston, 
										Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew...
									</p>
								</div>
								<div className="mt-auto mb-3 ml-3">
									<button className="card-btn">Read More</button>
								</div>
							</div>
						</div>

						{/* Third Card */}
						<div className="col-12 col-sm-8 col-md-6 col-lg-4">
							<div className="card h-100 d-flex flex-column">
								<img className="card-img" src={Parasite} alt="Parasite" />
								<div className="card-body">
									<button className="btn btn-sm text-white mb-auto">MOVIES</button>
									<h5 className="card-title py-3">Parasite: A Riveting Exploration of Class Divide and Human Desperation</h5>
									<p className="card-text">
										Title: “Parasite” Rating: 10/10 Summary “Parasite” is a 2019 South Korean dark comedy thriller film directed by Bong Joon-ho.
										It tells the story of the impoverished Kim family who infiltrates the lives of the wealthy Park family...
									</p>	
								</div>
								<div className="mt-auto mb-3 ml-3">
									<button className="card-btn">Read More</button>
								</div>
							</div>
						</div>
					</div> 
					{/* End of Row */}

				</div>
			</div>

			<div className='quote-container py-5'>
				<h3 className='quote text-white'>“Movies and series have the remarkable ability to transport us to different worlds, evoke emotions, and challenge our perspectives.”</h3>
				<p className='quote-by text-white'>- Unknown</p>
			</div>

			<div className="py-5">
				<h2>FROM REELVIEWS</h2>
				<hr />
				<div className="container py-3">

					<div className="row">
						{/* First Card */}
						<div className="col-12 col-sm-8 col-md-6 col-lg-4">
							<div className="card h-100 d-flex flex-column">
								<img className="card-img" src={AnticipatedMovies} alt="Inception" />
								<div className="card-body">
									<button className="btn btn-sm text-white mb-auto">COLLECTIONS</button>
									<h5 className="card-title py-3">The 5 Most Anticipated Movies for the 4th Quarter of 2023</h5>
									<p className="card-text">
										It’s been quite a year for movies so far, and as we enter the fall and holiday season, 
										film enthusiasts are eagerly anticipating the release of a new wave of captivating films. 
										From the one-two punch of “Barbie” and “Oppenheimer”...<br /><br />
									</p>
								</div>
								<div className="mt-auto mb-3 ml-3">
									<button className="card-btn">Read More</button>
								</div>
							</div>
						</div>

						{/* Second Card */}
						<div className="col-12 col-sm-8 col-md-6 col-lg-4">
							<div className="card h-100 d-flex flex-column">
								<img className="card-img" src={HottestTVShow} alt="Friends" />
								<div className="card-body">
									<button className="btn btn-sm text-white mb-auto">COLLECTIONS</button>
									<h5 className="card-title py-3">The Hottest TV Shows on Netflix: A Look at the Most-Watched Series</h5>
									<p className="card-text">
										Netflix continues to dominate the streaming landscape with its vast library of original content. 
										From gripping dramas to thrilling mysteries, the platform offers a wide range of TV shows that...
									</p>
								</div>
								<div className="mt-auto mb-3 ml-3">
									<button className="card-btn">Read More</button>
								</div>
							</div>
						</div>

						{/* Third Card */}
						<div className="col-12 col-sm-8 col-md-6 col-lg-4">
							<div className="card h-100 d-flex flex-column">
								<img className="card-img" src={CinematicLetdowns} alt="Parasite" />
								<div className="card-body">
									<button className="btn btn-sm text-white mb-auto">COLLECTIONS</button>
									<h5 className="card-title py-3">The Worst Movies of 2022: The Cinematic Letdowns</h5>
									<p className="card-text">
										As movie enthusiasts, we eagerly anticipate the release of new films, hoping to be captivated, entertained, 
										and transported to different worlds. However, not every cinematic experience lives up to our expectations. 
										In 2022, there were...
									</p>	
								</div>
								<div className="mt-auto mb-3 ml-3">
									<button className="card-btn">Read More</button>
								</div>
							</div>
						</div>
					</div>
					{/* End of Row */}

				</div>
			</div>
		</div>
	)

}

export default HomeDetails