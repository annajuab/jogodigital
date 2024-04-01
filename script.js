let storyDiv = document.getElementById("story");
let choicesDiv = document.getElementById("choices");

function mostrarTexto(texto) {
  storyDiv.innerHTML = texto;
}

function mostrarEscolhas(escolhas) {
  choicesDiv.innerHTML = "";
  for (let i = 0; i < escolhas.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = escolhas[i].texto;
    button.onclick = escolhas[i].funcao;
    choicesDiv.appendChild(button);
  }
}

function escolha(n) {
  switch (n) {
    case 1:
      escolhaExplorar();
      break;
    case 2:
      escolhaFugir();
      break;
    case 3:
      escolhaEntrar();
      break;
    case 4:
      escolhaDesviar();
      break;
  }
}

function escolhaExplorar() {
  mostrarTexto("Você decide explorar a caverna escura...");
  mostrarEscolhas([
    {
      texto: "Continuar",
      funcao: escolhaEntrar,
    },
  ]);
}

function escolhaFugir() {
  mostrarTexto("Você decide fugir da caverna escura...");
  mostrarEscolhas([
    {
      texto: "Continuar",
      funcao: function () {
        mostrarTexto("Fim da aventura.");
        mostrarEscolhas([]);
      },
    },
  ]);
}

function escolhaEntrar() {
  mostrarTexto("Você encontra uma porta. O que você faz?");
  mostrarEscolhas([
    {
      texto: "Abrir a porta",
      funcao: function () {
        mostrarTexto(
          "A porta estava trancada. Você encontra um objeto misterioso ao lado."
        );
        mostrarEscolhas([
          {
            texto: "Pegar o objeto",
            funcao: escolhaDesviar,
          },
          {
            texto: "Ignorar o objeto",
            funcao: escolhaDesviar,
          },
        ]);
      },
    },
    {
      texto: "Desviar da porta",
      funcao: escolhaDesviar,
    },
  ]);
}

function escolhaDesviar() {
  mostrarTexto(
    "Você continua seu caminho. De repente, ouve um barulho atrás de você. O que você faz?"
  );
  mostrarEscolhas([
    {
      texto: "Investigar o barulho",
      funcao: function () {
        mostrarTexto("Era apenas um animal. Você segue em frente.");
        mostrarEscolhas([
          {
            texto: "Continuar",
            funcao: function () {
              mostrarTexto("Você chega ao fim da caverna. Fim da aventura.");
              mostrarEscolhas([]);
            },
          },
        ]);
      },
    },
    {
      texto: "Ignorar o barulho e continuar",
      funcao: function () {
        mostrarTexto("Você segue em frente.");
        mostrarEscolhas([
          {
            texto: "Continuar",
            funcao: function () {
              mostrarTexto("Você chega ao fim da caverna. Fim da aventura.");
              mostrarEscolhas([]);
            },
          },
        ]);
      },
    },
  ]);
}

// Início da história
mostrarTexto("Você está diante de uma caverna escura. O que você faz?");
mostrarEscolhas([
  {
    texto: "Explorar a caverna",
    funcao: function () {
      escolha(1);
    },
  },
  {
    texto: "Fugir da caverna",
    funcao: function () {
      escolha(2);
    },
  },
]);
