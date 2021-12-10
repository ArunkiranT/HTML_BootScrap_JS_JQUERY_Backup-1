//document.querySelector("button").addEventListener("click",handleClick()); //directly calling the function without the button event

document.querySelector("button").addEventListener("click",handleClick); //calling through button event function

function handleClick() {
  alert("I got clicked");
}
