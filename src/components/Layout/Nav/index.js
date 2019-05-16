import React from "react"
import './scss/nav.scss';
import Scramble from 'react-scramble';
import { Link } from "gatsby";
import Image from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";


function Nav(props) {
	const { location } = props; 
	return (
		<StaticQuery
			query={navQuery}
			render={data => {
				return (
					<div className="header">

						<div className="head-img">
							<Image 
								className="pure-img logome"
								fixed={data.avatar.childImageSharp.fixed}
								alt='logo'
								critical={true}
							/>
						</div>

						<h1 className="brand-title"><span className="gray">/</span>Un<span className="orange">\b</span>ackend<span
							className="gray">/g</span></h1>
						<Scramble className="brand-tagline"
							autoStart
							text="Programación y otro poco++"
							steps={[
							{
								roll: 10,
								action: '+',
								type: 'forward',
							},
							{
								roll: 20,
								action: '-',
								type: 'forward',
							},
							]}
						/>

						<div className="social-neworks">
							<a href="https://github.com/camilortte" target="_blank"
								rel="noopener noreferrer"><span className="icon-github" aria-label="HitHub" ></span></a>
							<a href="https://co.linkedin.com/pub/camilo-antonio-ram%C3%ADrez-morales/83/13b/984" target="_blank"
								rel="noopener noreferrer"><span className="icon-linkedin" aria-label="Linkedib" ></span></a>				
							<a href="https://twitter.com/camilortte" target="_blank"
								rel="noopener noreferrer"><span className="icon-twitter" aria-label="Twitter" ></span></a>
							<a href="https://www.youtube.com/channel/UC21XtxeLHw5QTkhVX8Stmag" target="_blank"
								rel="noopener noreferrer" aria-label="Youtube" ><span className="icon-youtube"></span></a>				
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
			}}
		  />
	)

}

const navQuery = graphql`
  query NavQiery {
    avatar: file(absolutePath: { regex: "/camilortte.png/" }) {
      childImageSharp {
        fixed(width: 160, height: 160, jpegProgressive: false) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
export default Nav
