let data=JSON.parse(localStorage.getItem("addres"))||[]
console.log(data);
let divTag=document.getElementById("tlocal1")
function appendData(data,index){
    let div=document.createElement("div")
    let name=document.createElement("p")
    let mobile=document.createElement("p")
    let pin=document.createElement("p")
    let city=document.createElement("p")
    let Add=document.createElement("p")
    let house=document.createElement("p")




    name.innerText=`Name:  ${data.name}`
    mobile.innerText=`Mobile No:  ${data.mobile}`
    pin.innerText=`Pincode:  ${data.pin}`
    city.innerText=`City: ${data.city}`
    Add.innerText=`Add:  ${data.area}`
    house.innerText=`House No: ${data.house}`












    div.append(name,mobile,pin,city,Add,house)
    divTag.append(div)
}
appendData(data)

document.getElementById("tid").addEventListener("click",myFn)
    let divtag=document.getElementById("main")
    function myFn(event){
        event.preventDefault()
        
       
     
        divtag.innerHTML=""
    }


document.querySelector("button").addEventListener("click",btnFn)

function btnFn(){
   window.location.href="cvv.html"
}


document.getElementById("delfile").addEventListener("click",delF)
function delF(){
    alert("are u sure You want to Delete This")
    

}