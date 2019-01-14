/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5


[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
CREATE FUNCTION "poinCalculator" taking 1 STRING PARAMETER
CREATE AND ASSIGN "countGold" with NUMBER 0
CREATE AND ASSIGN "countSilver" with NUMBER 0
CREATE AND ASSIGN "countBronze" with NUMBER 0
CREATE "result"

CREATE AND ASSIGN "i" with NUMBER 0
WHILE "i" < PARAMETER length
  IF PARAMETER at INDEX "i" equals to G
    ADD 1 to "countGold"
  IF PARAMETER at INDEX "i" equals to S
    ADD 1 to "countSilver"
  IF PARAMETER at INDEX "i" equals to B
    ADD 1 to "countBronze"

  ADD 1 to "i"

ASSIGN "result" with "countGold" MULTIPLY BY 2 THEN ADD "countSilver" THEN ADD "countBronze" DIVIDE BY 2

RETURN jumlah Gold: "countGold", jumlah Silver: "countSilver", jumlah Bronze: "countBronze". Dan totalnya adalah: "result"
*/

function poinCalculator(array) {
  var countGold = 0;
  var countSilver = 0;
  var countBronze = 0;

  for(var i = 0; i < array.length; i++) {
    switch(array[i]) {
      case "G":
        countGold++;
        break;
      case "S":
        countSilver++;
        break;
      case "B":
        countBronze++;
        break;
    }
  }

  return "jumlah Gold: " + countGold + ", jumlah Silver: " + countSilver + ", jumlah Bronze: " + countBronze + ". Dan totalnya adalah: " + (countGold*2 + countSilver + countBronze/2);
}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
