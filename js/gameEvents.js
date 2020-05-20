
AFRAME.registerComponent('target-listener', {
    init: function () {
        this.el.addEventListener('mouseenter', () => {
            this.el.setAttribute('material', 'color', 'white');
        });

        this.el.addEventListener('mouseleave', () => {
            this.el.setAttribute('material', 'color', 'green');
        });

        this.el.addEventListener('click', () => {
            this.el.setAttribute('scale', '0 0 0');
        });
    }
});

AFRAME.registerComponent('boss-listener', {
    init: function () {
        this.el.addEventListener('mouseenter', () => {
            this.el.setAttribute('material', 'color', 'white');
        });

        this.el.addEventListener('mouseleave', () => {
            this.el.setAttribute('material', 'color', 'blue');
        });

        this.el.addEventListener('click', () => {
            this.el.setAttribute('scale', '0 0 0');
        });
    }
});
