class Player
{
    constructor() 
    {
        this.input = new InputHandle();
        this.inv = new Inventory();
        this.bg = new Background();
    }

    Start()
    {
        this.input.PushInput("");
    }
}