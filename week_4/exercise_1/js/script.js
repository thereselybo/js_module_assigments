const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", logLength);

function logLength(event) {
  const inputValue = event.target.value;
  const valueLength = inputValue.length;
  console.log(valueLength);

  // we could skip the variables and write it this way
  console.log(event.target.value.length);
}
