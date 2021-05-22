
// Types definition
let user : String = "Kin K";
let isTrue :boolean = true;
let thisNumber: number =  43;
let regexExpresion : RegExp = /foo/;


// arrays
const names: string[] = user.split(" ");
const myValues: Array<number> = [1,2,3];

//objects
interface Person {
    firstName : String;
    lastName : String;
}

const person :Person = {
    firstName: "Kin",
    lastName :"NG"
}

// records
const ids: Record<number, String> = {
    10: "a",
    20: "b"
}

ids[30]= "c";

// comparisons
if(ids[30] === "c"){
    
}

//loops
for(let i = 0; i < 10; i++){
    console.log(i);
}

[1,2,3].forEach((v) => console.log(v));

const output = [4,5,6].map((num) => num *10);
