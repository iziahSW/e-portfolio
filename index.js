// template_6et99by

// service_womi31m

// UdxyXcVNaEvLtUoTR
let isModalOpen = false;
let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_womi31m",
      "template_6et99by",
      event.target,
      "UdxyXcVNaEvLtUoTR",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--loading");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at fromiziah@gmail.com",
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    document.body.classList.remove("modal--open");
  } else {
    document.body.classList += " modal--open";
  }
  isModalOpen = !isModalOpen;
}
