import React from 'react'
import Experience from './expirience/Experience'
import Skills from './skills/Skills'
import Education from './education/Education'
import PersonalInfo from './info/PersonalInfo'
import AdditionalInfo from './proficiency/AdditionalInfo'
import MenuButtonOpen from '../menu-buttons/MenuButtonOpen'
import Footer from './footer/Footer'

class RightSideInfo extends React.Component {
    render(props) {
        return (
            <div className="right-side__column">
                <MenuButtonOpen state={this.props.state} updateState={this.props.updateState} />
                <Experience/>
                <Skills/>
                <PersonalInfo/>
                <Education/>
                <AdditionalInfo/>
                <Footer/>
            </div>
        )
    }
}

export default RightSideInfo;