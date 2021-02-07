function CreateStatesArray()
{
    return [new LayDown(0), new Mountain(0)];
}

class Player
{
    constructor() 
    {
        this.input = new InputHandle();
        this.inv = new Inventory();
        this.bg = new Background();

        this.states = CreateStatesArray();
        this.currentState = this.states[0];
    }
}