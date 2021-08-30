//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
  
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

   info.recorrente = 'sim'


    let secondInfo = {
        personagem: 'Tio Patinhas',
        origem:  "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O último MacPatinhas',
    };

    secondInfo.recorrente = 'sim'

   for ( let key in info){
    for ( let key in secondInfo){
          
    }
    console.log (info[key] + ' e ' + secondInfo[key])
   }

 





    

