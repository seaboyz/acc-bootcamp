## Question A (50% credit):

What does the following code do? How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

## Question B (50% credit):

What's wrong with my code below? How would you fix it? Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console

### Answer A:

Sort numbers in an array in ascending order.

```
   var points = [40, 100, 1, 5, 25, 10];
   points.sort(function(roo,raa){return raa-roo});
```

### Answer B:

const has to be declared and initialized before use.
No. Because var pi will initialized to be undifined at the time the expression trys to use it.

## Feedback - Great!!! - 3/3 points
