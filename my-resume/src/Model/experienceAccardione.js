const experienceAccardione = (e, textContainer, textButton) => {

    (function() {
        if (!Element.prototype.matches) {

            Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;

        }
    })();

    (function() {
        if (!Element.prototype.closest) {

            Element.prototype.closest = function(css) {
                var node = this;

                while (node) {
                    if (node.matches(css)) return node;
                    else node = node.parentElement;
                }
                return null;
            };
        }
    })();

    (function(){
          if (!Element.prototype.remove) {
            Element.prototype.remove = function remove() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
            };
        }
    })();

    let target = e.target;
    let closest = target.closest('.info-bullet__button--more');
    if (!closest) {
        return
    }

    for (var index = 0; index < textButton.length; index++) {
        if (textButton[index] === closest) {
            textButton[index].parentNode.parentNode.children[1].style.height = 'auto';
            textButton[index].parentNode.parentNode.children[1].style.maxHeight = 800 +'px';
            textButton[index].parentNode.style.top = 0 + 'px';
            textButton[index].parentNode.style.height = 0 + 'px';
            textButton[index].remove();
        }
    };
}

export default experienceAccardione;