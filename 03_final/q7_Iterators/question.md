### Question:

What are various iterator functions available in JavaScript (e.g. forEach)? What would be your choice of an iterator function to loop over the elements of an object? What would be your choice of an iterator for arrays? Provide simple examples with your brief comments?

### Answer:

1.  map,reduce,find,sort,filter,reduceRight,every,some...
    https://www.w3schools.com/js/js_array_iteration.asp

2.  <!-- Object.keys(obj) generates a array of obj keys, then use forEach method to loop through the keys to access each property values of the obj-->

    Object.keys(obj).forEach(key=>{
    console.log(key,obj[key])
    })

3.  var arr = [1,2,3]
    arr.forEach(e=>console.log(e))

## Feedback - 2.5/3 - really wanted to see examples from #12.5
