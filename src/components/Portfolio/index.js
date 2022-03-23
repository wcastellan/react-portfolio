import React from 'react';

function Portfolio(props) {
    return (
        <div class="portfolio">
            <h1>Portfolio</h1>
            <section class="portfolio-list">

            <div class="image">
                    <h2 class="header">Meal Crafter</h2>
                    <a class="ahref" href="https://protected-forest-66303.herokuapp.com/" target="_blank" rel="talkie-box">
                        <img class="work-image" src={require(`../images/talkiebox.PNG`)} alt="Talkie-Box" />
                    </a>
                </div>

                <div class="image">
                    <h2 class="header">Budget Tracker</h2>
                    <a class="ahref" href="https://mighty-wave-89856.herokuapp.com/" target="_blank" rel="budget-tracker">
                        <img class="work-image" src={require(`../images/budget-tracker.PNG`)} alt="budget tracker" />
                    </a>
                </div>

                <div class="image">
                    <h2 class="header">Code Quiz</h2>
                    <a class="ahref" href="https://wcastellan.github.io/code-quiz/" target="_blank" rel="code-quiz">
                        <img class="work-image" src={require(`../images/code-quiz.PNG`)} alt="code quiz" />
                    </a>
                </div>

                <div class="image">
                    <h2 class="header">Zoo Keeper</h2>
                    <a class="ahref" href="https://fathomless-waters-35524.herokuapp.com/" target="_blank" rel="zoo-keeper">
                        <img class="work-image" src={require(`../images/zookeeper.PNG`)} alt="zoo keeper" />
                    </a>
                </div>

                <div class="image">
                    <h2 class="header">Note Taker</h2>
                    <a class="ahref" href="https://note-taker-92116.herokuapp.com/notes" target="_blank" rel="note-taker">
                        <img class="work-image" src={require(`../images/notetaker.PNG`)} alt="Note Taker" />
                    </a>
                </div>
            
            </section>
        </div>
    )
}

export default Portfolio;