import React, { Component } from 'react'

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <p>Want to download PDF version of this CV?</p>
                <p>
                    <i className="far fa-file-pdf fa-2x" style={{ transform: 'rotate(0deg)' }}></i>
                    <a href="/Kuzhelev_Front-end.pdf">Get it now!</a>
                </p>
            </div>
        )
    }
}

export default Resume
