import React from 'react'

class Links extends React.Component {
    render() {
        return (
                <div className="links-container">
                    <div className="block-headline block-headline__links">
                        <div className="block-headline__icon block-headline__icon-links" >
                            <i className="info-bullet__icon-first fas fa-users fa-lg"></i>
                        </div>
                        <div className="block-headline__text block-headline__text-links block-headline__text-links--connect"><span name="connect">CONNECT</span></div>
                    </div>
                    <div className="info-bullets info-bullets__links-block">
                        <div className="info-bullet info-bullet__links-container">
                            <div className="info-bullet__icon info-bullet__icon-links">
                                <i className="info-bullet__icon-first fab fa-linkedin fa-2x"></i>
                            </div>
                            <div className="info-bullet__text info-bullet__text-links"><a href="https://www.linkedin.com/in/sviatoslav-kuzhelev-78797b104/">LinkedIn.com/sviat_Kuzhelev</a></div> 
                        </div>
                        <div className="info-bullet info-bullet__links-container">
                            <div className="info-bullet__icon info-bullet__icon-links">
                                <i className="info-bullet__icon-first fab fa-git-square fa-2x"></i>
                            </div>
                            <div className="info-bullet__text info-bullet__text-links"><a href="https://github.com/BiosBoy">GitHub.com/biosboy</a></div> 
                        </div>
                        <div className="info-bullet info-bullet__links-container">
                            <div className="info-bullet__icon info-bullet__icon-links info-bullet__text-links--stackoverflow">
                                <i className="info-bullet__icon-first fab fa-stack-overflow fa-2x"></i>
                            </div>
                            <div className="info-bullet__text info-bullet__text-links"><a href="https://stackoverflow.com/users/9094962/sviat-kuzhelev">Stackoverflow.com/s_kuzhelev</a></div> 
                        </div>
                        <div className="info-bullet info-bullet__links-container">
                            <div className="info-bullet__icon info-bullet__icon-links">
                                <i className="info-bullet__icon-first fab fa-facebook-square fa-2x"></i>
                            </div>
                            <div className="info-bullet__text info-bullet__text-links"><a href="https://www.facebook.com/prosto.sviat">Facebook.com/prosto.sviat</a></div> 
                        </div>                    
                    </div>
                </div> 
        )
    }
}

export default Links;
