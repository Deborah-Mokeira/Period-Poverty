function subscribe() {
  let firstName = prompt("What is your first name?");
  let age = prompt("What is your age?");
  let email = prompt("What is your  email address?");
  let country = prompt("What country are you from?");

  if (age < 16) {
    alert("🙂Thank you" + " " + firstName + "!");
  } else {
    alert(
      "👩Thank you" +
        " " +
        firstName +
        ", for subscribing to our newsletter."
    );
  }
}
let subscribeButton = document.querySelector("button");
subscribeButton.addEventListener("click", subscribe);