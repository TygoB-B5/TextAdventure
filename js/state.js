function CreateStatesArray()
{
    return [new Intro(17), new LayDown(0), new Mountain(0)];
}

class State
{
    constructor()
    {
    this.stateIndex = 0;
    this.states = CreateStatesArray();
    this.currentState = this.states[this.stateIndex];
    }

    SetActiveState(index)
    {
        this.stateIndex = index;
    }
}
