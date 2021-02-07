class Intro
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
    }
    
    Continue(msg)
    {
        switch(this.dIndex)
        {
            case 0:
                player.bg.SetBackground(0);
                Print.AsTitle("Intro");
                Print.AsParagraph("Welcome to this Text-Based adventure game. (Enter to continue)");
                break;

            case 1:
                Print.AsParagraph("Before we start I want to give a quick tutorial about how to play the game.");
                break;

            case 2:
                Print.AsParagraph("To continue the game press enter, this should also be done when inputting commands in to the input bar.");
                break;

            case 3:
                Print.AsTitle("Commands (moving)");
                Print.AsParagraph("There are many commands that exist in this adventure, take for example the navigation commands as shown here");
                Print.AsInfo("move forward, forward, f.");
                Print.AsInfo("move back, back, b.");
                Print.AsInfo("move left, left, l.");
                Print.AsInfo("move right, right, r.");
                break;

            case 4:
                Print.AsParagraph("These commands can be used to move around in the game, let's try one of the commands.");
                Print.AsDialogue(" U are at a traffic light and you need to go left");
                break;

            case 5: //test1
                if(Navigation.IsLeft(msg))
                {
                    Print.AsDialogue("U go left and you arrive at your home.");
                }
                else
                {
                    Print.AsParagraph("Follow the input as specified");
                    return 0;
                }
                break;

            case 6:
                Print.AsParagraph("Good, now let's move on.");
                break;

            case 7:
                Print.AsTitle("Commands (interaction)");
                Print.AsParagraph("U can interact with your enviroment in many diffrent ways.");
                break;

            case 8:
                Print.AsParagraph("Take for example climb, play, look, etc.");
                break;

            case 9:
                Print.AsParagraph("These commands must always be followed by the object you are trying to interact with.");
                break;

            case 10:
                Print.AsParagraph("For example \"climb tree\" or \"play guitar\".");
                break;

            case 11:
                Print.AsParagraph("Here, try to find the right things to do in this situation.");
                break;

            case 12: 
                Print.AsDialogue("U found yourself stuck in a room with a door. You want to go outside but the door is blocked by a box.");
                break;

            case 13://test2
                if (Interact.Move(msg, "box"))
                {
                    Print.AsDialogue("You moved the box away from the door. U can now open the door");
                }
                else
                {
                    Print.AsParagraph("Try doing something else.");
                    return 0;
                }
                break;

            case 14://test3
                
                if(Interact.Open(msg, "door"))
                {
                    Print.AsDialogue("You open the door and walk through seeing the daylight again.");
                }
                else
                {
                    Print.AsParagraph("Try doing something else.");
                    return 0;
                }
                break;

            case 15:
                Print.AsParagraph("Perfect, you are great at this!");
                break;

            case 16:
                Print.AsTitle("Commands(Inventory)");
                Print.AsParagraph("U also have an Inventory that is useful for storing items u pick up along the way.");
                break;

            case 17:
                Print.AsParagraph("Acces your inventory through one of these commands.");
                Print.AsInfo("inventory, inv, i.");
                break;

            default:
            alert("Error, dIndex out of range, " + this.dIndex);
            break;
        }

        this.dIndex++;
    }
}


class Tutorial
{
    
}


class LayDown
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
    }
}

class Mountain
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
    }
}