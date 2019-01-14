import React, { Fragment } from 'react'

class MainPhoto extends React.Component {

    render() {
      return (
      <Fragment>
        <div className="mainPhoto-container">
            <div className="mainPhoto-container__photo"> 
                <img src="https://sviatkuzh.top/images/my_photo.jpg" alt="Sviatoslav Kuzhelev"/>
            </div>
            <div className="mainPhoto-container__title">
                <h1>Sviatoslav Kuzhelev</h1>
                <h2>Front-end Developer</h2>
                <div className="mainPhoto-container__sitate">
                    <p>"Self-development, like survival, is voluntary", -</p>
                    <p>author undefined.</p>
                </div>
            </div> 
        </div>
      </Fragment>
      )
    }
}

export default MainPhoto;