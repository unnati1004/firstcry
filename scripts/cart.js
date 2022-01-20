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

div.append(name,price)
imgdiv.append(img)
document.getElementById("itemsset").append(imgdiv,div)
//document.getElementById("itemsimg").append(imgdiv)
//document.getElementById("itemsname").append(div)



})
}