class InputHandle
{
    PushInput(msg)
    {
        //do something
    }
}

function GetInput()
{
    player.input.PushInput($('input').val());
    $('input').val('');
}

$(function ($)
{
    $('input').on('keyup', function ()
    {
        if (event.keyCode == 13) {
            GetInput();
        }
    });
});