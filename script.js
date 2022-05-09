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
