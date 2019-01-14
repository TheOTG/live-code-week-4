/* 
===========
Search Like
===========

[INSTRUCTION]
buatlah program yang dapat mencari kata yang mirip katanya pada 
suatu array yang berisi string. pada program ini terdapat 2 parameter
- data yaitu array yang berisi string yang akan dibandingkan dengan keyword
- keyword adalah kata kunci yang akan dibandingkan dengan data

[EXAMPLE]
searchLike(["katak","moto","mata","ata halilintar","atta"],"ata")
data = ["katak","moto","mata","ata halilintar","atta"]
keword = "ata"

step nya : 
1. "katak" dengan "ata" ada kemiripan karena "katak" mengandung kata "ata"
masukkan katak "katak" ke dalam array baru 
2. "moto" dengan "ata" tidak ada kemiripan karena kata "moto" tidak
mengandung kata "ata"
3. dst ...

sehingga , hasil akhirnya adalah : 
output : [ 'katak', 'mata', 'ata halilintar' ]

[RULE]
1. dilarang menggunakan indexOf(), find(), filter()
2. hanya boleh menggunakan push()
3. dilarang menggunakan regex
*/

function searchLike(data, keyword) {
  var result = [];

  for(var i = 0; i < data.length; i++) {
    for(var j = 0; j < data[i].length - 2; j++) {
      var temp = "";
      for(var k = 0; k < keyword.length; k++) {
        temp += data[i][j + k]
      }
      if(temp === keyword) {
        result.push(data[i]);
        break;
      }
    }
  }

  return result;
}

console.log(searchLike(["katak", "moto", "mata", "ata halilintar", "atta"], "ata")) //[ 'katak', 'mata', 'ata halilintar' ]
console.log(searchLike(["nababan", "gaban", "ban", "nabab"], "naban")) // []