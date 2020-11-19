## Question A (30% credit):

Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?

Hint: you may put it in a sample page, load it and check out the network tab in the Devtools.

Case 1:
`<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

Case 2:
`<img src="dog.jpg" style="display:none" alt="my dog">`

## Question B (30% credit)

1. What are `data-` attributes good for? (100 words max)

2. Describe the differences between a cookie, sessionStorage and localStorage and when would you use each of them. Please make it your answer, and not a copy and paste from somwhere (150 words max)

## Answer A:

Case 2 triggered a HTTP GET request.

## Answer B:

The data-\* attribute is used to store custom data private to the page or application.

The data-\* attribute gives us the ability to embed custom data attributes on all HTML elements.

The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

## Feedback - 2/3 - did not answer about cookies, etc.....
