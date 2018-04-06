const sidebarWidgetHide = (sidebar, rightColumn, hoverNoClick, coordY) => {
    
    this.sidebar = sidebar;
    this.rightColumn = rightColumn;
    this.hoverNoClick = hoverNoClick;
    this.coordY = coordY;

    this.rightColumn.style.top = 0 + 'px';
    this.sidebar.style.top = this.coordY - window.pageYOffset + 'px';

    setTimeout(() => {  
        this.sidebar.style.top = 0 + 'px';
    }, 500);

    this.sidebar.classList.remove("left-side__column--view");
    this.hoverNoClick.remove();
    this.sidebar.classList.toggle('left-side__column--opened');
    this.rightColumn.classList.toggle('right-side__column--view');

    window.scrollTo(this.coordY, this.coordY);
 }

 export default sidebarWidgetHide;