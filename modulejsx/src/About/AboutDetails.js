import React from 'react'
import AboutBanner from '../Images/about-us-1.jpg';
import WelcomeImage from '../Images/contact-1.jpg';
import MissionImage from '../Images/mission-1.jpg';
import './about.css';

function AboutDetails() {
	
  	return (
		<div>
			<div className="about-us-header">
			<h1 className="about-us-title display-3 text-white">ABOUT US</h1>
			<img className="about-us-img"src={AboutBanner} alt="About Us" />
			</div>

			<div className="welcome">
				<div className="welcome-img">
					<img className="about-us-img"src={WelcomeImage} alt="Welcome!" />
				</div>
				<div className="welcome-details">
					<h2 className="h2">WELCOME TO REELVIEWS</h2>
					<hr />
					<p> 
						Welcome to Reelviews, your premier destination for insightful reviews, engaging 
						discussions, and captivating blog posts about movies and series.
					</p>
					<p> 
						It is a platform for in-depth discussions, genre explorations, and thought-provoking 
						articles that delve into the rich and diverse landscape of visual storytelling. From 
						examining the latest trends to analyzing the cultural and social implications of specific 
						narratives, Reelviews strives to offer a new and fresh perspective and foster a deeper 
						appreciation for the different medium.
					</p>
				</div>
			</div>

			<div className="mission">
				<div className="mission-details">
					<h2 className="h2 text-white">OUR MISSION</h2>
					<hr />
					<p className="text-white"> 
						At Reelviews, our mission is to provide a comprehensive understanding of the artistry, 
						storytelling, and impact of the audiovisual medium. Through thoughtful reviews and analysis, 
						I aim to deliver honest and well-informed assessments of movies and series, helping you make 
						informed decisions about your viewing choices.
					</p>
				</div>
				<div className="mission-img-div">
					<img className="mission-img"src={MissionImage} alt="Our Mission" />
				</div>
			</div>

			<div className="ntmy">
				<div className="ntmy-details">
					<h2 className="h2">NICE TO MEET YOU!</h2>
					<hr className="ntmy-line"/>
					<p>
						Hi, we are BSIT3 students and dedicated movie and series bloggers. Welcome to our blog, where we 
						share our passion for storytelling through in-depth reviews and recommendations. With a lifelong 
						fascination for cinema and television, we delve into the world of entertainment	to offer honest 
						and unbiased perspectives on the latest releases, hidden gems, and binge-worthy series.
					</p>
					<p>
						Through our blog, we aim to create a platform for fellow movie and series enthusiasts to connect 
						and engage in vibrant discussions. We believe that movies and series have the power to inspire, 
						challenge, and shape our perspectives. We meticulously analyze various aspects like plot, characters, 
						and cinematography to bring you comprehensive critiques that enrich your viewing experiences.
					</p>
					<p>
						Join us on this cinematic journey as we explore the vast universe of movies and series together. 
						Let's celebrate the art of storytelling, discover new stories that resonate with us, and engage in 
						lively discussions that fuel our shared love for this incredible medium of entertainment!
					</p>
				</div>
			</div>		
		</div>
	)

}

export default AboutDetails