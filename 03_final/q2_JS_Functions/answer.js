function checkSimilarity(str1, str2) {
  // convert str1, str2 into arrays
  var arr1 = [...str1]
  var arr2 = [...str2]
  var len1 = arr1.length
  var len2 = arr2.length
  var i = len1 >= len2 ? len1 : len2
  var diffrenceCount = 0
  // compaire each element of the two arrys
  // if there is diffrence difference++
  for (let j = 0; j < i; j++) {
    if (arr1[j] !== arr2[j]) {
      diffrenceCount++
    }
  }
  return diffrenceCount
}

checkSimilarity('This is a string', 'There was string')
