import React from "react";
import './scss/footer.scss';

function Footer() {
    return (
        <footer>
            <div className="content-subhead"/>
            <p>Made with love <span id="heart" role="img" aria-label="jsx-a11y/accessible-emoji" alt="love" >&#128151;</span> 
            - {new Date().getFullYear()}</p>
            <div className="pure-menu pure-menu-horizontal ">
                <ul>
                    <li className="pure-menu-item"><a href="https://reactjs.org/" className="pure-menu-link">React</a><span>+</span></li>
                <li className="pure-menu-item"><a href="https://www.gatsbyjs.org/" className="pure-menu-link">Gatsby</a><span>+</span>
                    </li>
                <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">PureCss</a><span>+</span></li>
                <li className="pure-menu-item"><a href="https://www.netlify.com" className="pure-menu-link">Netlify</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
