
function playAudio(pessoa){
  let audio = document.getElementById(pessoa+"Audio");
  let foto = document.getElementById(pessoa+"Foto");
  if(foto){
    foto.addEventListener('click', function(){
      audio.play();
    });
    if (pessoa == "evil") {
      audio.volume = 0.1;
    }

  }
}

let curiosidades = document.querySelectorAll(".pCuriosidade");
let curiosidadesBotao = document.querySelector("#botaoCuriosidade");
if (curiosidadesBotao){
  curiosidadesBotao.addEventListener('click', function(){
    //esconde as anteriores
    for (let item of curiosidades) {
      item.classList.add("hide");
    }
    //escolhe uma aleatoria
    let random = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    random.classList.remove("hide");
  });
}

//caixa
let caixa = document.querySelector('#explicaFoto');
if (caixa) {
  caixa.addEventListener('click', function(){
    document.querySelector("#bixo").classList.remove('hide');
    caixa.classList.add('hide');
  })
}


//coloca o audio ao clicar na foto de cada personagem
playAudio("morty");
playAudio("rick");
playAudio("jerry");
playAudio("summer");
playAudio("beth");
playAudio("bixo");
playAudio("explica");
playAudio("evil");
playAudio("tema");
