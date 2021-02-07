class Background
{
    constructor()
    {
        this.bg = ["whitebackground.png", "layingingrass.png", "mountain.png"];
    }

    SetBackground(backgroundIndex)
    {
        $('body').css('background-image', 'url(img/' + this.bg[backgroundIndex] + ')');
    }
}
