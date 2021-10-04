function functionSubmit(event){
    event.preventDefault()
}
document.getElementById('Resultado').style.display ="none"

let valorHora;
let tipo;
let cantidadHora;
let descuento;
let valorInicial;
let valorTotal


function Calcular() {
    cantidadHora = Number(document.getElementById('cantidad').value)
    tipo =  document.getElementById('tipo').value
    let valor = Valor_Servicio(cantidadHora)
    descuento = Descuento(valor,tipo)
    valorTotal = valor - descuento

    document.getElementById('Resultado').style.display = "block"

    document.getElementById('valor').value = valor
    document.getElementById('descuento').value = descuento
    document.getElementById('total').value = valorTotal

    console.log(valorTotal)
}

function Valor_Servicio(horas) {
     if(horas >0 && horas<=2){
        valorHora = 5000;
        valorInicial = valorHora * horas

    }else if(horas>2 && horas<=5){
        valorHora = 4000;
        valorInicial = (2*5000) + ((horas-2) * valorHora )

    }else if(horas>5 && horas<=10){
        valorHora = 3000;
        valorInicial = (2*5000) + (3*4000) + ((horas - 5) * valorHora)

    }else{
        valorHora = 2000;
        valorInicial = (2*5000) + (3*4000) + (5*300) + ((horas - 10) * valorHora)
    }
    
    return valorInicial
}

function Descuento(valor, tipo) {
    switch (tipo) {
        case 'Moto':
            descuento = valor * 0.15;
            break;
        case 'Carro':
            descuento = valor * 0.10;
            break

        default:
            alert('Dato no valido')
    }
    return descuento
}