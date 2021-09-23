import * as d3 from "d3"; //comment for github
//var d3 = window.d3; //uncomment for github

// Mouse Enter
// Creates Text hovering over zoo entrance picture
d3.select("#entrance").on("mouseenter", function () {
  d3.select("#enterZoo").text("You are about to enter the Zoo!");
});
d3.select("#Exit").on("mouseenter", function () {
  d3.select("#exitMessage").text("You are about to leave the zoo!");
});

//Creates text when hovering over animal pictures
d3.select("#Salmon").on("mouseenter", function () {
  d3.select("#name").text("You found a salmon");
});
d3.select("#LMBass").on("mouseenter", function () {
  d3.select("#name").text("You found a largemouth bass");
});
d3.select("#Trout").on("mouseenter", function () {
  d3.select("#name").text("You found a trout");
});
d3.select("#Bear").on("mouseenter", function () {
  d3.select("#name").text("You found a bear");
});
d3.select("#Moose").on("mouseenter", function () {
  d3.select("#name").text("You found a moose");
});
d3.select("#Wolf").on("mouseenter", function () {
  d3.select("#name").text("You found a wolf");
});
d3.select("#Hawk").on("mouseenter", function () {
  d3.select("#name").text("You found a hawk");
});
d3.select("#Eagle").on("mouseenter", function () {
  d3.select("#name").text("You found an eagle");
});
d3.select("#Raven").on("mouseenter", function () {
  d3.select("#name").text("You found a raven");
});

// Mouse Leave
// Makes the text disappear when done hovering over zoo entrance
d3.select("#entrance").on("mouseleave", function () {
  d3.select("#enterZoo").text("");
});
// Makes the text dissapear when done hovering over animal pictures
d3.select("#Salmon").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#LMBass").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#Trout").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#Bear").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#Moose").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#Wolf").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#Hawk").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#Eagle").on("mouseleave", function () {
  d3.select("#name").text("");
});
d3.select("#Raven").on("mouseleave", function () {
  d3.select("#name").text("");
});

// Button Click
// Changes the images of the animals when clicked on
d3.select("#Salmon").on("click", function () {
  d3.select("#Salmon").attr("src", "pictures/angryAnimals/salmon2.jpg");
});
d3.select("#LMBass").on("click", function () {
  d3.select("#LMBass").attr("src", "pictures/angryAnimals/bass2.jpg");
});
d3.select("#Trout").on("click", function () {
  d3.select("#Trout").attr("src", "pictures/angryAnimals/trout2.jpg");
});
d3.select("#Bear").on("click", function () {
  d3.select("#Bear").attr("src", "pictures/angryAnimals/bear2.jpg");
});
d3.select("#Moose").on("click", function () {
  d3.select("#Moose").attr("src", "pictures/angryAnimals/moose2.jpg");
});
d3.select("#Wolf").on("click", function () {
  d3.select("#Wolf").attr("src", "pictures/angryAnimals/wolf2.jpg");
});
d3.select("#Hawk").on("click", function () {
  d3.select("#Hawk").attr("src", "pictures/angryAnimals/angryHawk.jpg");
});
d3.select("#Eagle").on("click", function () {
  d3.select("#Eagle").attr("src", "pictures/angryAnimals/angryEagle.jpg");
});
d3.select("#Raven").on("click", function () {
  d3.select("#Raven").attr("src", "pictures/angryAnimals/angryRaven.jpg");
});
