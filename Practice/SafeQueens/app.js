var chessBoard8x8 = make2DArray(1, 1000)

populateyWithObject(chessBoard8x8)

console.table(placeQueens(1, chessBoard8x8))

function make2DArray(width, length) {
  var _2dArray = []
  for (var i = 0; i < length; i++) {
    _2dArray.push(new Array(width))
  }
  return _2dArray
}

function populateWithCoordinates(_2dArray) {
  var xDimension = _2dArray[0].length
  var yDimension = _2dArray.length
  for (var row = 0; row < yDimension; row++) {
    for (var col = 0; col < xDimension; col++) {
      _2dArray[row][col] = [row, col]
    }
  }
  return _2dArray
}
function populateWithNull(_2dArray) {
  var xDimension = _2dArray[0].length
  var yDimension = _2dArray.length
  for (var row = 0; row < yDimension; row++) {
    for (var col = 0; col < xDimension; col++) {
      _2dArray[row][col] = null
    }
  }
  return _2dArray
}
function populateyWithObject(_2dArray) {
  var xDimension = _2dArray[0].length
  var yDimension = _2dArray.length
  for (var row = 0; row < yDimension; row++) {
    for (var col = 0; col < xDimension; col++) {
      _2dArray[row][col] = {}
    }
  }
  return _2dArray
}

function checkNumberOfQueens(chessBoard) {
  var count = 0
  for (var row = 0; row < chessBoard.length; row++) {
    for (var col = 0; col < chessBoard[0].length; col++) {
      if (chessBoard[row][col].name === 'Alice') {
        count++
      }
    }
  }
  return count
}

function placeQueens(numberOfQueens, chessBoard) {
  function placeOneQueen(chessBoard) {
    var x = Math.floor(Math.random() * chessBoard[0].length)
    var y = Math.floor(Math.random() * chessBoard.length)
    chessBoard[y][x] = { order: numberOfQueensPlaced + 1, name: 'Alice' }
  }

  var numberOfQueensPlaced = 0

  while (numberOfQueensPlaced < numberOfQueens) {
    placeOneQueen(chessBoard)

    numberOfQueensPlaced = checkNumberOfQueens(chessBoard)
  }

  return chessBoard
}
