import React from 'react';

function Resume(props) {
    return (
        <div id="resume" class="resume">
            <h1>Resume</h1>
            <div id="resume-list" class="resume-list">

                <ul class="front-end">
                    <u class="underline">Front End</u>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>    
                </ul>

                <ul class="front-end">
                    <u class="underline">Back End</u>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>PWA's</li>
                </ul>
            
            </div>
            <a class="resume-link" href="images/resume.PNG" download="Wyatt Castellan Resume"><button>Download Resume</button></a>
        </div>
    )
}

export default Resume;