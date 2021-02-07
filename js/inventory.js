class Item
    {
        constructor(name, amount)
        {
            this.name = name;
            this.amount = amount;

            if(this.amount == undefined)
            {
                this.amount = 1;
            }
        }
    }

class Inventory
{
    constructor()
    {
        this.items = [];
    }

    PrintInv()
    {
        Print.AsInfo("Inventory:");
        for(var i = 0; i < this.items.length; i++)
        {
            var msg = "[" + this.items[i].name + "] x" + this.items[i].amount;
            Print.AsInfo(msg);
        }
     }

    AddItem(item)
    {
        for(var i = 0; i < this.items.length; i++)
        {
            if(this.items[i].name === item.name)
            {
                this.items[i].amount += item.amount;
                return;
                }
            }
            this.items.push(item);
        }

    RemoveItem(item)
    {
        for(var i = 0; i < this.items.length; i++)
        {
            if(this.items[i].name === item.name)
            {
                this.items[i].amount -= item.amount;

                if(this.items[i].amount <= 0)
                {
                    this.items.splice(i, 1);
                }
                return;
            }
        }
    }

    HasItem(item)
    {
        for(var i = 0; i < this.items.length; i++)
        {
            if(this.items[i].name === item.name)
            {

                if(this.items[i].amount >= item.amount)
                {
                    return true;
                }
            }
        }
        return false;
    }
}
