import './App.css';
import image from './img.png';
import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<>
				<div className="nav">
					<div className="logo">Cop-Up-On</div>
					<div className="nav-menu">
						<ul>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
					<div className="sign-in-btn">
						<button>Sign In</button>
					</div>
				</div>
				<div className="home">
					<div className="home-left">
						<div>
							<button>Get Started</button>
							<p>Save More with Our Exclusive Coupon</p>
						</div>
					</div>
					<div className="home-right">
						<img src={image} alt="image" />
					</div>
				</div>
			</>
		);
	}
}

export default App;
