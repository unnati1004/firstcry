document.getElementById("form").addEventListener("submit", cvvFn);

function cvvFn(event) {
  event.preventDefault();
  console.log("here");

  let cart = document.getElementById("cartno").value;
  let cvv = document.getElementById("cvv").value;

  alert("we are Processing just a seconde plz");
  setTimeout(() => {
    if (cart == 123456789 && cvv == 799) {
      alert("thank you your odrer will be deliverd soon");
    } else {
      alert("sorry something some went wrong");
    }
  }, 1000);
}