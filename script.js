// const nav = document.querySelector(".nav");

// nav.setAttribute("style", "color:white; background:black");
// // nav.removeAttribute("style");
// const div = document.createElement("div");
// nav.appendChild(div);
// div.innerText = "Hello";
// div.classList.add("new");

//select the container div
const container = document.querySelector("#container");
//create and update the text
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorius text-content!";
container.appendChild(content);

//1) Add a <p> with red text that says “Hey I’m red!”
const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

//2) an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";
container.appendChild(h3);

// 3)Add a <div> with a black border and pink background color with the following elements inside of it:
//a)another <h1> that says “I’m in a div”
//b) a <p> that says “ME TOO!”
// c) Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container
const div = document.createElement("div");
div.setAttribute("style", "border: 2px solid black; background-color:pink");
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);
const p1 = document.createElement("p");
p1.textContent = "ME TOO!";
div.appendChild(p1);
container.appendChild(div);
