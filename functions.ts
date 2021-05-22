
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

// function to return promise
export const fetchData = (url: string): Promise<string> =>{

    Promise.resolve(`Data from ${url}`)
}

// spread operator use
function greeting(introduction: String, ...names: string[]): string {
    return `${introduction} ${names.join(" ")}`
}

