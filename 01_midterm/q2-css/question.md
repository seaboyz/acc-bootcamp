### Question 2:

What do the following CSS selectors select? Please provide examples

    div + p
    div p
    div, p
    div > p
    div ~ p

### Your Answer:

<body>

<h1>Welcome to My Homepage</h1>

<div>
  <h2>My name is Donald</h2>
  <p>I live in Duckburg.</p>
</div>

<p>My best friend is Mickey.</p>

<p>I will not be styled.</p>

</body>

1. div + p
    Select the <p> element directly follows the <div> element. 
    <p>My best friend is Mickey.</p> is selected.

2. div p
    Select all <p> elements inside the <div> element. 
    <p>I live in Duckburg.</p> is selected.

3. div, p
    Select the <div> and all <p> elements.
    <div><h2>My name is Donald</h2><p>I live in Duckburg.</p></div>,
    <p>My best friend is Mickey.</p>,
    <p>I will not be styled.</p> are selected.

4. div > p
    Select the <p> element which parent is <div> element.
    <p>I live in Duckburg.</p> is selected.

5. div ~ p
    Select all <p> elements follows the <div> element.
    <p>My best friend is Mickey.</p> and <p>I will not be styled.</p> are selected.



