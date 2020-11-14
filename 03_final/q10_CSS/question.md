Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question:

1. Why can I not set the margin-top on the span with the id "txt" ?

2. Why can I not set the margin-top on the img with the id "pic" in the head section?

## Answer:

1. span is inline element, so it can only take margins left and right

2. img's inline style is more specific than id
