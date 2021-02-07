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
            return true;
        }

        if(m[0] === "")
            return true;

        return false;
    }

    CheckForInvalidInput(msg)
    {
        var m = msg.split(" ");

        if(m[0] === "use" && m[2] === undefined)
        {
            Print.AsInfo("Usage: " + m[0] + " [inventory Item] on [object]");
            return true;
        }

        if(m[1] !== undefined)
            return false;

        if(m[0] === "move" ||
        m[0] === "open" ||
        m[0] === "break"||
        m[0] === "look"||
        m[0] === "climb"
        )
        {
            Print.AsInfo("Usage: " + m + " [object]");
            return true;
        }

        return false;
    }

    PushInput(msg)
    {
        if(this.state.states[this.state.stateIndex].Continue(msg) == 0)
        {
            if(!this.CheckForGlobalInput(msg))
            {
                if(!this.CheckForInvalidInput(msg))
                    Print.AsInfo("Try doing something else.");
            }
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