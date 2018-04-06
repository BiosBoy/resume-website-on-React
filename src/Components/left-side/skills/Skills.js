import React from 'react'

class Skills extends React.Component {
    render() {
        return (
                <div className="skills-container">
                    <div className="block-headline block-headline__skills">
                        <div className="block-headline__icon block-headline__icon-skills">
                            <i className="info-bullet__icon-first fas fa-chart-pie fa-lg"></i>
                        </div>
                        <div className="block-headline__text block-headline__text-skills block-headline__text-skills--personal"><span name="person">PERSONAL SKILLS</span></div>
                    </div>
                    <div className="skills__bullets skills__bullets--white">
                        <div className="skills-bullet skills-bullet__contacts">
                            <div className="skills-bullet__icon skills-bullet__icon--white">
                                <i className="info-bullet__icon-first far fa-dot-circle fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text skills-bullet__text--white"><span>UX/UI</span></div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--white skills-bullet__graph-line-frontend"></div> 
                        </div>
                        <div className="skills-bullet skills-bullet__contacts">
                            <div className="skills-bullet__icon skills-bullet__icon--white">
                                <i className="info-bullet__icon-first far fa-dot-circle fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text skills-bullet__text--white"><span name="marketing">MARKETING</span></div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--white skills-bullet__graph-line--backend"></div> 
                        </div>
                        <div className="skills-bullet skills-bullet__contacts">
                            <div className="skills-bullet__icon skills-bullet__icon--white">
                                <i className="info-bullet__icon-first far fa-dot-circle fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text skills-bullet__text--white"><span>TEAM WORK</span></div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--white skills-bullet__graph-line--teamwork"></div> 
                        </div>
                        <div className="skills-bullet skills-bullet__contacts">
                            <div className="skills-bullet__icon skills-bullet__icon--white">
                                <i className="info-bullet__icon-first far fa-dot-circle fa-w-16 fa-lg"></i>
                            </div>
                            <div className="skills-bullet__text skills-bullet__text--white"><span>CREATIVE</span></div> 
                            <div className="skills-bullet__graph-line skills-bullet__graph-line--white skills-bullet__graph-line--creative"></div> 
                        </div>                  
                    </div>
                </div> 
        )
    }
}

export default Skills;
