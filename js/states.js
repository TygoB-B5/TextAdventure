class Intro
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
    }
    
    Continue(msg)
    {
        if(msg === "skip")
        {
            this.FinishState();
            player.input.PushInput("");
            return 1;
        }

        switch(this.dIndex)
        {
            case 0:
                player.bg.SetBackground(0);
                Print.AsTitle("Intro");
                Print.AsParagraph("Welcome to this Text-Based adventure game. (Enter to continue)");
                break;

            case 1:
                Print.AsParagraph("Before we start I want to give a quick tutorial about how to play the game. (type skip to skip tutorial)");
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
                    Print.AsInfo("Follow the input as specified");
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
                Print.AsDialogue("U found yourself stuck in a room with a door. You want to go outside but the door is blocked by a box.");
                break;

            case 12://test2
                if (Interact.Move(msg, "box"))
                {
                    Print.AsDialogue("You moved the box away from the door. U can now open the door");
                }
                else if (Interact.Move(msg, "door"))
                {
                    Print.AsDialogue("U cant move the door, its out of your reach.");
                    return 1;
                }
                else if(Interact.Break(msg, "box"))
                {
                    Print.AsDialogue("This will only block the door more.")
                    return 1;
                }
                else if(Interact.Break(msg, "door"))
                {
                    Print.AsDialogue("The door is way to strong.")
                    return 1;
                }
                else if(Interact.Open(msg, "box"))
                {
                    Print.AsDialogue("You open the box, there is nothing inside.");
                    return 1;
                }
                else
                {
                    Print.AsInfo("Try doing something else.");
                    return 0;
                }
                break;

            case 13://test3
                
                if(Interact.Open(msg, "door"))
                {
                    Print.AsDialogue("You open the door and walk through seeing the daylight again.");
                }
                else if(Interact.Open(msg, "box"))
                {
                    Print.AsDialogue("You open the box, there is nothing inside.");
                    return 1;
                }
                else if(Interact.Break(msg, "door"))
                {
                    Print.AsDialogue("The door is still too strong.");
                    return 1;
                }
                else if(Interact.Break(msg, "box"))
                {
                    Print.AsDialogue("You break the box... good job");
                    return 1;
                }
                else if(Interact.Move(msg, "door"))
                {
                    Print.AsDialogue("You can't move the door. Its too heavy.");
                    return 1;
                }
                else
                {
                    Print.AsInfo("Try doing something else.");
                    return 0;
                }
                break;

            case 14:
                Print.AsParagraph("Perfect, you are great at this!");
                break;

            case 15:
                Print.AsTitle("Commands(Inventory)");
                Print.AsParagraph("U also have an Inventory that is useful for storing items u pick up along the way.");
                break;

            case 16:
                Print.AsParagraph("Acces your inventory through one of these commands.");
                Print.AsInfo("inventory, inv, i.");
                break;

            case 17:
                Print.AsParagraph("To use inventory items use the keywords.");
                Print.AsInfo("use \"item\" on \"object\"");
                break;

            case 18:
                Print.AsParagraph("Let's practice these commands, try to open the door (use one of the inventory commands to open inventory)");
                Print.AsDialogue("U found yourself locked inside a cage, try to find your way out through the door.");
                break;

            case 19:
                if(msg === "i" || msg === "inv" || msg === "inventory")
                {
                    player.inv.AddItem(new Item("key", 1));
                }
                else
                {
                    Print.AsDialogue("I should look if I have anything in my inventory that could help.");
                    return 0;
                }
                break;

            case 20:
                if(Interact.Use(msg, "key", "door"))
                {
                    Print.AsDialogue("You use the key on the door to unlock it.");
                    player.inv.RemoveItem(new Item("Key", 1));
                }
                else if(Interact.Open(msg, "door"))
                {
                    Print.AsDialogue("The door seems to be locked.");
                    return 1;
                }
                else if(Interact.Break(msg, "cage"))
                {
                    Print.AsInfo("Try to target specific objects.");
                    return 1;
                }
                else if(Interact.Open(msg, "cage"))
                {
                    Print.AsInfo("Try to target specific objects.");
                    return 1;
                }
                else
                {
                    Print.AsInfo("Try doing something else.");
                    return 0;
                }
                break;

            case 21:
                if(Interact.Open(msg, "door"))
                {
                    Print.AsDialogue("You open the door and escape the cage");
                }
                else
                {
                    Print.AsInfo("Try doing something else.");
                    return 0;
                }
                break;

            case 22:
                Print.AsParagraph("That was all of the tutorial, now let's begin your adventure!");
                this.FinishState();
                break;

            default:
            alert("Error, dIndex out of range, " + this.dIndex);
            break;
        }
        this.dIndex++;
        return 1;
    }

    FinishState()
    {
        Print.Space();
        player.input.state.SetActiveState(1);
    }
}

class LayDown
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
    }

    Continue(msg)
    {
        player.bg.SetBackground(1);
        Print.AsTitle("Work in progress");
    }
}

class Mountain
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
    }

    Continue(msg)
    {
        player.bg.SetBackground(2);
        Print.AsTitle("Work in progress");
    }
}