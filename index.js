var path = require("path");
var filePath = path.resolve(__dirname, "in", "file.txt");
var input = require("fs").readFileSync(filePath, "utf8");
var inputShifted = input.split("\n");
var lines = [];
for (let i = 0; i < inputShifted.length; i++) {
  const element = inputShifted[i].replace("\r", "");
  lines.push(element);
}
/* Para se realizar os testes deve ser inserido apenas uma entrada no arquivo file.
  Com este script cada lines.shift() obtem uma linha do parquivo file, portanto
  se preceisar uso o split() para dividir as entradas de uma mesma linha
*/

// Resolução do problema apartir daqui

// Exemplo: resolução do exercicio URI 1040 Média 3
const exames = lines.shift();
var [exame1, exame2, exame3, exame4] = exames.split(" ");
exame1 = parseFloat(exame1) * 2;
exame2 = parseFloat(exame2) * 3;
exame3 = parseFloat(exame3) * 4;
exame4 = parseFloat(exame4);
var media = (exame1 + exame2 + exame3 + exame4) / 10;
console.log(`Media: ${media.toFixed(1)}`);
if (media < 5) {
  console.log("Aluno reprovado.");
} else if (media > 7) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno em exame.");
  var exame5 = parseFloat(lines.shift());
  console.log(`Nota do exame: ${exame5.toFixed(1)}`);
  var mediaFinal = (media + exame5) / 2;
  if (mediaFinal >= 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}

// até aqui
