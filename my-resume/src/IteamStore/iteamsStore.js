const iteamsHolder = () => {
        let iteamsMain = {
            sidebar: document.querySelector('.left-side__column'),
            rightColumn: document.querySelector('.right-side__column')
        };

        let iteamsSupport = {
            headers: document.querySelectorAll('.menu-button__container'),
            menuButtons: document.querySelectorAll('.menu-button'),
            menuNames: document.querySelector('.personal-name'),
            experienceblocks: document.querySelector('.block-headline.block-headline__experience'),
            personName: document.querySelector('.personal-name'),
            menuButtonContainer: document.querySelectorAll('.menu-button__container'),
            hoverNoClick: document.querySelector('.hover-no-click'),
            textContainer: document.querySelectorAll('.info-bullet__text.block-headline__text-grey'),
            textButton: document.querySelectorAll('.info-bullet__button--more')
        }; 

        return { iteamsMain, iteamsSupport };
};

export default iteamsHolder;