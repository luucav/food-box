
let prato;

function escolherFrango () {
    document.getElementById('Frango Ying-Yang').style.borderColor = "green";
    document.getElementById('carne').style.borderColor = "White";
    prato = "Frango"
}

function escolherCarne() {
    document.getElementById('Frango Ying-Yang').style.borderColor = "white";
    document.getElementById('carne').style.borderColor = "green";
    prato = "Carne"
}


let bebida

function escolherCoca() {
    document.getElementById('refresco').style.borderColor = "white";
    document.getElementById('coca').style.borderColor = "green";
    bebida = "Coca"
}

function escolherRefresco() {
    document.getElementById('refresco').style.borderColor = "green";
    document.getElementById('coca').style.borderColor = "white";
    let prato;
    bebida = "refresco"
}

let sobremesa

function escolherPudim() {
    document.getElementById('sorvete').style.borderColor = "white";
    document.getElementById('pudim').style.borderColor = "green";
    sobremesa = "Pudim"
   
}

function escolherSorvete() {
    document.getElementById('sorvete').style.borderColor = "green";
    document.getElementById('pudim').style.borderColor = "white";
    sobremesa = "Sorvete"
   
}

function finalizarPedido() {
    let mensagem;
    
    mensagem = "Olá gostaria de fazer meu pedido: "+ prato + ", " + bebida + " e " + sobremesa;

    window.open("https://wa.me/+558694802541?text="+mensagem)


}