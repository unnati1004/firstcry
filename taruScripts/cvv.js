document.getElementById("form").addEventListener("submit", cvvFn);

function cvvFn(event) {
  event.preventDefault();
  console.log("here");

  let cart = document.getElementById("cartno").value;
  let cvv = document.getElementById("cvv").value;

  alert("We are processing just a second !");
  setTimeout(() => {
    if (cart == 123456789 && cvv == 123) {
      alert("Thankyou ❤️  your order will be delivered soon");
      window.location.href = "./index.html"
    } else {
      alert("Sorry something some went wrong !");
    }
  }, 1000);
}