

// let scrollContainer = document.querySelector("gallery");

let scrollContainer = document.getElementsByClassName("gallery");
console.log(scrollContainer)
let backarrow = document.getElementById("backarrow");
let nextarrow = document.getElementById("nextarrow");

scrollContainer[0].addEventListener("wheel", (e) => {
  e.defaultPrevented();
  scrollContainer[0].scrollLeft += e.deltaY;
  scrollContainer[0].style.scrollBehavior = "auto";
});

nextarrow.addEventListener("click", () => {
  scrollContainer[0].style.scrollBehavior = "smooth";
  scrollContainer[0].scrollLeft += 1192;
});

backarrow.addEventListener("click", () => {
  scrollContainer[0].style.scrollBehavior = "smooth";
  scrollContainer[0].scrollLeft -= 1192;
});
