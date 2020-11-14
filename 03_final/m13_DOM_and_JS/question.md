### Which of the following reasons explains this use of Array.from ...

```
  let headingElems = document.querySelectorAll('.article .title')
  let headings = Array.from(headingElems).map(t => t.textContent)
  console.log(headings)
```

1. The code is wrong and wouldn't work
2. Use it because it shows your mastery
3. You need it because querySelectorAll provides a NodeList, which is missing a .map method
4. none of the above