class Navigation {
    static IsForward(msg) {
        if (msg === "f" || msg === "forward" || msg === "move forward" || msg === "go forward")
            return true;
        else
            return false;
    }

    static IsBack(msg) {
        if (msg === "b" || msg === "back" || msg === "move back" || msg === "go back")
            return true;
        else
            return false;
    }

    static IsLeft(msg) {
        if (msg === "l" || msg === "left" || msg === "move left" || msg === "go left")
            return true;
        else
            return false;
    }

    static IsRight(msg) {
        if (msg === "r" || msg === "right" || msg === "move right" || msg === "go right")
            return true;
        else
            return false;
    }


    static IsDown(msg)
    {
        if (msg === "d" || msg === "down" || msg === "move down" || msg === "go down")
        return true;
    else
        return false;
    }

    static IsUp(msg)
    {
        if (msg === "u" || msg === "up" || msg === "move up" || msg === "go up")
        return true;
    else
        return false;
    }
}

class Interact {

    static Sit(msg) {
        if (msg == "sit") {
            return true;
        }
        else if (msg == "sit down") {
            return true;
        }
        return false;
    }
    static Stand(msg) {
        if (msg == "stand") {
            return true;
        }
        else if (msg == "stand up") {
            return true;
        }
        return false;
    }

    static Pickup(msg, obj) {
        var wordArr = msg.split(" ");

        if (wordArr[0] === "take" && wordArr[1] === obj)
            return true;
        
        if (wordArr[0] === "pickup" && wordArr[1] === obj)
            return true;

        if (wordArr[0] === "pick" && wordArr[1] === "up" && wordArr[2] === obj)
            return true;

        return false;
    }

    static Look(msg, obj) {
        var wordArr = msg.split(" ");

        if (wordArr[0] === "look" && wordArr[1] === obj)
            return true;

        if (wordArr[0] === "look" && wordArr[1] === "at" && wordArr[2] === obj)
            return true;

        if (wordArr[0] === "lookat" && wordArr[1] === obj)
            return true;

        return false;
    }

    static GoTo(msg, obj) {
        var wordArr = msg.split(" ");

        if (wordArr[0] === "go" && wordArr[1] === obj)
            return true;

        if (wordArr[0] === "go" && wordArr[1] === "to" && wordArr[2] === obj)
            return true;

        if (wordArr[0] === "goto" && wordArr[1] === obj)
            return true;

        return false;
    }

    static Break(msg, obj) {
        var wordArr = msg.split(" ");

        if (wordArr[0] === "break" && wordArr[1] === obj)
            return true;

        return false;
    }

    static Open(msg, obj) {
        var wordArr = msg.split(" ");

        if (wordArr[0] === "open" && wordArr[1] === obj)
            return true;

        return false;
    }

    static Move(msg, obj) {
        var wordArr = msg.split(" ");

        if (wordArr[0] === "move" && wordArr[1] === obj)
            return true;

        return false;
    }

    static Use(msg, invObject, interactible) {
        var wordArr = msg.split(" ");

        if (wordArr[0] !== "use" || wordArr[2] !== "on")
            return false;

        if (wordArr[1] !== invObject || wordArr[3] !== interactible)
            return false;

        return true;
    }
}