import React from 'react'
import socialSharing from '../../../Model/socialSharing'

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e) {
        socialSharing(e);
    }

    render() {
        return (
            <div classname="social__container">
                <div className="social__container--text">
                    <span>Like this resume? Share it with your colleagues or friends! ;)</span>
                </div>
                <div onClick={this.handlerClick} className="social__container--buttons">
                    <button className="social__twitter-share social__container--button" data-js="twitter-share">
                        <i className="fab fa-facebook-f social__icon"></i>
                        Twitter
                    </button>
                    <button className="social__facebook-share social__container--button" data-js="facebook-share">
                        <i className="fab fa-twitter social__icon"></i>
                        Facebook
                    </button>
                    <button className="social__linkedin-share social__container--button" data-js="linkedin-share">
                        <i className="fab fa-linkedin-in social__icon"></i>
                        LinkedIn
                    </button>
                </div>
            </div>
        )
    }
}

export default Footer;
