class Intro
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
    }
    
    Continue(msg)
    {
        player.bg.SetBackground(0);

        if(msg === "skip")
        {
            this.FinishState();
            player.input.PushInput("");
            return 1;
        }

        switch(this.dIndex)
        {
            case 0:
                Print.AsTitle("Intro");
                Print.AsParagraph("Welcome to this Text-Based adventure game. (Click on textbox & Click enter)");
                break;

            case 1:
                Print.AsParagraph("Before we start I want to give a quick tutorial about how to play the game. (type skip to skip tutorial)");
                break;

            case 2:
                Print.AsParagraph("To continue the game press enter, this should also be done when inputting commands in to the input bar.");
                break;

            case 3:
                Print.AsTitle("Commands (moving)");
                Print.AsParagraph("There are many commands that exist in this adventure, take for example the navigation commands as shown here.");
                Print.AsInfo("move forward, forward, f.");
                Print.AsInfo("move back, back, b.");
                Print.AsInfo("move left, left, l.");
                Print.AsInfo("move right, right, r.");
                break;

            case 4:
                Print.AsParagraph("These commands can be used to move around in the game, let's try one of the commands.");
                Print.AsDialogue(" U are at a traffic light and you need to go left");
                break;

            case 5:
                if(Navigation.IsLeft(msg))
                {
                    Print.AsDialogue("U go left and you arrive at your home.");
                }
                else
                {
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

            case 12:
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
                else if(Interact.Open(msg, "door"))
                {
                    Print.AsDialogue("There is a box in front of it.");
                    return 1;
                }
                else
                {
                    return 0;
                }
                break;

            case 13:
                
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

                player.inv.AddItem(new Item("key", 1));
                break;

            case 19:
                if(msg !== "i" && msg !== "inv" && msg !== "inventory")
                {
                    this.dIndex++;
                    Print.AsDialogue("I should look if I have anything in my inventory that could help.");
                    return 0;
                }
                break;

            case 20:
                if(Interact.Use(msg, "key", "door") && player.inv.HasItem(new Item("key", 1)))
                {
                    player.inv.RemoveItem(new Item("key", 1));
                    Print.AsDialogue("You use the key on the door to unlock it.");
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
                    return 0;
                }
                break;

            case 21:
                if(Interact.Open(msg, "door"))
                {
                    Print.AsDialogue("You open the door and escape the cage");
                }
                else if(Interact.Use(msg, "key", "door"))
                {
                    Print.AsDialogue("The door is already unlocked and the key broke.");
                    return 1;
                }
                else
                {
                    return 0;
                }
                break;

            case 22:
                Print.AsParagraph("That was all of the tutorial, now let's begin your adventure!");
                player.input.state.SetActiveState(1, 0);
                break;

            default:
            alert("Error, dIndex out of range, " + this.dIndex);
            break;
        }
        this.dIndex++;
        return 1;
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

        switch(this.dIndex)
        {
            case 0:
                Print.AsTitle("Where am i?");
                Print.AsDialogue("You find yourself stranded on a big mountain laying in the grass.\nYou should probably try to stand up and look around.");
                break;

            case 1:
                if(Interact.Look(msg, "around"))
                {
                    Print.AsDialogue("You see the blue cloudy sky tall grass around you moving in the wind.")
                    return 1;
                }
                else if(Interact.Look(msg, "up"))
                {
                    Print.AsDialogue("You see the gray cloudy sky");
                    return 1;
                }
                else if(Interact.Look(msg, "left") || Interact.Look(msg, "left"))
                {
                    Print.AsDialogue("You see the grass moving around you");
                    return 1;
                }
                else if(Interact.Look(msg, "down"))
                {
                    Print.AsDialogue("You see your feet with tall grass covering it");
                    return 1;
                }
                else if(Interact.Stand(msg))
                {
                    Print.AsDialogue("You stand up and almost fall due to the strength of the wind.");
                    player.input.state.SetActiveState(2, 0);
                }
                else
                {
                    return 0;
                }
                break;

            default:
                alert("Error, dIndex out of range, " + this.dIndex);
                break;
        }
        this.dIndex++;
        return 1;
    }
}

class Mountain
{
    constructor(dIndex)
    {
        this.dIndex = dIndex;
        this.coord = new Cord2D(2, 2);
        this.doorIsLocked = true;
    }

    Continue(msg)
    {
        player.bg.SetBackground(2);

        switch(this.dIndex)
        {
            case 0:
                Print.AsDialogue("You found yourself standing on a tall mountain, u should try to explore a bit.");
                this.dIndex++;
                break;

            case 1:
                if(Interact.Sit(msg) && (this.coord.x == 1 && this.coord.y == 1))
                {
                    Print.AsDialogue("You lay back down in the grass");
                    player.input.state.SetActiveState(1, 0);
                }

                //#region set cords
                else if(Navigation.IsForward(msg)) {
                    if(this.coord.y < 3)
                    {
                        this.coord.y++;
                    }
                    else
                    {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                else if (Navigation.IsRight(msg)) {
                    if(this.coord.x < 3)
                    {
                        this.coord.x++;
                    }
                    else
                    {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                else if (Navigation.IsBack(msg)) {
                    if(this.coord.y > 0)
                    {
                        this.coord.y--;
                    }
                    else
                    {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                else if (Navigation.IsLeft(msg)) {
                    if(this.coord.x > 0)
                    {
                        this.coord.x--;  
                    }
                    else
                    {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                //#endregion

                //#region print output for cords
                if(this.coord.y == 3)
                {
                    switch(this.coord.x)
                    {
                        case 1:
                            Print.AsDialogue("U find a dead tree, it looks like there are some ants walking on it.");
                            break;
                        case 2:
                            Print.AsDialogue("U stand on the edge of the cliff, thats a deep fall...");
                            break;
                        case 3:
                            Print.AsDialogue("There seems to only be some tall grass here.");
                            break;
                    }
                }
                else if(this.coord.y == 2)
                {
                    switch(this.coord.x)
                    {
                        case 1:

                            Print.AsDialogue("U find a small cabin, what could be inside?");

                            if(Interact.Use(msg, "key", "cabin") || Interact.Use(msg, "key", "door"))
                            {
                                alert("hi");
                                if(player.inv.HasItem(new Item("key", 1)))
                                {
                                    Print.AsDialogue("You unlock the cabin door");
                                    this.doorIsLocked = false;
                                }
                                return 1;
                            }
                            else if(Interact.Open(msg, "cabin") || Interact.Open(msg, "door"))
                            {
                                if(this.doorIsLocked)
                                {
                                    Print.AsDialogue("The cabin door is locked");
                                    return 1;
                                }
                                else
                                {
                                    Print.AsDialogue("You go through the door and enter the warm cabin.");
                                    player.input.state.SetActiveState(3, 0);
                                    return 1;
                                }
                            }
                            else 
                            {
                                return 0;
                            }

                        case 2:
                            Print.AsDialogue("U are back at the tall grass, your body print is still in it.");
                            break;
                        case 3:
                            Print.AsDialogue("U see a wild waterfall, cool!");
                            break;
                    }
                }
                else if(this.coord.y == 1)
                {
                    switch(this.coord.x)
                    {
                        case 1:
                            Print.AsDialogue(" The wind is unbearable here, I better head back quickly.");
                            break;
                        case 2:
                            Print.AsDialogue(" U spot some rocks. Small ones, big ones, in a bunch of diffrent shapes and sizes.");
                            break;
                        case 3:
                            Print.AsDialogue("U stumble upon some shorter grass and a small box lies in front of you.");
                            break;
                    }
                }
                //#endregion

                Print.AsInfo(this.coord.x + " " + this.coord.y);
                break;

            case 2:
                break;

            default:
                alert("Error, dIndex out of range, " + this.dIndex);
                break;
        }
        return 1;
    }
}