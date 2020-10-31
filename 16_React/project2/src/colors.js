import randomColor from 'randomcolor'

var colors = randomColor({ count: 8 }).reduce(function reducer(
  acc,
  cur,
  idx,
  arr
) {
  if (idx % 2 === 0) {
    acc.push(arr.slice(idx, idx + 2))
  }
  return acc
},
[])

export default colors
