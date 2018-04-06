import React from 'react'

class Experience extends React.Component {
    render() {
        return (
                <div className="skills-container">
                     <div className="block-headline block-headline__skills">
                        <div className="block-headline__icon info-bullet__icon-grey info-bullet__icon-grey">
                            <i className="info-bullet__icon-first fas fa-tachometer-alt fa-lg"></i>
                        </div>
                        <div className="block-headline__text block-headline__text-skills--right block-headline__text-grey"><span name="skills-gray">MY FAVORITE TECH STACK</span></div>
                    </div>
                    <div className="skills__bullets skills__bullets-first">
                        <div className="bullets__title">CLIENT SIDE</div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first fab fa-react fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">ReactJS</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--react skills-bullet__graph-line--frontend"></div> 
                        </div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first far fa-dot-circle fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">Redux</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--redux skills-bullet__graph-line--backend"></div> 
                        </div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first fab fa-js fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">JS5/ES6+</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--js skills-bullet__graph-line--teamwork"></div> 
                        </div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first fab fa-html5 fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">HTML5</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--html skills-bullet__graph-line--creative"></div> 
                        </div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first fab fa-css3 fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">CSS3</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--css3 skills-bullet__graph-line--creative"></div> 
                        </div>                  
                    </div>
                    <div className="skills__bullets skills__bullets-second">
                    <div className="bullets__title">SERVER SIDE</div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first fab fa-node-js fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">NodeJS</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--nodejs skills-bullet__graph-line--frontend"></div> 
                        </div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first far fa-dot-circle fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">Express</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--express skills-bullet__graph-line--backend"></div> 
                        </div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first fas fa-database fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">MongoDB</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--mongodb skills-bullet__graph-line--teamwork"></div> 
                        </div>
                        <div className="skills-bullet contacts">
                            <div className="skills-bullet__icon">
                                <i className="info-bullet__icon-first fab fa-gulp fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text">Gulp</div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--grey skills-bullet__graph-line--gulp skills-bullet__graph-line--creative"></div> 
                        </div>                  
                    </div>
                </div> 
        )
    }
}

export default Experience;
