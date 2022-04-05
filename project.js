let prato = null
let bebida = null 
let sobremesa = null

let precoPrato;
let precoBebida;
let precoSobremesa;


function converterNumero(preco){
    preco = preco.replace("R$ ", "").replace(",", ".")
    preco = Number(preco) * 100;
	return preco;
}

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
    let preco = document.querySelector(".prato .selecionado .preco").innerHTML
    precoPrato = converterNumero(preco)
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
    let preco = document.querySelector(".bebida .selecionado .preco").innerHTML
    precoBebida = converterNumero(preco)
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
    let preco = document.querySelector(".sobremesa .selecionado .preco").innerHTML
    precoSobremesa = converterNumero(preco)
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
		const total = precoPrato + precoBebida + precoSobremesa;
            let mensagem = encodeURIComponent(
			`Olá gostaria de fazer o pedido:\n
			-Prato: ${prato}\n
			-Bebida: ${bebida}\n
			-Sobremesa: ${sobremesa}\n
			Total: R$ ${(total/100).toFixed(2)}`)

            window.open(`https://api.whatsapp.com/send?phone=55061994511653&text=${mensagem}`)
    } else {
        alert("Complete o combo para finalizar o seu pedido")
    }
}

