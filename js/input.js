class InputHandle {
    constructor() {
        this.state = new State();
        this.primeQuitMsg = false;
    }

    CheckForGlobalInput(msg) {
        //if inv keyword
        var m = msg.split(" ");
        if (m[0] === "i" || m[0] === "inv" || m[0] === "inventory") {
            player.inv.PrintInv();
            return true;
        }

        if (this.primeQuitMsg && m[0] === "yes") {
            window.location.href = "https://tygoboons.nl";
            return true;
        } else if(this.primeQuitMsg){
            this.primeQuitMsg = false;
            return true;
        }

        if (m[0] === "die" || m[0] === "quit" || m[0] === "stop" || m[0] === "kill") {
            this.primeQuitMsg = true;
            Print.AsInfo("Are you sure you want to quit?");
            return true;
        }
        return false;
    }

    CheckForInvalidInput(msg) {
        var m = msg.split(" ");

        //multiple words
        if (m[0] === "use" && m[2] === undefined) {
            Print.AsInfo("Usage: " + m[0] + " [inventory Item] on [object]");
            return true;
        }

        if (m[0] === "go" && m[1] === "to" && m[2] === undefined) {
            Print.AsInfo("Usage: go to [object]");
            return true;
        }

        if (m[0] === "look" && m[1] === "at" && m[2] === undefined) {
            Print.AsInfo("Usage: look at [object]");
            return true;
        }

        if (m[0] === "pick" && m[1] === "up" && m[2] === undefined) {
            Print.AsInfo("Usage: pick up [object]");
            return true;
        }

        if (Interact.Sit(msg)) {
            Print.AsInfo("Unable to sit right now");
            return true;
        }

        if (Interact.Stand(msg)) {
            Print.AsInfo("Unable to stand right now");
            return true;
        }

        /*SINGLE WORD*/
        if (m[1] !== undefined)
            return false;

        //use misc
        if (m[0] === "move" ||
            m[0] === "open" ||
            m[0] === "break" ||
            m[0] === "look" ||
            m[0] === "climb" ||
            m[0] === "goto" ||
            m[0] === "pickup") {
            Print.AsInfo("Usage: " + m + " [object]");
            return true;
        }

        //empty
        if (m[0] === "")
            return true;

        return false;
    }

    PushInput(msg) {
        if (this.CheckForGlobalInput(msg))
            return;

        if (this.state.currentState.Continue(msg) == 0) {
            if (!this.CheckForInvalidInput(msg))
                Print.AsInfo("Try doing something else.");
        }
    }
}

$(function ($) {
    $('input').on('keyup', function () {
        if (event.keyCode == 13) {
            player.input.PushInput($('input').val());
            $('input').val('');

            //scrolls down when input
            $('html,body').animate({ scrollTop: document.body.scrollHeight }, "fast");
        }
    });
});