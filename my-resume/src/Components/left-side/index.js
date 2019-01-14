import React from 'react'
import MainPhoto from './main-photo/MainPhoto'
import ProfileInfo from './profile-info/ProfileInfo'
import Contacts from './contacts/Contacts'
import Skills from './skills/Skills'
import Links from './links/Links'
import Resume from './resume/Resume'
import Footer from './footer/Footer'
import MenuButtonClose from '../menu-buttons/MenuButtonClose'

class LeftSideInfo extends React.Component {
    render(props) {
      return (
      <div className="left-side__column">
        <MenuButtonClose  state={this.props.state} updateState={this.props.updateState} coordY={this.props.coordY} />
        <MainPhoto/>
        <ProfileInfo/>
        <Contacts/>
        <Skills/>
        <Links/>
        <Resume />
        <Footer/>
      </div>
      )
    }
}

export default LeftSideInfo;