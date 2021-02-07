function CreateStatesArray()
{
    return [new Intro(0), new Tutorial(0), new LayDown(0), new Mountain(0)];
}

class State
{
    constructor()
    {
    this.stateIndex = 0;
    this.states = CreateStatesArray();
    this.currentState = this.states[this.stateIndex];
    }
}
