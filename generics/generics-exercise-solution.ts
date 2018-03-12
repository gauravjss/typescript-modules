/*
Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair

getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs

The map should be usable like shown below

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();*/


//Solution

class MyMap<T extends number|string>{

    private map:{[key:string]:T} = {};

    setItem(key:string,item:T){
        this.map[key] = item;
    }
    getItem(key:string){
        return this.map[key];
    }
    clear(){
        this.map = {};
    }
    printMap(){
        for(let key in this.map){
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Kd");
stringMap.setItem('age', "33");
stringMap.printMap();