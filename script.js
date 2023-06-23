// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/*--------  Here is your Form handler  --------*/

// get the contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve form data
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var subject = document.getElementById("subjectInput").value;
  var message = document.getElementById("messageInput").value;

  // Create an object
  var formData = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  /**
   * 
   TODO:
   - Do something with the formData, e.g., send it to a server
   - Send your data to email server here

 */

  console.log(formData);
});
