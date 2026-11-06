// template_6et99by

// service_womi31m

// UdxyXcVNaEvLtUoTR

function contact(event) {
  event.preventDefault();
  // emailjs
  //   .sendForm(
  //     "service_womi31m",
  //     "template_6et99by",
  //     event.target,
  //     "UdxyXcVNaEvLtUoTR",
  //   )
  //   .then(() => {
  //     console.log("this worked1");
  //   });
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    console.log("it worked1");
  }, 500);
}
