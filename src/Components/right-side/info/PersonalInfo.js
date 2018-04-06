import React from 'react'

class PersonalInfo extends React.Component {
    render() {
        return (
            <div className="personal-container">
                <div className="block-headline block-headline__skills">
                    <div className="block-headline__icon info-bullet__icon-grey info-bullet__icon-grey">
                        <i className="info-bullet__icon-first fas fa-user fa-lg"></i>
                    </div>
                    <div className="block-headline__text block-headline__text-personal block-headline__text-grey"><span name="personal">MY PERSONAL INFO</span></div>
                </div>
                <div className="personal__text">
                    <p>I'm not a regular programmer, I've also got communication skills ;). On a socionic psychotype I
                        belong to the fourth quadra. I believe that the division of people into teams according to the
                        psychotype is the key to the successful work. I very much look forward to finding a team, close in
                        spirit, with which we will work on the one wave and together producing the maximum result.
                    </p>
                    <br></br>
                    <p>I work on the principle of "doing" not equal to "done." There is a high understanding of the value of
                        the task, the responsibility and the importance of bringing it to completion. I like working on
                        deadlines, it increases personal productivity. I cannot live without Agile.
                    </p>
                </div>
           </div>
        )
    }
}

export default PersonalInfo;
