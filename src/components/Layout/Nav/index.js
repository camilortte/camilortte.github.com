import React from "react"
import Particles from 'react-particles-js';
import './scss/nav.scss';

function Nav() {
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
								"url": "img/logo.svg",
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
			<h2 className="brand-tagline">Programación y otro poco++</h2>

			<div className="social-neworks">
				<a href="solial-link"><span className="icon-github"></span></a>
				<a href="solial-link"><span className="icon-twitter"></span></a>
				<a href="solial-link"><span className="icon-youtube"></span></a>
				<a href="solial-link"><span className="icon-linkedin"></span></a>
			</div>

			<nav className="nav">
				<ul className="nav-list">
					<li className="nav-item">
						<a className="pures-button" href="http://purecss.io">About</a>
					</li>
					<li className="nav-item">
						<a className="pures-button" href="http://purecss.io">Blog</a>
					</li>
				</ul>
			</nav>
		</div>
	)

}


export default Nav
