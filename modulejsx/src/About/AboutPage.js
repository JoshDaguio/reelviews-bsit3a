import React, { Component } from 'react';
import MemberCard from './MemberCard';
import AboutDetails from './AboutDetails'; 
import ELJ from '../Images/el-j.png';
import Kristine from '../Images/kristine.png';
import Josh from '../Images/josh.png';
import Paul from '../Images/paul.png';

export class AboutPage extends Component {

	//Instagram

	handleInstagram1 = () => {
		window.open('https://www.instagram.com/ejd222/', '_blank'); 
	};

	handleInstagram2 = () => {
		window.open('https://www.instagram.com/tineabsl/', '_blank');
	};

	handleInstagram3 = () => {
		window.open('https://www.instagram.com/boshieeee/', '_blank'); 
	};

	handleInstagram4 = () => {
		window.open('https://www.instagram.com/paulymng7/', '_blank'); 
	};

	//Facebook

	handleFacebook1 = () => {
		window.open('https://www.facebook.com/elj.diaz2', '_blank'); 
	};

	handleFacebook2 = () => {
		window.open('https://www.facebook.com/basiliotine', '_blank');
	};

	handleFacebook3 = () => {
		window.open('https://www.facebook.com/boshieeee', '_blank'); 
	};

	handleFacebook4 = () => {
		window.open('https://www.facebook.com/paultrustan.yumang', '_blank'); 
	};

	//GitHub

	handleGithub1 = () => {
		window.open('https://github.com/EJD222', '_blank'); 
	};

	handleGithub2 = () => {
		window.open('https://github.com/tinebasilio', '_blank');
	};

	handleGithub3 = () => {
		window.open('https://github.com/JoshDaguio', '_blank'); 
	};

	handleGithub4 = () => {
		window.open('https://github.com/paulyumang', '_blank'); 
	};

	render() {
		return (
			<div>   
				<AboutDetails />

				<div className="members">
				<MemberCard
					imageSrc={ELJ} 
					memberName="Elmalia Jane Diaz"
					memberRole="Front-End Developer"
					section="BSIT 3A"
					onInstagram={this.handleInstagram1} // Pass Function as Prop
					onFacebook={this.handleFacebook1} 
					onGithub={this.handleGithub1} 
				/>

				<MemberCard
					imageSrc={Kristine} 
					memberName="Kristine Angeli Basilio"
					memberRole="Front-End Developer"
					section="BSIT 3A"
					onInstagram={this.handleInstagram2} // Pass Function as Prop
					onFacebook={this.handleFacebook2}
					onGithub={this.handleGithub2} 
				/>

				<MemberCard
					imageSrc={Josh} 
					memberName="Joshua Benneth Daguio"
					memberRole="Front-End Developer"
					section="BSIT 3A"
					onInstagram={this.handleInstagram3} // Pass Function as Prop
					onFacebook={this.handleFacebook3}
					onGithub={this.handleGithub3} 
				/>

				<MemberCard
					imageSrc={Paul} 
					memberName="Paul Trustan Yumang"
					memberRole="Front-End Developer"
					section="BSIT 3A"
					onInstagram={this.handleInstagram4} // Pass Function as Prop
					onFacebook={this.handleFacebook4} 
					onGithub={this.handleGithub4} 
				/>
				</div> 

			</div>

		);
	}
	
}

export default AboutPage
