var examples = ['APPLE', 'Apple Cider', '   applesauce', 'apple pie', 'green apples'];

// The map() method creates a new array with the results of calling a function for every array element.
var test1 = examples.map(
    function(data){
        
        return data.trim().toLowerCase();

    }

// returns ['APPLE', 'Apple Cider', 'applesauce', 'apple pie', 'green apples']

).filter(// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

    function(data){

        return data.substr(0,5) === 'apple';

    }

).sort();//The sort() method sorts the items of an array.changes the original array.


// The forEach() method calls a function once for each element in an array, in order. Returns a value undefined.
var test2 = examples.forEach(
    
    function(data){
    
    return data.trim().toLowerCase();

 });

console.log(test1);
console.log(test2);
console.log(examples);
