let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@jadegawronterra");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de filmes de fantasia?");
  campoAventura = createCheckbox("Gosta de filmes de aventura?");
}

function draw() {
  background("#8BC34A");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(6, 10, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Adão Negro, Harry Potter, Um maluco no pedaço ";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Github-jade-terra";          
        } else{
         return "Programando com html e css";
        }
      } else {
        if (gostaDeFantasia) {
          return "Love Hackers";
        } else {
          return "Irei hackear você.";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Harry Potter - O Prisioneiro de Azkaban";
    } else {
      return "Jade na área!";
    }
  }
}
