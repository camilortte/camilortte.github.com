import React from "react";
import './scss/footer.scss';

function Footer() {
    return (
        <footer>
            <hr />
            <p>Made with love <span id="heart">&#128151;</span> - © {new Date().getFullYear()}</p>
            <div className="pure-menu pure-menu-horizontal ">
                <ul>
                    <li className="pure-menu-item"><a href="https://reactjs.org/" className="pure-menu-link">React</a></li>+
                <li className="pure-menu-item"><a href="https://www.gatsbyjs.org/" className="pure-menu-link">Gatsby</a>
                    </li>+
                <li className="pure-menu-item"><a href="http://purecss.io/" className="pure-menu-link">PureCss</a></li>+
                <li className="pure-menu-item"><a href="https://rpj.bembi.org/" className="pure-menu-link">Particles
                        JS</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
