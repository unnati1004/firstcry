
let url ="https://firstcryserver.herokuapp.com/nightwears";
let url1 = "https://firstcryserver.herokuapp.com/tshirt";
let url2 = "https://firstcryserver.herokuapp.com/thermal";
let product = JSON.parse(localStorage.getItem("productList")) || [];
let short = JSON.parse(localStorage.getItem('shortlist')) || [];
let cart_item = JSON.parse(localStorage.getItem('Cart')) || [];
async function getUserRepo(url) {
  let res = await fetch(url)
  let data = await res.json()
  // product=[]
  localStorage.setItem("productList", JSON.stringify(data))
  items(data)
  console.log(data);
}

getUserRepo(url1);

const night = document.getElementById("night");
let brand =()=>{
  if(night.checked==true)
  {
    document.querySelector("#products").innerHTML = "";
    // product=[];
    getUserRepo(url);
  }
  else{
    document.querySelector("#products").innerHTML = "";
    getUserRepo(url1);
  }
}
let brand1 =()=>{
  if(thermal.checked==true)
  {
    // product=[];
    document.querySelector("#products").innerHTML = "";
    getUserRepo(url2);
  }
  else{
    document.querySelector("#products").innerHTML = "";
    getUserRepo(url1);
  }
}
night.addEventListener('change',brand);
thermal.addEventListener('change',brand1);


function items(product) {
  product.map((elem) => {

    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let but = document.createElement('button');
    let but1 = document.createElement('button');
    but.textContent = "ADD TO CART"
    but1.textContent = "SHORTLIST"

    div3.setAttribute("class", "overlay");
    but.setAttribute("class", "but");
    but1.setAttribute("class", "but1");
    div3.append(but, but1);

    but1.addEventListener('click', () => {
      short_list(elem);
    })
    but.addEventListener('click', () => {
      cart(elem);

    })
    div3.setAttribute("class", "overlay");
    but.setAttribute("class", "but");
    but1.setAttribute("class", "but1");
    div3.append(but, but1);


    let img = document.createElement('img');
    let p = document.createElement('p');
    let h = document.createElement('p');
    img.src = elem.image;

    p.innerText = `₹${elem.price}`;
    h.innerText = elem.name;

    div.append(img);
    div1.append(h, p);
    div2.append(div, div1, div3);
    img.addEventListener('click', () => {
      console.log(elem);
      localStorage.setItem('single_product', JSON.stringify(elem));
      window.location.href = "./product_info.html";
    })
    document.getElementById("products").append(div2);
  });
}

var coll = document.getElementsByClassName("collapse");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function sorting() {
  var val = document.querySelector("#sort").value
  if (val == "low") {
    document.querySelector("#products").innerHTML = "";
    product.sort(function (a, b) {
      return a.price - b.price;
    });
    items(product)

  }
  else {
    document.querySelector("#products").innerHTML = "";
    product.sort(function (a, b) {
      return b.price - a.price;
    });
    items(product)

  }
}

function short_list(data) {
  // console.log(data);
  if (short.length === 0) {
    short.push(data);
    localStorage.setItem('shortlist', JSON.stringify(short));
  }
  else {
    let c = 0;
    for (let i = 0; i < short.length; i++) {
      if (short[i].image === data.image) {
        console.log(++c);
      }
    }
    if (c === 0) {
      short.push(data);
      localStorage.setItem('shortlist', JSON.stringify(short));
    }
  }
  
}
// let c = 0;
function cart(data) {
  // console.log(data);
  if (cart_item.length === 0) {
    cart_item.push(data);
    localStorage.setItem("Cart", JSON.stringify(cart_item));
  }
  else {
    let c = 0;
    for (let i = 0; i < cart_item.length; i++) {
      if (cart_item[i].image === data.image) {
        console.log(++c);
      }
    }
    if (c === 0) {
      cart_item.push(data);
      localStorage.setItem("Cart", JSON.stringify(cart_item));

    }
  }
}

// Navbar linking
document.getElementById("login").addEventListener("click", function (){
  window.location.href = "./login.html"
});



document.getElementById("shortlist").addEventListener("click", function () {
  window.location.href = "shortlist.html"
})
document.getElementById("carticon").addEventListener("click", function () {
  window.location.href = "sumit.html";
})
