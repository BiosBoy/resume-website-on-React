import React, { Component } from 'react'

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <p>Want to download PDF version of this CV?</p>
                <a href="/Kuzhelev_CV.pdf">
                    <i className="far fa-file-pdf fa-2x" style={{ transform: 'rotate(0deg)' }}></i>
                    <span>Get it now!</span>
                </a>
            </div>
        )
    }
}

export default Resume
