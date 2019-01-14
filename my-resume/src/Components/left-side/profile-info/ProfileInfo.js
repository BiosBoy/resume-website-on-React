import React from 'react'

class ProfileInfo extends React.Component {
    render() {
      return (
        <div className="profile-info-container"> 
            <div className="block-headline block-headline__profile">
                <div className="block-headline__icon block-headline__icon--profile">
                    <i className="block-headline__icon-first fas fa-file-alt fa-lg"></i>
                </div>
                <div className="block-headline__text block-headline__text--profile"><span>PROFILE INFO</span></div> 
            </div>
            <div className="profile-info__text">
                <p><strong>I'm a front-end software engineer</strong> who is highly driven and well-versed in technology stack: HTML5, CSS3, JS, React, Redux and NodeJS. I have a huge experience in building a high-performance Websites, Landing Pages and E-mail letters. For now, I'm inspired by creating SPA's on React and NodeJS. </p>
            </div>
        </div>
      )
    }
}

export default ProfileInfo;