function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "302065of2abct09a77b13b4664675209";
  let context =
    "You are a clever poetry expert who writes creative haikus.  Your mission is to generate a haiku poem and separate each line with a <br />.  Make sure to follow the user instructions. Do not include a title to the haiku.";
  let prompt = `User instructions are: Generate a haiku about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a haiku about ${instructionsInput.value}</div>`;

  console.log("generating haiku");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let pormFormElement = document.querySelector("#poem-generator-form");
pormFormElement.addEventListener("submit", generatePoem);
