import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomeDetails from './HomeDetails'; 
import ContactImage1 from '../Images/contact-1.jpg';
import ContactImage2 from '../Images/contact-2.png';
import './Home.css';

import Blogs from '../Blog/BlogPage';
import About from '../About/AboutPage';
import EventAct from '../ReactEvent/Event';
import ContactPage from '../Contact/ContactPage';
import DataAct1 from '../DataFlow/UseState';

function AboutSection() {

	return (
		<div>
			<div id="cta" className="cta">
				<div className="about-details ml-auto">
					<h2>ABOUT REELVIEWS</h2>
					<hr className='about-hr'/>
					<p>
						Welcome to ReelViews, your premier destination for insightful reviews,
						engaging discussions, and captivating blog posts about movies and series.
						As founders and contributors of ReelViews, we're excited to share our
						passion for the world of cinema and television with you.
					</p>
					<Link to="/about" className="cta-btn">
						LET'S MEET
					</Link>
					</div>
			</div>
		</div>
	)

}

function ContactSection() {

	return (
		<div className="contact-container">
			<div className="contact-details">
				<h2 className='contact-title'>WE'D LOVE TO <br /> HEAR FROM YOU</h2>
				<hr className="contact-hr" />
				<p>
					We value your feedback, suggestions, and inquiries at ReelViews. If
					you have any questions, comments, or would like to get in touch with
					us, we are here to assist you.
				</p>
				<Link to="/contact" className="cta-btn">
					GET IN TOUCH
				</Link>	
			</div>
			<div className='contact-images'>
            	<img className="contact-img-1" src={ContactImage1} alt="Contact 1"/>
			</div>
			<div className='contact-images'>
            	<img className="contact-img-2" src={ContactImage2} alt="Contact 2"/>
			</div>
		</div>
	)

}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		currentRoute: '',
		};
	}

	handleRouteChange = (route) => {
		this.setState({ currentRoute: route });
	};

	render() {
		const {username} = this.props;
		return (
			<div>
				<HomeDetails />
				<AboutSection />
				<ContactSection />

				<Routes>
					<Route exact path="/blog" element={<Blogs />}/>
					<Route exact path="/myevent" element={<EventAct />}/>
					<Route exact path="/dataflow1" element={<DataAct1 />}/>
					<Route exact path="/about" element={<About />}/>
					<Route exact path="/contact" element={<ContactPage username={username} />}/>
				</Routes>
			</div>
		)
	}

}

export default App