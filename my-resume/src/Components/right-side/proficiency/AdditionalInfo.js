import React from 'react'

class AdditionalInfo extends React.Component {
    render() {
        return (
            <div className="additional-container">
                <div className="block-headline block-headline__skills">
                    <div className="block-headline__icon info-bullet__icon-grey info-bullet__icon-grey info-bullet__icon-grey-info">
                        <i className="info-bullet__icon-first fas fa-info fa-lg"></i>
                    </div>
                    <div className="block-headline__text block-headline__text-grey block-headline__text-additional"><span name="additional">ADDITIONAL INFO</span></div>
                </div>
                <div className="additional__text">
                    <h4>What I learn today:</h4>
                    <p>Improve my current knowledges in React/Redux and learn about IoT web apps development. I also inspired by PWA,
                        I think this is the future of high-load SPA development.</p>
                    <br></br>
                    <h4>My 3 favorite resources where from I grab new knowledges:</h4>
                    <p>Medium.com, Freecodecamp.com, Habrahabr.ru.</p>
                    <br></br>
                    <h4>Hobbies & Interests</h4>
                    <p>Self-development at least for 15 minutes every day. I love to travel on budget, already made a trip
                        around 21 countries. I cannot live without sport and long walks.</p>
                </div>
            </div> 
        )
    }
}

export default AdditionalInfo;
