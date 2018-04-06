
 const preloaderRunner = () => {
    let preloader = document.querySelector('.preloader');
    preloader.classList.add("preloader-hide");
  
    if (document.readyState === "complete") {
      setTimeout(() => {  
        document.querySelector('#root').removeChild(preloader);
      }, 1000);
    }
};

export default preloaderRunner;
