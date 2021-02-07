class InputHandle
{
    constructor()
    {
        this.state = new State();
    }

    CheckForGlobalInput(msg)
    {
        var m = msg.split(" ");
        if(m[1] !== undefined)
        return;

        if(m[0] === "i" || m[0] === "inv" || m[0] === "inventory")
        {
            player.inv.PrintInv();
        }
    }

    CheckForInvalidInput(msg)
    {
        var m = msg.split(" ");

        if(m[0] === "use" && m[2] === undefined)
        {
            Print.AsInfo("Usage: " + m[0] + " [inventory Item] on [object]");
            return;
        }

        if(m[1] !== undefined)
            return;

        if(m[0] === "move" ||
        m[0] === "open" ||
        m[0] === "break"||
        m[0] === "look"||
        m[0] === "climb"
        )
        {
            Print.AsInfo("Usage: " + m + " [object]");
            return;
        }
    }

    PushInput(msg)
    {
        if(this.state.states[this.state.stateIndex].Continue(msg) != 0)
        {
            this.CheckForGlobalInput(msg);
            this.CheckForInvalidInput(msg);
        }
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