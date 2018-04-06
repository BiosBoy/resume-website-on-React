const menuOnClickClose = (sidebar, rightColumn, personName, hoverNoClick) => {
    let parentNode = personName.parentNode;
    let div = document.createElement('div');
    div.className = 'little-circle--white';

    parentNode.insertBefore(div, personName);
    console.log(hoverNoClick);
    hoverNoClick.remove();

    setTimeout(() => {
        if (parentNode.contains(document.querySelector('.little-circle--white'))) {
            parentNode.removeChild(document.querySelector('.little-circle--white'))
        }
    }, 2000);
}

export default menuOnClickClose;