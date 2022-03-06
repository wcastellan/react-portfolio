import React from 'react';

function About(props) {
    return (
        <div id="about" class="about">
            <h1>About Me</h1>
            <img src={require(`../images/selfie.jpg`)} />
            <p>
                Hello and welcome to my Portfolio!  I am an engineer who has recently turned web developer. I am currently enrolled at UNC Chapel Hill coding bootcamp where I have learned to create cool web applications such as this. I love hiking, watching movies, and cooking.
            </p>
        </div>
    )
}

export default About;