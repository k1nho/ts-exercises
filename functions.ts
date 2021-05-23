
//syntax name(params with types): return type
function add(a: number ,b: number ): number{
    return a + b;

}

export default add;

// to default a parameter we can use var :type = default
export const strigsConcat = (str1 : String, str2: String): String =>{
   return  `${str1} ${str2}`;
}
// functions with multiple accepting types
export const format = (title: String , param: string | number): string =>{
    return `${title} ${param}`;
}

export const printFormat = (title: string, param: string | number): void =>{
    console.log(format(title, param));
}

// spread operator use
function greeting(introduction: String, ...names: string[]): string {
    return `${introduction} ${names.join(" ")}`
}

// functions that take functions as params
export function printToFile(text : string, callback : () => void): void{
    console.log(text);
    callback();
}


//To declare a function prototype
type MutationFunction = (v:number ) => number;


// function to generate another array
export function arrayMutate(numbers: number[], mutate: MutationFunction): number[]{
    return numbers.map(mutate);
}

console.log(arrayMutate([1,2,3], (v) => v*10));



