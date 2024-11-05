const cheakForm = document.querySelector(".login-form");

cheakForm.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const obj = { email, password };

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  } else {
    console.log(obj);
    form.reset();
  }
}
