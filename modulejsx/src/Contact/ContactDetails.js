import React from 'react';
import ContactBanner from '../Images/contact-2.png';
import './contact.css';

function ContactDetails() {

	return (
		<div>
			<div className="contact-us-header">
				<h1 className="contact-us-title display-4 text-white">CONTACT US</h1>
				<img className="contact-us-img"src={ContactBanner} alt="Contact Us"/>
			</div>
		</div>
	)

}

export default ContactDetails