const randomUrl = "https://dog.ceo/api/breeds/image/random/";

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results-img").empty();
  for (let i = 0; i < responseJson.message.length; i++) {
    $(".results-img").append(
      `<li><img src="${responseJson.message[i]}" class="results-img"></li>`
    );
    //display the results section
  }
  $("#results").removeClass("hidden");
}

function getDogImages(numInput) {
  let newUrl = randomUrl + numInput;

  fetch(newUrl)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    const numInput = $("#num-dog").val();
    getDogImages(numInput);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
