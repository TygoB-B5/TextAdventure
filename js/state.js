function GetState(stateIndex, loadPointIndex)
{
    var states = [new Intro(loadPointIndex), 
        new LayDown(loadPointIndex), 
        new Mountain(loadPointIndex),
        new Cabin(loadPointIndex)];
    return states[stateIndex];
}

class State
{
    constructor()
    {
    this.currentState = GetState(2, 0);
    }

    SetActiveState(index, loadindex)
    {
        this.currentState = GetState(index, loadindex);
    }
}
