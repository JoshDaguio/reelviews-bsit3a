import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './login.css';
import './main.css';

const Login = ({ onLogin }) => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if (username && password) {
			onLogin(username);
		} else {
			alert('Please enter both username and password');
		}
	};

	return (
		<div className="container-fluid">
			<div className="row no-gutter">
				{/* The image half */}
				<div className="col-md-6 d-none d-md-flex bg-image"></div>

					{/* The content half */}
					<div className="col-md-6 bg-light">
						<div className="login d-flex align-items-center py-5">
							
							{/* Content */}
							<div className="container">
								<div className="row">
									<div className="col-lg-10 col-xl-7 mx-auto">
										<Router>
											<h4 className="display-4 login-title">LOG IN</h4>
											<p className="text-muted mb-4">Welcome Back to Reelviews!</p>						
											<form>
												<div className="form-group mb-3">
													<input
													id="inputEmail"
													type="text"
													placeholder="Username"
													required
													autoFocus
													className="form-control border-0 shadow-sm px-4 form-input"
													value={username}
													onChange={(e) => setUsername(e.target.value)}
													/>
												</div>
												<div className="form-group mb-3">
													<input
													id="inputPassword"
													type="password"
													placeholder="Password"
													required
													className="form-control border-0 shadow-sm px-4 text-primary form-input"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													/>
												</div>
												<button
													type="submit"
													className="login-button text-white"
												>
													<Link to="/Home" onClick={handleLogin}>
													LOGIN
													</Link>
												</button>
											</form>
										</Router>
									</div>
								</div>
							</div>
							{/* End */}

						</div>
					</div>
					{/* End */}
					
				</div>
		</div>
	)

}

export default Login