function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "generating poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let pormFormElement = document.querySelector("#poem-generator-form");
pormFormElement.addEventListener("submit", generatePoem);
