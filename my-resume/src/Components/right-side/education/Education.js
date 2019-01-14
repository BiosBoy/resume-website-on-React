import React from 'react'

class Education extends React.Component {
    render() {
        return (
            <div className="education-container">
                <div className="info-bullet info-bullet__grey">
                <div className="block-headline block-headline__education">
                        <div className="block-headline__icon info-bullet__icon-education info-bullet__icon-grey">
                            <i className="info-bullet__icon-first fas fa-university fa-lg"></i>
                        </div>
                        <div className="block-headline__text block-headline__text-education block-headline__text-grey"><span name="education">EDUCATION & CERTIFICATES</span></div>
                    </div>
                    <div className="info-bullet__text education-bullet__text">
                        <div className="info-bullet__icon info-bullet__icon-grey">
                            <i className="info-bullet__icon-first fas fa-angle-right fa-lg"></i>
                        </div>
                        <div className="education__title">
                            <p><strong>JS5/ES6+ CERTIFICATE</strong> / 2017</p>
                        </div>
                        <div className="education__text">
                            <p>Successful passed the Exam on JS5/ES6+ knowleges. Mail.ru Certification Center. Moscow.</p>
                        </div>
                    </div> 
                    <div className="info-bullet__text education-bullet__text">
                        <div className="info-bullet__icon info-bullet__icon-grey">
                            <i className="info-bullet__icon-first fas fa-angle-right fa-lg"></i>
                        </div>
                        <div className="education__title">
                            <p><strong>HTML5 CERTIFICATE</strong> / 2016</p>
                        </div>
                        <div className="education__text">
                            <p>Successful passed the Exam on HTML5 knowleges. Mail.ru Certification Center. Moscow.</p>
                        </div>
                    </div> 
                    <div className="info-bullet__text education-bullet__text">
                        <div className="info-bullet__icon info-bullet__icon-grey">
                            <i className="info-bullet__icon-first fas fa-angle-right fa-lg"></i>
                        </div>
                        <div className="education__title">
                            <p><strong>CSS3 CERTIFICATE</strong> / 2016</p>
                        </div>
                        <div className="education__text">
                            <p>Successful passed the Exam on CSS3 knowleges. Mail.ru Certification Center. Moscow.</p>
                        </div>
                    </div> 
                    <div className="info-bullet__text education-bullet__text">
                        <div className="info-bullet__icon info-bullet__icon-grey">
                            <i className="info-bullet__icon-first fas fa-angle-right fa-lg"></i>
                        </div>
                        <div className="education__title">
                            <p><strong>MASTER DEGREE. Engineer</strong> / 2010 - 2016</p>
                        </div>
                        <div className="education__text">
                            <p>Faculty of Medical Technologies and Systems. Has studied technologies, IT and medicine.</p>
                        </div>
                    </div> 
                </div>
            </div> 
        )
    }
}

export default Education;
