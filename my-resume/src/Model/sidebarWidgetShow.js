const sidebarWidgetShow = (sidebar, rightColumn) => {
    if (document.readyState === "complete") {
                
        sidebar.classList.toggle('left-side__column--view');
        sidebar.classList.toggle('left-side__column--opened');
    
        setTimeout(() => {
            rightColumn.classList.toggle('right-side__column--view');
        window.scrollTo(0,0);
        }, 300);
    };
  };

export default sidebarWidgetShow;