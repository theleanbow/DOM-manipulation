// onclick
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");
//event listner

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });
btn.addEventListener("click", function (e) {
  console.log(e);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
