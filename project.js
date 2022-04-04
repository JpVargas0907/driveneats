let prato = null
let bebida = null
let sobremesa = null

let n1 = null
let n2 = null
let n3 = null
let somaPedido = n1+n2+n3;


function selecionarPrato(elemento){
    const icone = document.querySelector(".prato").querySelector(".selecionado ion-icon")
    const selecionado = document.querySelector(".prato").querySelector(".selecionado")

    if(selecionado !== null){
        selecionado.classList.remove("selecionado")
        icone.style.display = "none"
    }

    elemento.classList.add("selecionado")
    elemento.querySelector(".selecionado ion-icon").style.display = "block"

    prato = document.querySelector(".prato .selecionado .titulo-prato").innerHTML
    n1 = document.querySelector(".prato .selecionado .preco").innerHTML
    parseFloat(n1)
}

function selecionarBebida(elemento){
    const icone = document.querySelector(".bebida").querySelector(".selecionado ion-icon")
    const selecionado = document.querySelector(".bebida").querySelector(".selecionado")

    if(selecionado !== null){
        selecionado.classList.remove("selecionado")
        icone.style.display = "none"
    }

    elemento.classList.add("selecionado")
    elemento.querySelector(".selecionado ion-icon").style.display = "block"

    bebida = document.querySelector(".bebida .selecionado .titulo-prato").innerHTML
    n2 = document.querySelector(".prato .selecionado .preco").innerHTML
    parseFloat(n2)
}

function selecionarSobremesa(elemento){
    const icone = document.querySelector(".sobremesa").querySelector(".selecionado ion-icon")
    const selecionado = document.querySelector(".sobremesa").querySelector(".selecionado")

    if(selecionado !== null){
        selecionado.classList.remove("selecionado")
        icone.style.display = "none"
    }

    elemento.classList.add("selecionado")
    elemento.querySelector(".selecionado ion-icon").style.display = "block"

    sobremesa = document.querySelector(".sobremesa .selecionado .titulo-prato").innerHTML
    n3 = document.querySelector(".prato .selecionado .preco").innerHTML
    parseFloat(n3)
}

function aparecerBotao(){
    if(prato && bebida && sobremesa !== null){
        document.querySelector(".finalizar").style.background = "green"
        document.querySelector(".finalizar").style.color = "white"
        document.querySelector(".finalizar").style.fontWeight = "bold"
        document.querySelector(".finalizar").style.fontSize = "20px"
        document.querySelector(".finalizar").innerHTML = "Finalizar Pedido"
    }
}


function finalizarPedido(){


    if(prato && bebida && sobremesa !== null){
            let mensagem = `Olá gostaria de pedir o combo ${prato} , ${bebida} e ${sobremesa}!`
            window.open(`https://api.whatsapp.com/send?phone=55061994008800&text=${mensagem}`)
    } else {
        alert("Complete o combo para finalizar o seu pedido")
    }
}

