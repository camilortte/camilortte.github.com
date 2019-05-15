import React from "react"
import Particles from 'react-particles-js';
import './scss/nav.scss';
import Scramble from 'react-scramble';
import { Link } from "gatsby"

function Nav(props) {
	const { location } = props; 
	console.log(location);
	return (
		<div className="header">
			<div className="head-img">
				<div >
					<Particles
						params={{
							"fps_limit": 28,
							"particles": {
								"number": {
									"value": 120,
									"density": {
										"enable": false
									}
								},
								"line_linked": {
									"enable": true,
									"distance": 30,
									"opacity": 0.4
								},
								"move": {
									"speed": 1
								},
								"opacity": {
									"anim": {
										"enable": true,
										"opacity_min": 0.05,
										"speed": 2,
										"sync": false
									},
									"value": 0.4
								}
							},
							"polygon": {
								"enable": true,
								"scale": 0.28,
								"type": "inline",
								"move": {
									"radius": 10
								},
								"url": location.origin + "/img/logo.svg",
								"inline": {
									"arrangement": "equidistant"
								},
								"draw": {
									"enable": true,
									"stroke": {
										"color": "rgba(255, 255, 255, .2)"
									}
								}
							},
							"retina_detect": false,
							"interactivity": {
								"events": {
									"onhover": {
										"enable": true,
										"mode": "bubble"
									}
								},
								"modes": {
									"bubble": {
										"size": 6,
										"distance": 40
									}
								}
							}
						}} />

				</div>
			</div>

			<h1 className="brand-title"><span className="gray">/</span>Un<span className="orange">\b</span>ackend<span
				className="gray">/g</span></h1>
			<Scramble className="brand-tagline"
				autoStart
				text="Programación y otro poco++"
				steps={[
				{
					roll: 30,
					action: '+',
					type: 'forward',
				},
				{
					roll: 120,
					action: '-',
					type: 'forward',
				},
				]}
			/>

			<div className="social-neworks">
				<a href="https://github.com/camilortte" target="_blank"
                    rel="noopener noreferrer"><span className="icon-github"></span></a>
				<a href="https://co.linkedin.com/pub/camilo-antonio-ram%C3%ADrez-morales/83/13b/984" target="_blank"
                    rel="noopener noreferrer"><span className="icon-linkedin"></span></a>				
				<a href="https://twitter.com/camilortte" target="_blank"
                    rel="noopener noreferrer"><span className="icon-twitter"></span></a>
				<a href="https://www.youtube.com/channel/UC21XtxeLHw5QTkhVX8Stmag" target="_blank"
                    rel="noopener noreferrer"><span className="icon-youtube"></span></a>				
			</div>

			<nav className="nav">
				<ul className="nav-list">
					{location && location.pathname.indexOf("about") < 0 &&(
						<li className="nav-item">
							<Link
								to="/about"							
								className="pures-button"
								>
								About
							</Link>
						</li>
					)}	
					{location && location.pathname !== '/' && (
						<li className="nav-item">
							<Link
								to="/"
								className="pures-button"
								>
								Blog
							</Link>
						</li>
					)}						
				</ul>
			</nav>
		</div>
	)

}


export default Nav
