class Background
{
    constructor()
    {
        this.bg = ["url(clouds.png)", "url(mountain.png)"];
    }

    SetBackground(backgroundIndex)
    {
        $('body').css('background-image', this.bg[backgroundIndex]);
    }
}
