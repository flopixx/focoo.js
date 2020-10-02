let on = document.getElementById("on")
on.onclick= encender

function encender (){
 var foco = document.getElementById("foco")
    foco.src= "fotos/on.gif"

}
let off = document.getElementById("off")
off.onclick= apagar

function apagar (){
    var foco = document.getElementById("foco")
   foco.src= "fotos/off.gif"

}





