/* 
===================
Distance Coordinate
===================

[INSTRUCTION]
buatlah program yang dapat menentukan jarak antara dari character o dan x 
pada array multidimensi, preview : 
[
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]

[EXAMPLE]
console.log(distanceCoordinate([
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]))

step by step solving :
[
    ['', '', 'o',''],
    ['', '', '1',''],
    ['', '', '2',''],
    ['x5','4','3','']
]
jika kita perhatikan urutan angka - angka diatas, maka jarak antara 
o dan x adalah 5. dimana posisi x dihitung sebagai 1 langkah 

maka output : 5
*/

function distanceCoordinate(board) {
  var coordinateO = [];
  var coordinateX = [];

  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++) {
      if(board[i][j] === 'o') {
        coordinateO = [i, j];
      }
      if(board[i][j] === 'x') {
        coordinateX = [i, j];
      }
    }
  }

  return Math.abs(coordinateO[1] + coordinateX[0] - coordinateO[0] - coordinateX[1]);
  
}

console.log( distanceCoordinate([
   ['','','o',''],
   ['','','',''],
   ['','','',''],
   ['x','','','']
])) // 5

console.log( distanceCoordinate([
   ['','','',''],
   ['','x','',''],
   ['','','',''],
   ['o','','','']
])) // 3

console.log( distanceCoordinate([
  ['','','','o'],
  ['','','',''],
  ['','','',''],
  ['x','','','']
])) // 6

console.log( distanceCoordinate([
  ['','','','x'],
  ['','','',''],
  ['','','',''],
  ['','','','o']
])) // 3
