### Question 6:

Write a Javascript loop that will iterate from 1 to 5, both included, and log, if the number is ...

... odd or even.

Now wrap the functionality into a function that takes appropriate inputs as arguments (e.g. the smaller number, 5 here; and the larger number 15 here) and returns an object like the following ...

    {
      1: "odd",
      2: "even",
      3: "odd",
      4: "even",
      5: "odd"
    }


### Your Answer: may be provided as a code file with single function within it.
// write a funtion takes two integers  inputs , small and big, return all the integers between small and big, includeing small and big

function printInt(small, large) {
  for (let i = small; i <= large; i++) {
    console.log(i)
  }
}

// write a funtion take a integer as input, output "even" if the number is even number, otherwise output "odd"

function isEven(n) {
  if (n%2===0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}

// combine the two functions to one
function printInt(small, large) {
  let obj = {}
  for (let i = small; i <= large; i++) {
    obj[i] = i%2===0 ? "even" : "odd"
  }
  return obj
}
