import randomColor from 'randomcolor'

var [backgroundColors, borderColors] = randomColor({ count: 8 }).reduce(
  function reducer(acc, cur, idx, arr) {
    if (idx % 4 === 0) {
      acc.push(arr.slice(idx, idx + 4))
    }
    return acc
  },
  []
)

var borderStyles = ['dotted', 'dashed', 'solid', 'groove']

var sizes = [50, 100, 150, 200]

var styles = [[], [], [], []]
  .map((arr, index) => {
    arr.push(backgroundColors[index])
    return arr
  })
  .map((arr, index) => {
    arr.push(borderColors[index])
    return arr
  })
  .map((arr, index) => {
    arr.push(borderStyles[index])
    return arr
  })
  .map((arr, index) => {
    arr.push(sizes[index])
    return arr
  })

export default styles
