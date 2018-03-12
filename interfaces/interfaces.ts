interface NamedPerson{
    firstName: string;
    //Optional
    age?: number;
    //Unknown Property Name, This is also optional
    [prop:string] : any // Type can be number, string or anything else.
    greet(lastName:string):void;
}

//Creating Objects from Interface
const person: NamedPerson = {
    firstName:'Gaurav',
    gadgets:['iPhone','MacBook','Hp PC','iPad'],
    greet(lastName: string){
       console.log('Hi I am  '+ this.firstName+' '+lastName);
    }
};

function changeName(person:NamedPerson){
    person.firstName ='KD';
}

//Call
changeName(person);
person.greet('Srivastava');

class Person implements NamedPerson{
    firstName: string = 'Tech';
    lastName: string = 'Geek';
    greet(lastName: string){
        console.log('Hi I am  '+ this.firstName+' '+lastName);
    };
}

const myPerson = new Person();
myPerson.firstName = 'Kds Changed';
myPerson.greet('Srivastava');


// Function Types
interface DoubleValueFunc{
    (number1:number, number2:number):number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1:number, value2:number) {
    return (value1 + value2)*2;
};

console.log(myDoubleFunction(10,20));


// Interface Inheritence
interface AgedPerson extends NamedPerson{
    age:number;
}

const oldPerson:AgedPerson = {
    age : 60,
    firstName:'Max',
        greet(lastName:string){
        console.log('Hello Oldie ' + lastName);
    }
}

oldPerson.greet('Subramanyam');