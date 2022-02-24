// let pro_div = document.getElementById("products");
var arr = [
  {

    "name": "Zero Half Sleeves T-Shirt Striped - Navy",
    "price": "156.60",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10393343a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10393343b.webp",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10393343c.webp",
    "image3": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10393343c.webp",
  },
  {
    "name": "Ollypop Half Sleeves T-Shirt Text Print - Waterfall Blue",
    "price": "267.81",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387650a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387650b.webp",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387650c.webp",
    "image3": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387650e.webp",
  },
  {
    "name": "Pine Kids Half Sleeves Biowashed Tee Rocket Print - Blue",
    "price": "1999",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10249004a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10249004b.webp",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10249004c.webp",
    "image3": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10249004d.webp",
  },
  {
    "name": "Pine Kids Half Sleeves Biowash Tee Lion Print - Black",
    "price": "394.21",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10184529a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10184529b.webp",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10184529c.jpg",
    "image3": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10184529d.webp",
  },
  {
    "name": "Ollypop Half Sleeves T-Shirt Text Print - Candy Pink",
    "price": "207.93",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387587a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10387587b.jpg",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387587c.webp",
    "image3": "",
  },
  {
    "name": "Play by Little Kangaroos Half Sleeves T-Shirt - Red",
    "price": "413.31 ",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9191970a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/9191970b.jpg",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/9191970c.jpg",
    "image3": "",
  },
  {
    "name": "Ollypop Half Sleeves T-Shirt Palm Trees & Island Print - Blue",
    "price": "213.31",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387619a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10387619b.jpg",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10387619c.webp",
    "image3": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10387619d.jpg",
  },
  {
    "name": "Taeko Half Sleeves T-Shirt Planes Print - Red",
    "price": "155.73 ",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10382086a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10382086b.jpg",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10382086c.webp",
    "image3": "",
  },
  {
    "name": "Pine Kids Half Sleeves Bio Wash Tee Super Leaf Print - Blue",
    "price": "555.21",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10183295a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10183295b.jpg",
    "image2": "",
    "image3": "",
  },
  {
    "name": "Polka Tots Full Sleeves Boys Rules Print Tee - Black",
    "price": "338.53",
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10525123a.webp",
    "image1": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/10525123b.jpg",
    "image2": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10525123c.webp",
    "image3": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10525123sz.webp",
  }
]
 


localStorage.setItem("productList", JSON.stringify(arr))
let product = JSON.parse(localStorage.getItem("productList")) || [];
let short = JSON.parse(localStorage.getItem('shortlist')) || [];
let cart_item = JSON.parse(localStorage.getItem('Cart')) || [];
items(product)
console.log(product);
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
  // short.push(data);
  // localStorage.setItem('shortlist', JSON.stringify(short));
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
document.getElementById("login").addEventListener("click", signIn);

function signIn() {
  window.location.href = "login.html"
}

document.getElementById("shortlist").addEventListener("click", function () {
  window.location.href = "shortlist.html"
})
document.getElementById("carticon").addEventListener("click", function () {
  window.location.href = "sumit.html";
})
