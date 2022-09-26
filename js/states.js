class Template {
    constructor(dIndex) {
        this.dIndex = dIndex;
    }

    Continue(msg) {
        player.bg.SetBackground(3);

        switch (this.dIndex) {
            case 0:
                Print.AsTitle("WIP");
                break;

            case 1:
                break;

            default:
                alert("Error, dIndex out of range, " + this.dIndex);
                break;
        }
        this.dIndex++;
        return 1;
    }
}

class Intro {
    constructor(dIndex) {
        this.dIndex = dIndex;
    }

    Continue(msg) {

        if (msg === "skip") {
            this.dIndex = 23;
            player.input.PushInput("");
            player.input.PushInput("");
            return 1;
        } else {
            player.bg.SetBackground(0);
        }

        switch (this.dIndex) {
            case 0:
                Print.AsTitle("Welcome");
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
                Print.AsInfo("go forward, move forward, forward, f.");
                Print.AsInfo("go back, move back, back, b.");
                Print.AsInfo("go left, move left, left, l.");
                Print.AsInfo("go right, move right, right, r.");
                Print.AsInfo("go up, move up, up, u.");
                Print.AsInfo("go down, move down, down, d.");
                break;

            case 4:
                Print.AsParagraph("These commands can be used to move around in the game, let's try one of the commands.");
                Print.AsDialogue(" You are at a traffic light and you need to go left");
                break;

            case 5:
                if (Navigation.IsLeft(msg)) {
                    Print.AsDialogue("You go left and you arrive at your home.");
                }
                else {
                    return 0;
                }
                break;

            case 6:
                Print.AsParagraph("Good, now let's move on.");
                break;

            case 7:
                Print.AsTitle("Commands (interaction)");
                Print.AsParagraph("You can interact with your enviroment in many diffrent ways.");
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
                Print.AsDialogue("You found yourself stuck in a room with a door. You want to go outside but the door is blocked by a box.");
                break;

            case 12:
                if (Interact.Move(msg, "box")) {
                    Print.AsDialogue("You moved the box away from the door. You can now open the door");
                }
                else if (Interact.Move(msg, "door")) {
                    Print.AsDialogue("You cant move the door, its out of your reach.");
                    return 1;
                }
                else if (Interact.Break(msg, "box")) {
                    Print.AsDialogue("This will only block the door more.")
                    return 1;
                }
                else if (Interact.Break(msg, "door")) {
                    Print.AsDialogue("The door is way to strong.")
                    return 1;
                }
                else if (Interact.Open(msg, "box")) {
                    Print.AsDialogue("You open the box, there is nothing inside.");
                    return 1;
                }
                else if (Interact.Open(msg, "door")) {
                    Print.AsDialogue("There is a box in front of it.");
                    return 1;
                }
                else {
                    return 0;
                }
                break;

            case 13:

                if (Interact.Open(msg, "door")) {
                    Print.AsDialogue("You open the door and walk through seeing the daylight again.");
                }
                else if (Interact.Open(msg, "box")) {
                    Print.AsDialogue("You open the box, there is nothing inside.");
                    return 1;
                }
                else if (Interact.Break(msg, "door")) {
                    Print.AsDialogue("The door is still too strong.");
                    return 1;
                }
                else if (Interact.Break(msg, "box")) {
                    Print.AsDialogue("You break the box... good job");
                    return 1;
                }
                else if (Interact.Move(msg, "door")) {
                    Print.AsDialogue("You can't move the door. Its too heavy.");
                    return 1;
                }
                else {
                    return 0;
                }
                break;

            case 14:
                Print.AsParagraph("Perfect, you are great at this!");
                break;

            case 15:
                Print.AsTitle("Commands(Inventory)");
                Print.AsParagraph("You also have an Inventory that is useful for storing items you pick up along the way.");
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
                Print.AsDialogue("You found yourself locked inside a cage, try to find your way out through the door.");

                player.inv.AddItem(new Item("key", 1));
                break;

            case 19:
                if (msg !== "i" && msg !== "inv" && msg !== "inventory") {
                    this.dIndex++;
                    Print.AsDialogue("I should look if I have anything in my inventory that could help.");
                    return 0;
                }
                break;

            case 20:
                if (Interact.Use(msg, "key", "door") && player.inv.HasItem(new Item("key", 1))) {
                    player.inv.RemoveItem(new Item("key", 1));
                    Print.AsDialogue("You use the key on the door to unlock it.");
                }
                else if (Interact.Open(msg, "door")) {
                    Print.AsDialogue("The door seems to be locked.");
                    return 1;
                }
                else if (Interact.Break(msg, "cage")) {
                    Print.AsInfo("Try to target specific objects.");
                    return 1;
                }
                else if (Interact.Open(msg, "cage")) {
                    Print.AsInfo("Try to target specific objects.");
                    return 1;
                }
                else {
                    return 0;
                }
                break;

            case 21:
                if (Interact.Open(msg, "door")) {
                    Print.AsDialogue("You open the door and escape the cage");
                }
                else if (Interact.Use(msg, "key", "door")) {
                    Print.AsDialogue("The door is already unlocked and the key broke.");
                    return 1;
                }
                else {
                    return 0;
                }
                break;

            case 22:
                Print.AsParagraph("That was all of the tutorial, now let's begin your adventure!");
                player.input.state.SetActiveState(1, 0);
                break;

            case 23:
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

class LayDown {
    constructor(dIndex) {
        this.dIndex = dIndex;

    }

    Continue(msg) {
        player.bg.SetBackground(1);

        switch (this.dIndex) {
            case 0:
                Print.AsTitle("Where am i?");
                Print.AsDialogue("You find yourself stranded on a big mountain laying in the grass.\nYou should probably try to stand up and look around.");
                break;

            case 1:
                if (Interact.Look(msg, "around")) {
                    Print.AsDialogue("You see the blue cloudy sky tall grass around you moving in the wind.")
                    return 1;
                }
                else if (Interact.Look(msg, "up")) {
                    Print.AsDialogue("You see the gray cloudy sky");
                    return 1;
                }
                else if (Interact.Look(msg, "left") || Interact.Look(msg, "left")) {
                    Print.AsDialogue("You see the grass moving around you");
                    return 1;
                }
                else if (Interact.Look(msg, "down")) {
                    Print.AsDialogue("You see your feet with tall grass covering it");
                    return 1;
                }
                else if (Interact.Stand(msg)) {
                    Print.AsDialogue("You stand up and almost fall due to the strength of the wind.");
                    player.input.state.SetActiveState(2, 0);
                }
                else {
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

class Mountain {
    constructor(dIndex) {
        this.dIndex = dIndex;
        this.coord = new Cord2D(2, 2);
        this.doorPhase = 0;
        this.doorIsLocked = true;
        this.isOnBox = false;
        this.boxIsOpen = false;
    }

    Continue(msg) {
        player.bg.SetBackground(2);

        if (msg === "" && this.dIndex != 0) {
            return 1;
        }

        switch (this.dIndex) {
            case 0:
                Print.AsDialogue("You found yourself standing on a tall mountain, you should try to explore a bit.");
                this.dIndex++;
                break;

            case 1:
                if (Interact.Sit(msg) && (this.coord.x == 1 && this.coord.y == 1)) {
                    Print.AsDialogue("You lay back down in the grass");
                    player.input.state.SetActiveState(1, 0);
                }

                //#region set cords

                else if (Navigation.IsForward(msg)) {
                    this.doorPhase = 0;
                    this.isOnBox = false;
                    if (this.coord.y < 3) {
                        this.coord.y++;
                    }
                    else {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                else if (Navigation.IsRight(msg)) {
                    this.doorPhase = 0;
                    this.isOnBox = false;
                    if (this.coord.x < 3) {
                        this.coord.x++;
                    }
                    else {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                else if (Navigation.IsBack(msg)) {
                    this.doorPhase = 0;
                    this.isOnBox = false;
                    if (this.coord.y > 1) {
                        this.coord.y--;
                    }
                    else {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                else if (Navigation.IsLeft(msg)) {
                    this.doorPhase = 0;
                    this.isOnBox = false;
                    if (this.coord.x > 1) {
                        this.coord.x--;
                    }
                    else {
                        Print.AsDialogue("I don't want to fall off the mountain!");
                        return 1;
                    }
                }
                //#endregion

                //#region print output for cords
                if (this.coord.y == 3) {
                    switch (this.coord.x) {
                        case 1:
                            Print.AsDialogue("You find a dead tree, it looks like there are some ants walking on it.");
                            break;
                        case 2:
                            Print.AsDialogue("You stand on the edge of the cliff, thats a deep fall...");
                            break;
                        case 3:
                            Print.AsDialogue("There seems to only be some tall grass here.");
                            break;
                    }
                }
                else if (this.coord.y == 2) {
                    switch (this.coord.x) {
                        case 1:
                            switch (this.doorPhase) {
                                case 0:
                                    Print.AsParagraph("A small cabin?");
                                    Print.AsDialogue("You find a small cabin, what could be inside?");
                                    this.doorPhase++;
                                    break;

                                case 1:
                                    if (Interact.Use(msg, "key", "cabin") || Interact.Use(msg, "key", "door")) {
                                        if (player.inv.HasItem(new Item("key", 1))) {
                                            Print.AsDialogue("You unlock the cabin door");
                                            player.inv.RemoveItem(new Item("key", 1));
                                            this.doorIsLocked = false;
                                        }
                                        else {
                                            Print.AsDialogue("I need a key.");
                                        }
                                    }
                                    else if (Interact.Open(msg, "cabin") || Interact.Open(msg, "door")) {
                                        if (this.doorIsLocked) {
                                            Print.AsDialogue("The cabin door is locked");
                                        }
                                        else {
                                            Print.AsDialogue("You go through the door and enter the warm cabin.");
                                            Print.AsDialogue("The door shuts behind you and you try to open it but you can't.");
                                            player.input.state.SetActiveState(3, 0);
                                        }
                                    }
                                    else if (Interact.Break(msg, "door") || Interact.Break(msg, "cabin")) {
                                        Print.AsDialogue("You punch the door but it doesnt move, that hurt...");
                                    } else if (Interact.Move(msg, "door") || Interact.Move(msg, "cabin")) {
                                        Print.AsDialogue("You grab the door but it is shut and ummovable.");
                                    } else {
                                        return 0;
                                    }
                            }
                            break;
                        case 2:
                            Print.AsDialogue("You are back at the tall grass, your body print is still in it.");
                            break;
                        case 3:
                            Print.AsDialogue("You see a wild waterfall, cool!");
                            break;
                    }
                }
                else if (this.coord.y == 1) {
                    switch (this.coord.x) {
                        case 1:
                            Print.AsDialogue("The wind is unbearable here, I better head back quickly.");
                            break;
                        case 2:
                            Print.AsDialogue(" You spot some rocks. Small ones, big ones, in a bunch of diffrent shapes and sizes.");
                            break;
                        case 3:
                            if (Interact.Open(msg, "box")) {
                                Print.AsDialogue("There is a key and some sand in the box. I should probably pick that up.");
                                this.boxIsOpen = true;
                                return 1;
                            } else if (Interact.Pickup(msg, "key") && !player.inv.HasItem(new Item("key", 1))) {
                                if (this.boxIsOpen) {
                                    Print.AsDialogue("You pick up the key and put it in your pocket");
                                    player.inv.AddItem(new Item("key", 1));
                                }
                                else {
                                    Print.AsDialogue("The box is closed.");
                                }
                                return 1;
                            }
                            else {
                                if (this.isOnBox) {
                                    return 0;
                                }
                                else {
                                    Print.AsParagraph("A box!");
                                    Print.AsDialogue("You stumble upon some shorter grass and a small box lies in front of you.");
                                }
                                this.isOnBox = true;
                            }
                            break;
                    }
                }
                break;
            //#endregion

            default:
                alert("Error, dIndex out of range, " + this.dIndex);
                break;
        }
        return 1;
    }
}

class Cabin {
    constructor(dIndex) {
        this.dIndex = dIndex;
        this.hasSuit = false;
    }

    Continue(msg) {
        player.bg.SetBackground(3);

        switch (this.dIndex) {
            case 0:
                Print.AsTitle("A small cabin.");
                Print.AsDialogue("You look deeper in the cabin and feel the warmth from the fireplace that has fresh wood in it, strange?");
                break;

            case 1:
                if (Interact.GoTo(msg, "hatch")) {
                    Print.AsDialogue("You walk to the hatch and find that there is a handle attached to it despite it being hard to see due to the amound of dust that it is covered in.");
                    this.dIndex = 2;
                    return 1;
                } else
                if (Interact.GoTo(msg, "window")) {
                    Print.AsDialogue("You go to the window and try to open it but it is shut.");
                    return 1;
                } else
                if (Interact.GoTo(msg, "fireplace")) {
                    if(this.hasSuit) {
                        Print.AsDialogue("You approach the fire and don't feel the warmth at all.")
                        this.dIndex = 3;
                    } else{
                        Print.AsDialogue("You approach the fireplace and see something in the fire. You go back because the fire is too warm.");    
                    }
                    return 1;
                } else
                if (Interact.Look(msg, "window")) {
                    Print.AsDialogue("You look out of the window and see the mountain and the tall grass.");
                    return 1;
                } else
                    if (Interact.Look(msg, "left") || Interact.Look(msg, "right")) {
                        Print.AsDialogue("You see theh wooden walls that are rotting away.");
                        return 1;
                    } else
                        if (Interact.Look(msg, "down")) {
                            Print.AsDialogue("You see the wooden floor with stains all over it.");
                            return 1;
                        } else
                            if (Interact.Look(msg, "up")) {
                                Print.AsDialogue("You see the wooden ceiling that looks like its about to cave in.");
                                return 1;
                            } else
                                if (Interact.Look(msg, "back")) {
                                    Print.AsDialogue("You look back and see the shut door.");
                                    return 1;
                                } else
                                    if (Interact.Look(msg, "around")) {
                                        Print.AsDialogue("You look around and see a hatch, window and fireplace. Maybe I should go have a closer look.");
                                        return 1;
                                    } else
                                        if (Interact.Look(msg, "hatch")) {
                                            Print.AsDialogue("You see a dirty hatch on the floor.");
                                            return 1;
                                                    } else
                                                        if (Interact.Look(msg, "fireplace")) {
                                                            Print.AsDialogue("You look at the fireplace, it is bright and warm. Maybe I should have a closer look.");
                                                            return 1;
                                                        } else {
                                                            return 0;
                                                        }
                break;

            case 2: // Approach hatch
                if (Interact.Move(msg, "hatch")) {
                    Print.AsDialogue("The hatch is held down by hinges and not movable.");
                    return 1;
                } else
                    if (Interact.Break(msg, "hatch")) {
                        Print.AsDialogue("You punch the hatch and it shoots up a litle. Its unlocked!");
                        return 1;
                    } else
                        if (Interact.Open(msg, "hatch")) {
                            Print.AsDialogue("You open the hatch and see a ladder going down in to a cave.");
                            player.input.state.SetActiveState(4, 0);
                            player.bg.SetBackground(4);
                        } else
                            if (Interact.GoTo(msg, "back") || Navigation.IsBack(msg)) {
                                Print.AsDialogue("You go back and stand in the middle of the room again.");
                                this.dIndex = 1;
                                return 1;
                            }
                            else
                                if (Interact.GoTo(msg, "middle") || Navigation.IsBack(msg)) {
                                    Print.AsDialogue("You go back and stand in the middle of the room again.");
                                    this.dIndex = 1;
                                    return 1;
                                } else {
                                    return 0;
                            }
                break;

            case 3: // Fireplace after having suit

                break;

            case 4: // Cave return point
                this.hasSuit = true;
                this.dIndex = 1;
                player.input.PushInput("");
                return 1;
                break;

            default:
                alert("Error, dIndex out of range, " + this.dIndex);
                break;
        }
        this.dIndex++;
        return 1;
    }
}

class Cave {
    constructor(dIndex) {
        this.dIndex = dIndex;
    }

    Continue(msg) {

        switch (this.dIndex) {
            case 0:
                player.bg.SetBackground(4);
                Print.AsTitle("Cave");
                Print.AsDialogue("You go down the ladder and find yourself in a cold and old cave.");
                break;

            case 1:
                player.bg.SetBackground(5);

                if(Navigation.IsLeft(msg))
                {
                    Print.AsDialogue("You go left but you cant go further bcs it is boarded off with wood.");
                    this.dIndex = 2;
                    return 1;
                } else
                    if (Navigation.IsLeft(msg)) {
                        Print.AsDialogue("You go left but you cant go further bcs it is boarded off with wood.");
                        this.dIndex = 12;
                        return 1;
                    }

                else if (Interact.Look(msg, "window")) {
                    Print.AsDialogue("You look out of the window and see the mountain and the tall grass.");
                    return 1;
                } else
                    if (Interact.Look(msg, "left") || Interact.Look(msg, "right")) {
                        Print.AsDialogue("You see a rail goin across in a mineshaft.");
                        return 1;
                    } else
                        if (Interact.Look(msg, "down")) {
                            Print.AsDialogue("You see the rock solid floor covered in dust.");
                            return 1;
                        } else
                            if (Interact.Look(msg, "up")) {
                                Print.AsDialogue("You can see light coming from the open hatch.");
                                return 1;
                            } else
                                if (Interact.Look(msg, "back")) {
                                    Print.AsDialogue("You see the cave wall.");
                                    return 1;
                                } else
                                    if (Interact.Look(msg, "around")) {
                                        Print.AsDialogue("You look around and see a rail going across to the left and right.");
                                        return 1;
                                    } else {
                                        return 0;
                                    }
            break;

            case 2: // Going left
            if(Interact.Break(msg, "wood") || Interact.Break(mgs, "wood boards"))
            {
                Print.AsDialogue("You attempt to break the wood boards but you are not strong enough");
                return 1;
            }
                if (Navigation.IsRight(msg)) {
                    Print.AsDialogue("You go back to the ladder");
                    this.dIndex = 1;
                    return 1;
                } else
                    if (Navigation.IsLeft(msg)) {
                        Print.AsDialogue("You cant go any further bcs of the wood boards");
                        return 1;
                    } else {
                        return 0;
                    }
                break;

            case 12: // Going right
                Print.AsInfo("WIP");
                if (Navigation.IsLeft(msg)) {
                    Print.AsDialogue("You go back to the ladder");
                    this.dIndex = 1;
                    return 1;
                } else {
                    return 0;
                }
            break;

            case 99: // Return to cabin
                Print.AsDialogue("You go back up the hatch to the middle of the cabin.");
                player.input.state.SetActiveState(3, 4);
                break;

            default:
                alert("Error, dIndex out of range, " + this.dIndex);
                break;
        }
        this.dIndex++;
        return 1;
    }
}