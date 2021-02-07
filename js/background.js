class Background
{
    constructor()
    {
        this.bg = ["clouds.png", "mountain.png"];
    }

    SetBackground(backgroundIndex)
    {
        $('body').css('background-image', 'url(img/' + this.bg[backgroundIndex] + ')');
    }
}
