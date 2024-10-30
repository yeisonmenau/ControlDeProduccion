let produccionTotal = 0
let gananciaTotal = 0

function Ganancia (unidades){
    if(unidades<50){
        return 0
    }else if (unidades>=50 && unidades<=100){
        return 5
    }else{
        return 10
    }
}

for(let i=1; i<=7; i++){
    let unidadesProducidas = parseInt(prompt("Ingrese la cantidad de unidades producidas en el dia "+i+":"))
    alert("La ganancia del "+i+ " es: "+Ganancia(unidadesProducidas)+"%")
    gananciaTotal += Ganancia(unidadesProducidas)
    produccionTotal += unidadesProducidas
}

alert("La produccion total fue: "+produccionTotal)
