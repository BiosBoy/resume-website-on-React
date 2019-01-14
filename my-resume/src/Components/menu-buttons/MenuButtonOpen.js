import React from 'react'
import sidebarWidgetShow from '../../Model/sidebarWidgetShow'
import iteamsHolder from '../../IteamStore/iteamsStore'
import menuOnScroll from '../../Model/menuOnScroll'
import menuOnClickOpen from '../../Model/menuOnClickOpen'

class MenuButtonOpen extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let { headers, menuButtons, menuNames, experienceblocks } = iteamsHolder().iteamsSupport;

        menuOnScroll(headers, menuButtons, menuNames, experienceblocks);
    }

    handleClick(e, d) {
        let { sidebar, rightColumn } = iteamsHolder().iteamsMain;
        let { personName, menuButtonContainer } = iteamsHolder().iteamsSupport;

        menuOnClickOpen(sidebar, rightColumn, personName, menuButtonContainer);
        sidebarWidgetShow(sidebar, rightColumn);

        this.props.updateState(
            e = true,
            d = window.pageYOffset
        );
    }

    render() {
        return ( 
            <div className="menu-button__container">
                <button onClick={this.handleClick} className="menu-button">
                    <i className="fas fa-bars fa-2x"></i>
                </button>
                <div className="personal-name">
                        <p>Sviatoslav Kuzhelev.</p> 
                        <p>Front-end JavaScript Developer</p>
                </div>
            </div> 
        ) 
    }
}

export default MenuButtonOpen;