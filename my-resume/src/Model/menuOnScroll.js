const menuOnScroll = (headers, menuButtons, menuNames, experienceblocks, menuButtonSticky) => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if ((window.innerWidth < 1000) && (scrolled > headers[1].offsetHeight) && 
        !document.querySelector('.left-side__column.left-side__column--view.left-side__column--opened')) {
        headers[1].classList.add('menu-button__container--sticky');
        menuButtons[1].classList.add('menu-button--sticky');
        menuNames.classList.add('personal-name--sticky');
        experienceblocks.style.paddingTop = '145px';
    } else {
        headers[1].classList.remove('menu-button__container--sticky');
        menuButtons[1].classList.remove('menu-button--sticky');
        menuNames.classList.remove('personal-name--sticky');
        experienceblocks.style.paddingTop = '60px';
    }
}

export default menuOnScroll;
