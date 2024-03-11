/*
tipos primitivos
number => numeros inteiros, numeros decimais"
string => textos ,caracters
boleanos => true , false
*/ 

// tipagem staticta
let age: number = 22;
let fullName: string = "danilo ";
let isAlive:boolean = false;

// inferencia de tipos
let Animal = 'cat'
let quantidade = 31

// parametros retornos e funcioes
function som(a:number ,b:number): number {
   const result = a + b;
   return result
}

console.log(som(1,2))

// funcção com retorno opcional
function greeting(FullName : string) : string | void{

    if (FullName) {
        return `hellow ${FullName}!`
    }
    
}

    
// função com paramentro opcionais
function StringNumberSize(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
        
    }
    return value
}