// Ignore, demo

class ClassToggle {

    _onClick(els) {
        els = document.querySelectorAll(els);
        els.forEach((el) => {
            el.addEventListener('click', () => this._clickResult(el));
        });
    }

    _clickResult(el) {
        console.log(el.tagName);
    }
}

new ClassToggle()._onClick('body, #click-me');