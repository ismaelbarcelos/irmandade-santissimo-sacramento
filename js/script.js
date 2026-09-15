






document.addEventListener("DOMContentLoaded", function () {

  const botoes = document.querySelectorAll(".menu button");
  const fotos = document.querySelectorAll(".foto");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {

      /* remove ativo de todos */
      botoes.forEach(b => b.classList.remove("ativo"));

      /* adiciona ativo no clicado */
      botao.classList.add("ativo");

      const filtro = botao.dataset.filter;

      fotos.forEach(foto => {
        if (filtro === "all" || foto.classList.contains(filtro)) {
          foto.style.display = "block";
        } else {
          foto.style.display = "none";
        }
      });

    });
  });

});


// mudar background click

const botao = document.getElementById("botaoMenu"); 
const navBackground = document
.getElementById("nav_group");


let backAtivo;
botao.addEventListener('click',function(){

if(backAtivo){
 navBackground.style.backgroundColor = '#fbfbfb2f';
  backAtivo = false;
}else if(!backAtivo){
   navBackground.style.backgroundColor = '#ffffff';
   backAtivo = true;
}



})



