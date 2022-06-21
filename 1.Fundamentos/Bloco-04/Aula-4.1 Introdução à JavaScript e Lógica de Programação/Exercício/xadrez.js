// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const peca = "PEAO";

switch (peca.toLowerCase()) {
  case "rei":
    console.log(
      "move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance."
    );
    break;
  case "rainha":
    console.log(
      "pode mover-se pelas colunas, fileiras e diagonal de outra cor"
    );
    break;
  case "torre":
    console.log("movimenta-se em direção reta pelas colunas ou fileiras.");
    break;
  case "bispo":
    console.log("movimenta-se na direção diagonal");
    break;
  case "cavalo":
    console.log(
      'movimenta-se sempre em "L",ou seja,duas casas para na horizontal/vertical e depois uma para a esquerda ou direita.'
    );
    break;
  case "peao":
    console.log(
      "movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal."
    );
    break;
  default: {
    console.log("[ERRO]");
  }
}
//referência: https://www.colegiosanrafael.com.br/xadrez.php#:~:text=O%20cavalo%20%C3%A9%20a%20%C3%BAnica,pode%20mover%2Dse%20para%20tr%C3%A1s.
