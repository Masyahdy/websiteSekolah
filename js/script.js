const nav = document.querySelector(".navbar");
const list = document.querySelectorAll(".nav-link");

nav.addEventListener("click", function (e) {
  if (e.target.className == "nav-link") {
    list.forEach(function (lis) {
      lis.className = "nav-link";
    });
    e.target.classList.add("active");
  }
});
