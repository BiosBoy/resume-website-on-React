const menuOnClickOpen = (sidebar, rightColumn, personName, menuButtonContainer) => {
    const parentNode = personName.parentNode;
    const menuParentNode = menuButtonContainer[1].parentNode;
    const div = document.createElement('div');
    const hover = document.createElement('div');
    hover.className = 'hover-no-click';
    div.className = 'little-circle--grey';

    hover.style.cssText = "width: 100%; height: 100%; position: fixed; display: block;";

    if ((window.innerWidth < 1000) && (window.pageYOffset > 30)) {
        div.style.cssText = "top: 27px; left: 12px;";
    } else {
        div.style.cssText = "top: 27px; left: 12px;";
    }

    menuParentNode.insertBefore(hover, menuButtonContainer[1]);
    parentNode.insertBefore(div, personName);

    if (rightColumn.getBoundingClientRect().top < 0) {
        rightColumn.style.top = '-' + window.pageYOffset + 'px';
    }

    setTimeout(() => 
        parentNode.removeChild(document.querySelector('.little-circle--grey'))
    , 1200);
}

export default menuOnClickOpen;