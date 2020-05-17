/**
 * @fileoverview Conversor de numeros decimales a romanos
 * @version 1.0
 * @author Anderson Danilo Guerrrero Calpa <adguerreroc@unal.edu.co>
 * @copyright Academia Geek
 * 
 * 
 * 
 * 
 * @param {string} num
 * @return {string} 
 */

 
let convRom =(num)=>{
/* genero objeto con atributos de romanos asignando los valores no repetibles y no 
consecutivos de manera descendente.
*/
    var arrRom={M:1000,
           CM:900,
           D:500,
           CD:400,
           C:100,
           XC:90,
           L:50,
           XL:40,
           X:10,
           IX:9,
           V:5,
           IV:4,
           I:1 }
var rom='';
/*
ciclo que recorre todos los atributos del arrRom
*/
for(var i in arrRom){
    /*
    verifica si el numero ingreado es mayor al valor del atributo actual
    */
    while(num>= arrRom[i]){
        rom+=i //agraga el atributo de manera acumulatva
        num-=arrRom[i]; //resta el valor del atributo para salir del ciclo. y continuar el conteo
    }
}
return rom;
}
//llamado del evento para ejecucion de la funcion
document.getElementById('send_number').addEventListener('click',(e)=>{
    let numb=parseInt(document.getElementById("add_number").value);
    let resultado=convRom(numb);
    document.getElementById("result").innerHTML="El valor en numero romanos es: "+resultado;
})