//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
//Por exemplo:
//n = 5

//*****
//*****
//*****
//*****
//*****


let side = 3;
let symbol = "*"
let parameter = '';

for (let index = 0; index < side; index +=1){
    parameter = parameter + symbol
}

for (let index = 0; index < side; index +=1){
     console.log(parameter)
}

