
const socialSharing = (e) => {

    let twitterShare = document.querySelector('.social__twitter-share');
    let facebookShare = document.querySelector('.social__facebook-share');
    let linkedinShare = document.querySelector('.social__linkedin-share');

    console.log(e.target, e.target.className, twitterShare);


    if (e.target.className === twitterShare.className) {

        let twitterWindow = window.open(
        'https://twitter.com/share?url=' + document.URL, 
        'twitter-popup', 
        'height=350,width=600'
        );

        if (twitterWindow.focus) { 
            twitterWindow.focus(); 
        }

        console.log(e.target);

        return false;
    } else if (e.target.className === facebookShare.className) {

        let facebookWindow = window.open(
            'https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 
            'facebook-popup', 
            'height=350,width=600');

        if (facebookWindow.focus) { 
            facebookWindow.focus(); 
        }
        return false;
    } else if (e.target.className === linkedinShare.className) {
        e.preventDefault();

        let linkedinWindow = window.open(
            'http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(document.URL), 
            '', 
            'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

        if (linkedinWindow.focus) { 
            linkedinWindow.focus(); 
        }
        return false;
    } else {
        return
    }
}

export default socialSharing;