import React from 'react'

class ContactMe extends React.Component {
    render() {
        return (
                <div className="contacts-container">
                    <div className="block-headline block-headline__contacts">
                        <div className="block-headline__icon info-bullet__icon-contacts">
                            <i className="info-bullet__icon-first fas fa-address-book fa-lg"></i>
                        </div>
                        <div className="block-headline__text block-headline__text-contacts"><span name="contacts">CONTACTS</span></div>
                    </div>
                    <div className="info-bullets info-bullets__contacts-block">
                        <div className="info-bullet info-bullet__contacts">
                            <div className="info-bullet__icon info-bullets__icon-contacts">
                                <i className="info-bullet__icon-first fas fa-phone fa-lg"></i>
                            </div>
                            <div className="info-bullet__text info-bullets__text-contacts">
                                <p><a href="tel:+380508248725">+38 (050) 824-87-25</a></p>
                            </div> 
                        </div>
                        <div className="info-bullet info-bullet__contacts">
                            <div className="info-bullet__icon info-bullets__icon-contacts">
                                <i className="info-bullet__icon-first fas fa-envelope fa-lg"></i>
                            </div>
                            <div className="info-bullet__text info-bullets__text-contacts">
                                <p><a href="mailto:svyat770@gmail.com">svyat770@gmail.com</a></p>
                            </div> 
                        </div>
                        <div className="info-bullet info-bullet__contacts">
                            <div className="info-bullet__icon info-bullets__icon-contacts">
                                <i className="info-bullet__icon-first fas fa-globe fa-lg"></i>
                            </div>
                            <div className="info-bullet__text info-bullets__text-contacts">
                                <p>Kiev, Ukraine</p>
                            </div> 
                        </div>
                        <div className="info-bullet info-bullet__contacts">
                            <div className="info-bullet__icon info-bullets__icon-contacts">
                                <i className="info-bullet__icon-first fas fa-question-circle fa-lg"></i>
                            </div>
                            <div className="info-bullet__text info-bullets__text-contacts">
                                <p>Male, 25 years old</p>
                            </div> 
                        </div>                    
                    </div>
                </div> 
        )
    }
}

export default ContactMe;
