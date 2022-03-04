import React from 'react';

function Footer() {
    return (
        <footer class="footer">
            <a href="https://github.com/wcastellan" target="_blank">
                <img src={require(`../images/github.png`)} alt="GitHub">
                </img>
            </a>

            <a href="https://www.linkedin.com/in/wyatt-castellan/" target="_blank">
                <img src={require(`../images/link.jpg`)} alt="LinkedIn">
                </img>
            </a>

            <a href="https://stackoverflow.com/" target="_blank">
                <img src={require(`../images/stack.png`)} alt="StackOverflow">
                </img>
            </a>
        
        </footer>
    )
}

export default Footer;