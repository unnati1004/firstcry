let local=JSON.parse(localStorage.getItem("Cart"))
console.log(local)
appenddata(local)
function appenddata(local){
local.forEach((elem)=>{
let div=document.createElement("div")
let imgdiv=document.createElement("div")

let name=document.createElement("p")
let price=document.createElement("p")
price.textContent=elem.price

let img=document.createElement("img")
img.src=elem.image

name.textContent=elem.name

 Updated upstream
div.append(name,price)
imgdiv.append(img)
document.getElementById("itemsset").append(imgdiv,div)
//document.getElementById("itemsimg").append(imgdiv)
//document.getElementById("itemsname").append(div)



})
}

div3.setAttribute("id","bttdet")

    div.style.display = "flex"
    div.style.border = "1px solid black"
    var img = document.createElement("img");
    img.src = image
    img.setAttribute("id", "imgitems")
    div1.append(img)

    var nm = document.createElement("p");
    nm.textContent = name;
    var btt = document.createElement("button")
     btt.innerHTML='<i class="fas fa-trash-alt fa-2x"></i>'+"Remove";
     

    

    var bttsl = document.createElement("button")
    bttsl.innerHTML = '<i class="fa-regular fa-heart"></i>'+"MOVE TO SHORTLIST"
    bttsl.addEventListener("click", function () {
        short_list(el)
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
document.querySelector(".price_show").textContent = "Rs " + sum;
document.querySelector(".price_sho").textContent = "Rs " + sum;
document.querySelector(".price_sh").textContent = "Rs " + sum;

function remove(elm) {
    data.splice(elm, 1)
    localStorage.setItem("Cart", JSON.stringify(data))
    location.reload()
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
>>>>>>> Stashed changes
