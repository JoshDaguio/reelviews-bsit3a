import React from 'react';
import emailjs from 'emailjs-com';
import ContactDetails from './ContactDetails';

export default function Contact({username}) {

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_f18g0bk', 'template_3syerkt', e.target, 'SVWO5SHc7BEHyAQK1')
			.then((result) => {
				return (
					alert('Message Successfully Sent.')
				)
			}, (error) => {
				return (
					alert('Message Failed to Send.')
				)		
			}
		);
	}

	return (
		<div>
			<ContactDetails />
			<div className="contact-container">
				<div className="contact-form">
					<h2 className='lget-in-touch-title h2'>LET'S GET IN TOUCH</h2>
					<p>We value your feedback, suggestions, and inquiries at Reelviews. If you have any questions, comments, 
						or would like to get in touch with us, we are here to assist you. Please feel free to reach out to 
						us using the contact information provided below.
					</p>
					<form onSubmit={sendEmail}>
						<input type="text" name="from_name" value={username} required /> <br /><br />
						<input type="email" name="email" required placeholder="Email"/><br /><br />
						<input type="text" name="subject" required placeholder="Subject"/> <br /><br />
						<textarea name="message" placeholder="Message"/> <br /><br />
						<input type="submit" value="SEND MESSAGE" className="text-white"/>
					</form>
				</div>
				<div className="contact-details">
					<h2 className="contact-information-title">MORE CONTACT INFORMATION</h2>
					<b>Address</b>
					<p>Angeles City</p>
					<b>Email Us</b>
					<p>reelviews@gmail.com</p>
					<b>Call Us</b>
					<p>800-123-456</p>
					<b>Follow Us</b>
					<div className="follow-us-icons">
						<i class="bi bi-instagram follow-us-icon"></i>
						<i class="bi bi-facebook follow-us-icon"></i>
						<i class="bi bi-github follow-us-icon"></i>
					</div>
					<iframe 
						title="Google Map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7702.315023158315!2d120.59047839177359!3d15.149691991617216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2402dee0d49%3A0x6ccb1574d15b576d!2sAngeles%20University%20Foundation!5e0!3m2!1sen!2sph!4v1702713591419!5m2!1sen!2sph" 
						width="661" 
						height="350" 
						style={{ border: "0" }}
						allowfullscreen="" 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
			</div>
		</div>
	);
}