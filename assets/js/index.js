"use strict";

const INPUTS_REGULAR = {
  "user-first-name": /^[A-Za-zА-Яа-яІіЇїЄєҐґ]{1,20}$/,
  "user-last-name": /^[A-Za-zА-Яа-яІіЇїЄєҐґ]{1,20}$/,
  "user-email": /^.{5,15}@.+$/,
  "user-phone-1": /^\d{3}$/,
  "user-phone-2": /^\d{3}$/,
  "user-phone-3": /^\d{4}$/,
};

const correctInputs = document.querySelectorAll("input");

correctInputs.forEach((i) => i.addEventListener("input", checkInputsCorrect));

function checkInputsCorrect(e) {
  if (INPUTS_REGULAR[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
}

document.getElementById("contactForm").addEventListener("submit", submitData);

function submitData(e) {
  e.preventDefault();

  const firstName = e.target["user-first-name"].value;
  const lastName = e.target["user-last-name"].value;
  const email = e.target["user-email"].value;
  const phonePart1 = e.target["user-phone-1"].value;
  const phonePart2 = e.target["user-phone-2"].value;
  const phonePart3 = e.target["user-phone-3"].value;
  const subject = e.target.subject.value;
  const message = e.target.message.value.trim().replace(/\s+/g, " ");

  const phone = `${phonePart1}${phonePart2}${phonePart3}`;

  const formData = {
    name: `${firstName} ${lastName}`,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  console.log(formData);
}
