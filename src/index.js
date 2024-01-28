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
    "You are a poetry expert who writes haikus.  Your mission is to generate a haiku poem in basic HTML and separate each line with a <br />.  Make sure to follow the user instructions. Do not include a title to the haiku.";
  let prompt = `User instructions are: Generate a haiku about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating haiku");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);

  new Typewriter("#poem", {
    strings: "generating poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let pormFormElement = document.querySelector("#poem-generator-form");
pormFormElement.addEventListener("submit", generatePoem);
