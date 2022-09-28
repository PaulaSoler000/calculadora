/* var cifra="";
var acumular=0;
var sumar=false;
var restar=false;

function display_num(num){
    //acumular los numeros
    document.getElementById("pantalla").value=cifra+num;

    cifra=document.getElementById("pantalla").value;
}

function suma(){

    //parseInt para que reconozca que son números
    acumular=acumular+parseInt(cifra);

    document.getElementById("pantalla").value=acumular;
    //resetea el texto
    cifra="";

    sumar=true;
}

function resta(){

    if (sumar){

        acumular=acumular-parseInt(cifra);

        document.getElementById("pantalla").value=acumular;

    }else{

    acumular=acumular-parseInt(cifra);

    document.getElementById("pantalla").value=acumular;
    }

    cifra="";
    sumar=false;
    restar=true;
}


function resultado(){

    if(sumar==true){

        document.getElementById("pantalla").value=acumular+parseInt(cifra);

        
    }else if(restar==true){

    }

}*/

var cifra="";
var num1 =0;
var operant=0;

function display_num(numero){           // funcion es llamada cuando ingresan numeros

var resultado=cifra+numero;
document.getElementById("pantalla").value= resultado;
cifra=resultado;

  
}

function operador(simbolo){         //funcion es llamada cuando ingresan un operador (+,-,*,/)

if (operant==0){                         // evalua si es la primera vez que ingresas un simbolo

  num1 =  parseInt(document.getElementById("pantalla").value);
  operant = simbolo;
  cifra="";

} 
else {
      var num2 = parseInt(document.getElementById("pantalla").value);
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


function total(){                 // funcion es llamada al apretar el boton igual "="

  var num2 = parseInt(document.getElementById("pantalla").value);
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
  operant=0;
  cifra="";
}
