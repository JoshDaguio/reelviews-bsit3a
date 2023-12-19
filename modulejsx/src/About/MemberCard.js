import React, { Component } from 'react'
import './about.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export class MemberCard extends Component {
	
	handleInstagram = () => {
		this.props.onInstagram();
	};

	handleFacebook= () => {
		this.props.onFacebook();
	};

	handleGithub = () => {
		this.props.onGithub();
	};

	render() {
		return (
			<div className="membercard">
				<div className="membercard-2">
					<div className="membercard-3">
						<img className="member-image" src={this.props.imageSrc} alt={this.props.memberName}/>
						<h4 className="member-name h4"> {this.props.memberName} </h4>
						<h5 className="member-role h6"> {this.props.memberRole} </h5>
						<p className="member-section"> {this.props.section} </p>
						<div className="socials-icons">
							<i class="bi bi-instagram" onClick={this.handleInstagram}></i>
							<i class="bi bi-facebook" onClick={this.handleFacebook}></i>
							<i class="bi bi-github" onClick={this.handleGithub}></i>
						</div> 
					</div>
				</div>
			</div>
		)
	}
}

export default MemberCard