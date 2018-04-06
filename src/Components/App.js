import React, { Fragment } from 'react'
import LeftSideInfo from './left-side/'
import RightSideInfo from './right-side/'
import Preloader from './preloader/Preloader'
import preloaderRunner from '../Model/preloaderRunner'
import iteamsHolder from '../IteamStore/iteamsStore'
import sidebarWidgetHide from '../Model/sidebarWidgetHide'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      coordY: 0
    };

    this.handleKeyCode = this.handleKeyCode.bind(this);
    this.handleClick = this.handleClick.bind(this);
 }

  componentDidMount() {
    window.addEventListener('load', preloaderRunner);
    window.addEventListener('keydown', this.handleKeyCode);
    window.addEventListener('click', this.handleClick);
  }

  updateState = (e, d) => {
    this.setState({
      toggle: e,
      coordY: d,
    })
  }

  handleKeyCode(e) {
    if (this.state.toggle === true && e.keyCode === 27 ) {
      sidebarWidgetHide(
        iteamsHolder().iteamsMain.sidebar, 
        iteamsHolder().iteamsMain.rightColumn, 
        iteamsHolder().iteamsSupport.hoverNoClick,
        this.state.coordY
      );

      this.setState({
        toggle: false
      });
    }
  }

  handleClick(e) {
    let event = e.target;
    let targ = event.closest('.right-side__column');

    if(!targ || event.closest('.menu-button__container') 
      || event.closest('.menu-button')) {
      return;
    }

    if (targ && this.state.toggle === true) {
      sidebarWidgetHide(
        iteamsHolder().iteamsMain.sidebar, 
        iteamsHolder().iteamsMain.rightColumn, 
        iteamsHolder().iteamsSupport.hoverNoClick,
        this.state.coordY
      );

      this.setState({
        toggle: false
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Preloader/>
        <LeftSideInfo state={this.state.toggle} updateState={this.updateState} coordY={this.state.coordY}/>
        <RightSideInfo state={this.state.toggle} updateState={this.updateState} />
      </Fragment>
    )
  }
}

export default App;