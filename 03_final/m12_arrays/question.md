### Which new Array method replaces this annoying piece of code?

```
var myArray = [2, 4, 64, 1]

function test(myArr) {
  for(let i=0; i<myArr.length; i++) {
    if(myArr[i] > 32) {
      return myArr[i]
    }
  }
  return false
}
```

1. find
2. findIndex
3. search
