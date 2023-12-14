// Parent node , child node , last node and firstElementNode e.t.c

let container = document.body.childNodes[1];

console.log(container);
console.log(container.firstElementChild);
console.log(container.lastElementChild);

console.log(container.firstChild);
console.log(container.lastChild);
container.lastElementChild.style.backgroundColor = "green";
container.lastElementChild.style.color = "White";

// To access the parent element

console.log(container.lastElementChild.parentElement);

console.log(document.body.firstElementChild.childNodes);

console.log(document.body.firstElementChild.children);

console.log(document.body.firstElementChild.children[1].nextElementSibling);

console.log(document.body.firstElementChild.children[4].previousElementSibling);
