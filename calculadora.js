function suma() {
let input = document.getElementById('entrada');
input.value += '+';

        let partes = input.value.split('+'); 
        
        
                let num1 = parseFloat(partes[0].trim());
                
              let num2 = parseFloat(partes [1].trim());  
                
          let resultado = num1 + num2;
          
          if (resultado = num1 +num2) {
                  
                  input.value = resultado;
                  
          } 
          else { 
                  ('intrudisca um valor válido');  }
}
                
  
function resta() {
        let resta = document.getElementById('entrada');
        resta.value += '-';
         
         let partesResta = resta.value.split('-');
         
         let restaNum1 = parseFloat(partesResta[0].trim());
        
        
        let restaNum2 = parseFloat(partesResta[1].trim());
        
        
        let restaResul = restaNum1 - restaNum2;
        
        if (restaResul = restaNum1 - restaNum2) {
        
        resta.value = restaResul;
                
        }
        
        if (restaResul = restaNum1 === restaNum2) {
                resta.value = 0;
                
        }
        
        
        else {
                ('ingresa una operación válida');
        }
        
        
}



function multiplicacion() {
        let mul = document.getElementById('entrada');
        mul.value += '×'
        
        
        
        let mulLogb = mul.value.split('×');
        
        let partesMultiplo1 = parseFloat(mulLogb[0].trim());
        
        let partesMultiplo2 = parseFloat(mulLogb [1].trim());
        
        
        let resultadoMultiplo = partesMultiplo1 * partesMultiplo2;
        
        if (resultadoMultiplo = partesMultiplo1 * partesMultiplo2) {
                
                mul.value = resultadoMultiplo;
                
        }
        
        
        if ( partesMultiplo1 === 0 || partesMultiplo2 === 0) {
           mul.value = ('todo numero multiplicado × 0' + ' ' + 'es 0');
                
        }
        
        

}



function division() {
        
        let division = document.getElementById('entrada');
        division.value += '÷'
        
        let divLog = division.value.split('÷');
        let numDivi1 = parseFloat(divLog [0].trim());
         let numDivi2 = parseFloat(divLog [1].trim());
         
         let resltadoDiv = numDivi1 / numDivi2;
         
         if (resltadoDiv = numDivi1 / numDivi2) {
                 
                 division.value = resltadoDiv;
                 
         }
         
         else {
                 ('numeros i validos')
         }
         
         
}



function uno(){
        let uno = document.getElementById('entrada');
        uno.value += '1';
         
        
}

function dos() {
        let dos = document.getElementById('entrada');
        dos.value += '2';


}
function tres() {
        let tres = document.getElementById('entrada');
        tres.value += '3';


}
function cuatro() {
        let cuatro = document.getElementById('entrada');
        cuatro.value += '4';


}
function cinco() {
        let cinco = document.getElementById('entrada');
        cinco.value += '5';


}
function seis() {
        let seis = document.getElementById('entrada');
        seis.value += '6';


}
function siete() {
        let siete = document.getElementById('entrada');
        siete.value += '7';


}
function ocho() {
        let ocho = document.getElementById('entrada');
        ocho.value += '8';


}
function nueve() {
        let nueve = document.getElementById('entrada');
        nueve.value += '9';


}
function cero() {
        let cero = document.getElementById('entrada');
        cero.value += '0';


}




function borra() {
        let borra = document.getElementById('entrada').value = '';
        
        
}


function igual() {
        let igual = document.getElementById('entrada');
        
        try {
                let resultaDo = eval (entrada.value.replace('*','*' ).replace ('÷','/')); 
        
                entrada.value = resultado;
      } catch (error) {
              entrafa.value = ('error');
      }
}
