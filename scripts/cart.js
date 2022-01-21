
var data = JSON.parse(localStorage.getItem("Cart"));
var short = JSON.parse(localStorage.getItem("shortlist")) || [];
console.log(data)

data.map((el, index) => {

    let { name, image, price } = el;
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    div.style.display = "flex"
    div.style.border = "1px solid black"
    var img = document.createElement("img");
    img.src = image
    img.setAttribute("id", "imgitems")
    div1.append(img)

    var nm = document.createElement("p");
    nm.textContent = name;
    var btt = document.createElement("button")
    btt.textContent = "REMOVE"

    var bttsl = document.createElement("button")
    bttsl.textContent = "MOVE TO SHORTLIST"
    bttsl.addEventListener("click", function () {
        short.push(el)
        localStorage.setItem("shortlist", JSON.stringify(short))
        remove(el)
    })

    div3.append(btt, bttsl)
    btt.addEventListener("click", function () {
        remove(index)
    })
    var pr = document.createElement("p");
    pr.textContent = "price:" + price;
    div2.append(nm, pr)
    div2.setAttribute("id", "div2")
    div.append(div1, div2);

    document.getElementById("itemsset").append(div, div3);


})
document.querySelector("#shopping_no").textContent = "(" + data.length + ")";

var sum = 0;
data.map(function (elem) {
    let { price } = elem;
    sum = sum + (+price)
    //    document.querySelector("#ttp").innerHTML="Total price is "+ sum;
})
console.log(sum.toFixed(2));
document.getElementById("price_show").textContent = "Rs " + sum;

function remove(elm) {
    data.splice(elm, 1)
    localStorage.setItem("Cart", JSON.stringify(data))
    location.reload()
}

