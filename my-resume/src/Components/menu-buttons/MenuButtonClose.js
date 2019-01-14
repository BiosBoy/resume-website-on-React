import React from 'react'
import sidebarWidgetHide from '../../Model/sidebarWidgetHide'
import iteamsHolder from '../../IteamStore/iteamsStore'
import menuOnClickClose from '../../Model/menuOnClickClose'

class MenuButtonOpen extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    handleClick(e) {
        let { sidebar, rightColumn } = iteamsHolder().iteamsMain;
        let { personName, hoverNoClick } = iteamsHolder().iteamsSupport;

        menuOnClickClose(sidebar, rightColumn, personName, hoverNoClick);
        sidebarWidgetHide(sidebar, rightColumn, hoverNoClick, this.props.coordY);

        this.props.updateState(
            e = false
        );
    }

    render() {
        return ( 
            <div className="menu-button__container menu-button__container--hide">
                <button onClick={this.handleClick} className="menu-button menu-button--close">
                    <i className="fas fa-times fa-2x"></i>
                </button> 
            </div> 
        ) 
    }
}

export default MenuButtonOpen;