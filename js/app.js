var cifra="";
var num1 =0;
var num2;
var operant=0;

function display_num(numero){           // funcion es llamada cuando ingresan numeros

var resultado=cifra+numero;
document.getElementById("pantalla").value= resultado;
cifra=resultado;

  
}

function operador(simbolo){         //funcion es llamada cuando ingresan un operador (+,-,*,/)

  console.log("simbolo: "+simbolo);
  if (operant==0){                         // evalua si es la primera vez que ingresas un simbolo

    num1 =  parseInt(document.getElementById("pantalla").value);  //parseInt para que detecte que son números
    operant = simbolo;
    cifra="";

  } else {
      num2 = parseInt(document.getElementById("pantalla").value);
      if (operant=="+") {

        num1=num1+num2;

      } else if (operant=="-") {

        num1=num1-num2;

      } else if (operant=="*") {

        num1=num1*num2;

      } else if (operant=="/") {

        num1=num1/num2;
        
      }

     document.getElementById("pantalla").value=num1;
     operant = simbolo;
     cifra="";
      }

}

function reset() {
 
}

function total(){                 // funcion es llamada al apretar el boton igual "="

  num2 = parseInt(document.getElementById("pantalla").value);
  if (operant=="+") {
    console.log('num1:' + num1 + ' num2:' + num2); 
    num1=num1+num2;


  } else if (operant=="-") {

    num1=num1-num2;

  } else if (operant=="*") {

    num1=num1*num2;

  } else if (operant=="/") {

    num1=num1/num2;

  }else if(!opertat){
    num1=num1;
  }

  document.getElementById("pantalla").value=num1;
  operant=0;
  cifra="";
}

function reset() {
  
  num2 = parseInt(document.getElementById("pantalla").value=0);
}
