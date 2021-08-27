// 2- Para o segundo exercício, faça o mesmo que antes, 
// mas que imprima um triângulo retângulo com 5 asteriscos de base. 
// Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let side = 5;
let symbol = '*'
let inputLine = '';

for(index = 0; index < side; index +=1){
    inputLine = inputLine + symbol
    console.log(inputLine)
    
}