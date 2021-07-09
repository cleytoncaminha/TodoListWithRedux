class Item{
    
    static LastId = 0;

    constructor(text){
        this.id = Item.LastId++
        this.text = text;
        this.done= false
    }
}


export default Item