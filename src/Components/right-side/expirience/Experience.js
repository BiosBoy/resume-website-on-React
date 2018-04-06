import React from 'react'
import experienceAccardione from '../../../Model/experienceAccardione'
import iteamsHolder from '../../../IteamStore/iteamsStore'

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click' , this.handleClick);
    }

    handleClick(e) {
        let { textContainer, textButton } = iteamsHolder().iteamsSupport;
        experienceAccardione(e, textContainer, textButton);
    }

    render() {
        return (
                <div className="experience-container">
                    <div className="block-headline block-headline__experience">
                        <div className="block-headline__icon info-bullet__icon-experience info-bullet__icon-grey">
                            <i className="info-bullet__icon-first fas fa-briefcase fa-lg"></i>
                        </div>
                        <div className="block-headline__text block-headline__text-experience block-headline__text-grey block-headline__text-grey--experience"><span name="experience">WORK EXPERIENCE</span></div>
                    </div>
                    <div className="info-bullets info-bullets__experience-block">
                        <div className="info-bullet info-bullet__grey">
                            <div className="info-bullet__icon info-bullet__icon-grey">
                                <i className="info-bullet__icon-first fas fa-angle-right fa-lg"></i>
                            </div>
                            <div className="info-bullet__text block__text-grey block-headline__text-grey block-headline__text-grey--overflow">
                                <div className="experience__title">
                                    <ul>
                                        <li><strong>FULL-STACK JAVASCRIPT DEVELOPER</strong> / STORMOFF GmbH Company</li>
                                    </ul>
                                    <p>apr 2016 - mar 2018</p>
                                </div>
                                <div className="experience__text">
                                    <p>For what purpose have I been hired - to create Landing Pages and E-mail letters, support current company Websites (stormoff.ru, medmet.ru, dixion.ru).</p>
                                    <br></br>
                                    <p>My responsibilities:</p>
                                    <ul>
                                        <li>Creation commercial websites and Landing Pages for company.</li>
                                        <li>Stack: HTML5, CSS3, JS on NodeJS. Back-end maintain.</li>
                                        <li>A huge experience with Wordpress and Bitrix CMS's.</li>
                                        <li>Digital Marketing promotion (SEO, PPC, SMM, CPA).</li>
                                        <li>Work in the team of 8 employers.</li>
                                        <li>Agile methodology.</li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="info-bullet__button--more__container">
                                <button className="info-bullet__button--more">--- see details ---</button>
                            </div>
                        </div>
                        <div className="info-bullet info-bullet__grey">
                            <div className="info-bullet__icon info-bullet__icon-grey">
                                <i className="info-bullet__icon-first fas fa-angle-right fa-lg"></i>
                            </div>
                            <div className="info-bullet__text block__text-grey block-headline__text-grey block-headline__text-grey--overflow">
                                <div className="experience__title">
                                    <ul>
                                        <li><strong>FRONT-END JAVASCRIPT DEVELOPER</strong> / SADMARKET LTD Company</li>
                                    </ul>
                                    <p>feb 2015 - mar 2016</p>
                                </div>
                                <div className="experience__text">
                                    <p>For what purpose have I been hired - to develop the company website. Design and support it.</p>
                                    <br></br>
                                    <p>My responsibilities:</p>
                                    <ul>
                                        <li>Website development. Stack: HTML5 & CSS3 & PHP coding.</li>
                                        <li>Development design and UX/UI structure.</li>
                                        <li>Work in the team of 3 employers.</li>
                                        <li>Digital Marketing promotion (SEO, PPC, SMM, CPA).</li>
                                        <li>Back-end maintain.</li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="info-bullet__button--more__container">
                                <button className="info-bullet__button--more">--- see details ---</button>
                            </div>
                        </div>
                        <div className="info-bullet info-bullet__grey">
                            <div className="info-bullet__icon info-bullet__icon-grey">
                                <i className="info-bullet__icon-first fas fa-angle-right fa-lg"></i>
                            </div>
                            <div className="info-bullet__text block__text-grey block-headline__text-grey block-headline__text-grey--overflow">
                                <div className="experience__title">
                                    <ul>
                                        <li><strong>HTML-CODER</strong> / MASSAGEMAGIC Company</li>
                                    </ul>
                                    <p>okt 2014 - jan 2015</p>
                                </div>
                                <div className="experience__text">
                                    <p>For what purpose have I been hired - to develop the design of Website. Code it and implementation in WP.</p>
                                    <br></br>
                                    <p>My responsibilities:</p>
                                    <ul>
                                        <li>Creating the template for website on Wordpress. Stack: HTML5 & CSS3 & PHP coding.</li>
                                        <li>Content writing and e-marketing promotion (SEO, SMM).</li>
                                        <li>Single work.</li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="info-bullet__button--more__container">
                                <button className="info-bullet__button--more">--- see details ---</button>
                            </div>
                        </div>                
                    </div>
                </div> 
        )
    }
}

export default Experience;
