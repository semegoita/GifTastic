
var animals = ['Cat', 'Lion', 'Zebra', 'Elephant'];

function displayGif() {
  var animal = $(this).attr("data-name");
  //console.log("yes");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=9qCIOv455he8jseNY6sxmFOQfROgvWZ6";
  //console.log("yay");
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log('giffy');
    $('gif-view').text(JSON.stringify(response));
    console.log(response);
    var results = response.data;
    for (var i = 0; i < 10; i++) {
      // Creating and storing a div tag
      var animalDiv = $("<div>");

      // Creating a paragraph tag with the result item's rating
      var p = $("<p>").text("Rating: " + results[i].rating);

      // Creating and storing an image tag
      var animalImage = $("<img>");
      // Setting the src attribute of the image to a property pulled off the result item
      animalImage.attr("src", results[i].images.fixed_height.url);
      // if (animal === "still") {
      //   $(this).attr("src", $(this).attr("data-animate"));
      //   $(this).attr("data-state", "animate");
      // } else {
      //   $(this).attr("src", $(this).attr("data-still"));
      //   $(this).attr("data-state", "still");
      // }

      // Appending the paragraph and image tag to the animalDiv
      animalDiv.append(p);
      animalDiv.append(animalImage);

      // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
      $("#gif-view").prepend(animalDiv);
     
    }
    renderButtons();
  })
}
//function for adding a button to the div
function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < animals.length; i++) {
    var a = $('<button>');
    a.addClass('animal');
    a.attr("data-name", animals[i]);
    a.text(animals[i]);
    $("#buttons-view").append(a);
  }
}
$("#added").on("click", function (event) {
  event.preventDefault();
  var animalP = $("#animal").val().trim();
  animals.push(animalP);
  console.log('animals');
  renderButtons();
});

$(document).on("click", ".animal", displayGif);
renderButtons();





 //api key = 9qCIOv455he8jseNY6sxmFOQfROgvWZ6




















