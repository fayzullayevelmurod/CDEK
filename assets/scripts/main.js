// select-custom
const select = document.getElementById("customSelect");
const head = select.querySelector(".select-head");
const options = select.querySelectorAll(".option");
const text = head.querySelector("span");

head.addEventListener("click", () => {
  select.classList.toggle("open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    text.textContent = option.textContent;
    select.classList.remove("open");

    select.classList.remove("error");
  });
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
// select-custom

// tab
const tabs = document.querySelector(".tabs-container");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

tabs.addEventListener("click", (e) => {
  const button = e.target.closest(".tab-btn");

  if (!button) return;

  const id = button.dataset.id;

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  const element = document.getElementById(id);

  if (element) {
    element.classList.add("active");
  }
});
// tab

// contact
const form = document.querySelector(".contact_in form");
const contactIn = document.querySelector(".contact_in");
const contactEd = document.querySelector(".contact_end");

const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (text.textContent.trim() === "Маркетплейс") {
    isValid = false;
    select.classList.add("error");
  } else {
    select.classList.remove("error");
  }

  // Success
  if (isValid) {
    contactIn.classList.add("active");
    contactEd.classList.add("active");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.classList.remove("error");
    }
  });
});

const prevBtn = document.querySelector(".prev_btn");

prevBtn.addEventListener("click", () => {
  form.reset();

  text.textContent = "Маркетплейс";

  contactIn.classList.remove("active");
  contactEd.classList.remove("active");

  inputs.forEach((input) => {
    input.classList.remove("error");
  });

  select.classList.remove("error");
});
// contact
