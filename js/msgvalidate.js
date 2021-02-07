class Navigation
{
    static IsForward(msg)
    {
        if (msg === "f" || msg === "forward" || msg === "move forward" || msg === "go forward")
            return true;
        else
            return false;
    }

    static IsBack(msg)
    {
        if (msg === "b" || msg === "back" || msg === "move back" || msg === "go back")
            return true;
        else
            return false;
    }

    static IsLeft(msg)
    {
        if (msg === "l" || msg === "left" || msg === "move left" || msg === "go left")
            return true;
        else
            return false;
    }

    static IsRight(msg)
    {
        if (msg === "r" || msg === "right" || msg === "move right" || msg === "go right")
            return true;
        else
            return false;
    }
}

class Interact
{
    static Use(msg, invObject, interactible)
    {
        var wordArr = msg.split(" ");

        if(wordArr[0] !== "use" || wordArr[2] !== "on")
            return false;

        if(wordArr[1] !== invObject || wordArr[3] !== interactible)
            return false;

        return true;
    }
}