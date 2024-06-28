
  //sumar numeros de una lista

  function sumarNumeros(listaNumeros){
    let i = 0;
    let suma = 0;
    while( i < listaNumeros.length){
        
        suma += listaNumeros[i]; 
        i++;
    }
    return suma;
  }

let polshi = [15,45,123,22,16];
let neo = sumarNumeros(polshi);
console.log(neo);