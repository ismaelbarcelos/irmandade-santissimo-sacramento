






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



// ligth box 

const imagens = document.querySelectorAll("#fotos_antiga img");
const lightbox = document.getElementById("lightbox");
const imagemLightbox = document.getElementById("imagemLightbox");
const fechar = document.querySelector(".fechar");

imagens.forEach(imagem => {

    imagem.addEventListener("click", () => {

        imagemLightbox.src = imagem.src;
        imagemLightbox.alt = imagem.alt;

        lightbox.style.display = "flex";
    });

});

fechar.addEventListener("click", () => {
    lightbox.style.display = "none";
});