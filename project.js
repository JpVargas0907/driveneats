function selecionar(elemento){

    const botaoSelecionado = document.querySelector(".selecionado")
    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado")
    }

    elemento.classList.add("selecionado")
}