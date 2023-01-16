// RAMOS PRECIADO ALAN JOSAFAT

//FUNCION PARA OBTENER X
function x(){
    //PEDIMOS EL VALOR DE X
        //Funcion flecha    

    let x = prompt("Valor de x");
    //NUESTRO ID "x" EN HTML SERA IGUAL AL VALOR QUE NOS DIERON Y SE GUARDA COMO CARACTER
    document.getElementById("x").innerHTML = x;
}

//FUNCION PARA OBTERNER Y
function y(){
    //PEDIMOS EL VALOR DE Y
    let y = prompt("Valor de y");
    //NUESTRO ID "y" EN HTML SERA IGUAL AL VALOR QUE NOS DIERON Y SE GUARDA COMO CARACTER
    document.getElementById("y").innerHTML = y;
}

//FUNCION DE SUMA
function suma(){
    //LE DAMOS A NUESTRA VARIABLE valoruno EL VALOR DE LO QUE TIENE EL ID "x" EN HTML
    let valoruno = document.getElementById("x").innerHTML;
    //LE DAMOS A NUESTRA VARIABLE valordos EL VALOR DE LO QUE TIENE EL ID "Y" EN HTML
    let valordos = document.getElementById("y").innerHTML;
    //HACEMOS QUE SE SUMEN EL VALOR UNO Y EL DOS
    // SE CONVIENTEN A NUMEROS CON EL PARSEINT
    // ENTONCES LO QUE TENEMOS EN ID "z" EN EL HTML SERA IGUAL A LA SUMA DE ESTOS DOS
    document.getElementById("z").innerHTML = parseInt(valoruno,10) + parseInt(valordos,10);
    let sum = (a, b) => a + b;
    alert( sum(parseInt(valoruno,10),parseInt(valordos,10)) ); // 3

}

//HACEMOS LO MISMO CON LAS FUNCIONES QUE APARECEN ABAJO
//LO UNICO DIFERENTE ES QUE CAMBIAMOS EL SIGNO DE OPERACION SEGUN LA FUNCION

function resta(){
    let valoruno = document.getElementById("x").innerHTML;
    let valordos = document.getElementById("y").innerHTML;
    //RESTANDO
    document.getElementById("z").innerHTML = parseInt(valoruno,10) - parseInt(valordos,10);
}

function multiplicacion(){
    let valoruno = document.getElementById("x").innerHTML;
    let valordos = document.getElementById("y").innerHTML;
    //MULTIPLICANDO
    document.getElementById("z").innerHTML = parseInt(valoruno,10) * parseInt(valordos,10);
}

function division(){
    let valoruno = document.getElementById("x").innerHTML;
    let valordos = document.getElementById("y").innerHTML;
    //DIVIDIENDO
    document.getElementById("z").innerHTML = parseInt(valoruno,10) / parseInt(valordos,10);
}
