var data = JSON.parse(localStorage.getItem("shortlist"));

let cart_item = JSON.parse(localStorage.getItem('Cart')) || [];
var count = 0;


data.map((el, index) => {
    count++;
    let { name, price, image } = el;
    var div = document.createElement("div");
    var divf = document.createElement("div");
    divf.style.display = "flex";

    var img = document.createElement("img");
    img.src = image;

    var p = document.createElement("p");
    p.textContent = name;

    var p1 = document.createElement("p");
    p1.textContent = "₹  " + price;

    var btn = document.createElement("button")
    btn.textContent = "ADD TO CART"
    btn.addEventListener('click', function () {
        cart(el);
    })
    btn.style.background = "#ff7043"


    var bt = document.createElement("button")
    bt.innerHTML = '<i class="fas fa-trash-alt fa-2x"></i>';
    bt.style.width = "40px"
    bt.style.marginLeft = "15px"
    bt.style.color = "black"
    bt.style.background = "transparent"
    bt.addEventListener("click", function () {
        alert("Do you want to remove this product from your Shortlist?")
        del(index);
    })

    divf.append(btn, bt);

    div.append(img, p, p1, divf);

    document.getElementById("bx3").append(div);


})

function del(index) {
    data.splice(index, 1)
    localStorage.setItem("shortlist", JSON.stringify(data));
    location.reload();
}
document.getElementById("clr").addEventListener("click", function () {
    data = [];
    localStorage.setItem("shortlist", JSON.stringify(data));
    document.getElementById("bx3").innerHTML = "";

    document.getElementById("prd").innerText = (0 + " " + "Products");
})

document.getElementById("prd").innerText = (count + " " + "Products");

if (count == 0) {
    document.getElementById("bx3").innerHTML = "";
    var para = document.createElement("p");
    para.innerText = "You have not shortlisted any product yet";
    para.style.fontSize = "16px";

    document.getElementById("bx3").append(para);
}

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