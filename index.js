//mudar foto em destaque com a galeria //
function mudarFoto(pequenaGaleria) {
  let destaqueImg = document.getElementById("img-destaque");

  destaqueImg.src = pequenaGaleria.src ;

}

//alterar quantidade de ml do produto;
function itemSelecionado1() {
  document.getElementById("preco-descontado").innerHTML = "R$ 15,20";
  document.getElementById("antigo-preco").innerHTML = "R$ 18,00";
  document.getElementById("preco-atual").innerHTML = "R$ 16,00";
  document.getElementById("parcelado").innerHTML = "R$ 5,33 ";

  limpar();
  document.getElementById("btn-quantidade1").classList.add("btn-selecionado");
}

function itemSelecionado2() {
  
  document.getElementById("preco-descontado").innerHTML = "R$ 28,50";
  document.getElementById("antigo-preco").innerHTML = "R$ 32,00";
  document.getElementById("preco-atual").innerHTML = "R$ 30,00";
  document.getElementById("parcelado").innerHTML = "R$ 10,00 ";

  limpar();
  document.getElementById("btn-quantidade2").classList.add("btn-selecionado");
}

function itemSelecionado3() {
  document.getElementById("preco-descontado").innerHTML = "R$ 61,75";
  document.getElementById("antigo-preco").innerHTML = "R$ 67,00";
  document.getElementById("preco-atual").innerHTML = "R$ 65,00";
  document.getElementById("parcelado").innerHTML = "R$ 21,66 ";

  limpar();
  document.getElementById("btn-quantidade3").classList.add("btn-selecionado");
}

function itemSelecionado4() {
  document.getElementById("preco-descontado").innerHTML = "R$ 109,25";
  document.getElementById("antigo-preco").innerHTML = "R$ 120,00";
  document.getElementById("preco-atual").innerHTML = "R$ 115,00";
  document.getElementById("parcelado").innerHTML = "R$ 38,33 ";

  limpar();
  document.getElementById("btn-quantidade4").classList.add("btn-selecionado");
}

function limpar() {
  document.getElementById("btn-quantidade1").classList.remove("btn-selecionado");
  document.getElementById("btn-quantidade2").classList.remove("btn-selecionado");
  document.getElementById("btn-quantidade3").classList.remove("btn-selecionado");
  document.getElementById("btn-quantidade4").classList.remove("btn-selecionado");
 

}

// função de quantidade do produto // 
function process(quant) {
    var valor = parseInt(document.getElementById("quant").value);
    valor+=quant;
    if(valor < 1){
      document.getElementById("quant").value = 1;
    }else{
    document.getElementById("quant").value = valor;
    }
}

// limitar CEP







