function RemoveFromArray(array, index)
{
    for(var i; i < array.length; i++)
    {
        if(i === index)
        {
            array.splice(i, 1); 
        }
    }
    return array;
}