


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  Answer:
     getElementById : Finds a single element by its ID.
     getElementsByClassName : Select all elements with a class HTMLCollection.
     querySelector : Select first element matching a CSS selector. 
     querySelectorAll : Select all elements matching a CSS selector NodeList.



2. How do you create and insert a new element into the DOM?

Answer:
   document.createElement() -> Create a new element.
   element.innerText = ""  and element.innerHTML = ""  -> Give text/ Give Html code//content to the element.
   parentElement.appendChild() -> Insert the element at the end of the parent element.



3. What is Event Bubbling? And how does it work?

  Answer :
    Event bubbling is when something happens on a child element , and that event automatically moves up to its parent elements , running any event listeners set on them.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer :
    Event Delegation is Instead of adding separate click listeners to many buttons, one listener is added to their common parent.
    The code is shorter and uses less memory.

 5. What is the difference between preventDefault() and stopPropagation() methods?

  Answer :
   stopPropagation() : Stops the events bubbling.
   preventDefault() : Stops the browsers default action.
