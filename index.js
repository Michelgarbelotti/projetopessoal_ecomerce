//mudar foto em destaque com a galeria //
function mudarFoto(pequenaGaleria)
{
  var destaqueImg = document.getElementById("img-destaque");

  destaqueImg.src = pequenaGaleria.src ;
}

// função de quantidade do produto // 
function process(quant){
    var value = parseInt(document.getElementById("quant").value);
    value+=quant;
    if(value < 1){
      document.getElementById("quant").value = 1;
    }else{
    document.getElementById("quant").value = value;
    }
}





