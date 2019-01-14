const sidebarWidgetHide = (sidebar, rightColumn, hoverNoClick, coordY) => {
    rightColumn.style.top = 0 + 'px';
    sidebar.style.top = coordY - window.pageYOffset + 'px';

    setTimeout(() => {  
        sidebar.style.top = 0 + 'px';
    }, 500);

    sidebar.classList.remove("left-side__column--view");
    hoverNoClick.remove();
    sidebar.classList.toggle('left-side__column--opened');
    rightColumn.classList.toggle('right-side__column--view');

    window.scrollTo(coordY, coordY);
 }

 export default sidebarWidgetHide;