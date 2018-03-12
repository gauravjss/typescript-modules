//Simple generic
function echo(data:any){
    return data;
}

// Generics
function betterEcho<T>(data:T){
    return data;
}
console.log(betterEcho('Max').length);
console.log(betterEcho(25));
//Alternative Way
console.log(betterEcho<number>(25));
console.log(betterEcho({name:'KD',age:33}));

// Built-in Generics
const testResults: Array<number> = [1.94,2.33];
testResults.push(-2.99);
// Does not allow String
//testResults.push('Test');
console.log(testResults);

//Arrays
function printAll<T>(args: T[]){
    args.forEach((element)=>console.log(element));
}
printAll<string>(['Apple','Bananas']);

//Generic Types
//echo2 is of type "<T>(data:T) => T"
const echo2: <T>(data:T) => T = echo;
console.log(echo2<string>('something'));

//Generic Class
class SimpleMath<T extends number>{
    baseValue : T;
    multiplyValue : T;
    calculate(): number{
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;

//simpleMath.multiplyValue = 'Testing String';
console.log(simpleMath.calculate());

//Multi Generic Class
class ComplexMath<T extends number , U extends number | string>{
    baseValue : T;
    multiplyValue : U;
    calculate(): number{
        return this.baseValue * +this.multiplyValue;
    }
}

const complexMath = new ComplexMath();
complexMath.baseValue = 10;
complexMath.multiplyValue = '20';

console.log(complexMath.calculate());