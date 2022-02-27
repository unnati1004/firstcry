var data = JSON.parse(localStorage.getItem("Cart")) || []
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
    btt.innerHTML = '<i class="fas fa-trash-alt fa-lg"></i>' + "   " + " REMOVE"
    btt.setAttribute("id", "btrem")

    var bttsl = document.createElement("button")
    bttsl.innerHTML = '<i class="fa-duotone fa-circle-heart"></i>' + "  " + "MOVE TO SHORTLIST"

    bttsl.setAttribute("id", "btrem")
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
    //   document.querySelector("#ttp").innerHTML="Total price is "+ sum;
})
console.log(sum.toFixed(2));
document.querySelector(".price_show").textContent = "Rs " + sum.toFixed(2);
document.querySelector(".price_sho").textContent = "Rs " + sum.toFixed(2);
document.querySelector(".price_sh").textContent = "Rs " + sum.toFixed(2);


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






// document.getElementById("tid").addEventListener("click",myFn)
// let divTag=document.getElementById("main")
// function myFn(event){
//     event.preventDefault()



//     divTag.innerHTML=""
// }


document.getElementById("form").addEventListener("submit", saveFn)
// arr=JSON.parse(localStorage.getItem("addres"))||[]
myObj = JSON.parse(localStorage.getItem("addres")) || []
function saveFn(event) {
    event.preventDefault()


    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pin = document.getElementById("pin").value;
    let city = document.getElementById("city").value;
    let house = document.getElementById("house").value;
    let area = document.getElementById("area").value;

    // console.log(name,mobile,pin,city,house,area);

    myObj = {
        name: name,
        mobile: mobile,
        pin: pin,
        city: city,
        house: house,
        area: area,
    }

    // arr.push(myObj)
    localStorage.setItem("addres", JSON.stringify(myObj)) || []
    // window.location.href="addres2.html"

    // console.log(myObj);



    // alert("Thank You So Much Your delivery will be commming in this address")
}

document.getElementById("cancel").addEventListener("click", myCancel)
function myCancel() {
    alert("Are You Sure you want cancel this")
    window.location.href = "login.html"

}
let forget = document.getElementById("forget")
window.onclick = function (event) {
    if (event.target == forget) {
        forget.style.display = "none";
    }
}



document.getElementById("unnati").addEventListener("click", () => {
    forget.style.display = "block"
})
document.getElementById('dummy').addEventListener("click", () => {
    window.location.href = 'shortlist.html'
})
let address2 = document.getElementById("address2")
window.onclick = function (event) {
    if (event.target == address2) {
        address2.style.display = "none";
    }
}
document.getElementById("save").addEventListener("click", () => {
    localStorage.setItem("addres", JSON.stringify(myObj)) || []
    address2.style.display = "block"
})

let data1 = JSON.parse(localStorage.getItem("addres")) || []
console.log(data1);
let divTag = document.getElementById("tlocal1")
function appendData(data1, index) {
    let div = document.createElement("div")
    let name = document.createElement("p")
    let mobile = document.createElement("p")
    let pin = document.createElement("p")
    let city = document.createElement("p")
    let Add = document.createElement("p")
    let house = document.createElement("p")
    name.innerText = `Name:  ${data1.name}`
    mobile.innerText = `Mobile No:  ${data1.mobile}`
    pin.innerText = `Pincode:  ${data1.pin}`
    city.innerText = `City: ${data1.city}`
    Add.innerText = `Add:  ${data1.area}`
    house.innerText = `House No: ${data1.house}`
    div.append(name, mobile, pin, city, Add, house)
    divTag.append(div)
}
appendData(data1)

document.getElementById("tid").addEventListener("click", myFn)
let divtag = document.getElementById("main")
function myFn(event) {
    event.preventDefault()
    divtag.innerHTML = ""
}
document.querySelector("#tarun").addEventListener("click", btnFn)

function btnFn() {
    window.location.href = "cvv.html"
}
document.getElementById("delfile").addEventListener("click", delF)
function delF() {
    alert("are u sure You want to Delete This");
}