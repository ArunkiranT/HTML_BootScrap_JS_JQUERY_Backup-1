//document.querySelector("button").addEventListener("click", function() {
//document.querySelector(".set").addEventListener("click", function() {
//document.querySelector(".set .a").addEventListener("click", function() {
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons,i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked");
}
}); //calling through button event function -- Ananomous function
