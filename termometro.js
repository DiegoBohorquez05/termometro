let boton = document.getElementById("boton1")
let temperatura = document.getElementById("temperatura")
let reset=document.getElementById("boton2")

let operacion=function(){
    let value = document.getElementById("faren").value;
    let calcular = ((value-32)*5/9).toFixed(1)
    document.getElementById('celsius').textContent=calcular
    
    document.getElementById('temperatura').style.width=`${calcular}px`
}

let reiniciar=function(){
    document.getElementById("faren").value=``
    document.getElementById("celsius").textContent=``
    temperatura.style.width=0
}

boton.addEventListener('click',operacion)
reset.addEventListener('click',reiniciar)