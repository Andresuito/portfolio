window.addEventListener("scroll", function () {
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPosition > window.innerHeight) {
    document.getElementById("scroll-to-top-btn").classList.remove("d-none");
  } else {
    document.getElementById("scroll-to-top-btn").classList.add("d-none");
  }
});

document
  .getElementById("scroll-to-top-btn")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
