const sidebarWidgetShow = (sidebar, rightColumn) => {
    if (document.readyState === "complete") {
        
        this.sidebar = sidebar;
        this.rightColumn = rightColumn;
        
        this.sidebar.classList.toggle('left-side__column--view');
        this.sidebar.classList.toggle('left-side__column--opened');
    
        setTimeout(() => {
            this.rightColumn.classList.toggle('right-side__column--view');
        window.scrollTo(0,0);
        }, 300);
    };
  };

export default sidebarWidgetShow;