class Background {
    constructor() {
        this.bg = ["whitebackground.png", "layingingrass.png", "mountain.png", "cabin.png", "cave.png"];
        this.isGoingUp = false;
        this.timer;
        this.i = 0;
        this.backgroundIndex = -2;
    }

    SetBackground(bgi) {

        this.isGoingUp = false;

        if (bgi != this.backgroundIndex) {
            this.backgroundIndex = bgi;
            this.timer = setInterval(this.ChangeOpacity.bind(this), 30);
        }
    }

    ChangeOpacity() {
        if (!this.isGoingUp) {
            this.i -= 0.05;

        } else if (this.i < 1) {
            this.i += 0.05;
        } else {
            clearInterval(this.timer);
        }
        $('body').css('opacity', this.i);

        if (this.i <= 0) {
            this.isGoingUp = true;
            $('body').css('background-image', 'url(img/' + this.bg[this.backgroundIndex] + ')');
        }
    }
}
