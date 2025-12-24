






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






