class InputHandle
{
    constructor()
    {
        this.state = new State();
    }

    PushInput(msg)
    {
        this.state.states[this.state.stateIndex].Continue(msg);
    }
}

$(function ($)
{
    $('input').on('keyup', function ()
    {
        if (event.keyCode == 13) {
            player.input.PushInput($('input').val());
            $('input').val('');

            //scrolls down when input
            $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
        }
    });
});