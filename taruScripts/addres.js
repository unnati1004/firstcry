document.getElementById("tid").addEventListener("click",myFn)
let divTag=document.getElementById("main")
function myFn(event){
    event.preventDefault()
    
   
 
    divTag.innerHTML=""
}


document.getElementById("form").addEventListener("submit",saveFn)
// arr=JSON.parse(localStorage.getItem("addres"))||[]
function saveFn(event){
    event.preventDefault()


    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let pin=document.getElementById("pin").value;
    let city=document.getElementById("city").value;
    let house=document.getElementById("house").value;
    let area=document.getElementById("area").value;

// console.log(name,mobile,pin,city,house,area);

myObj={
name:name,
mobile:mobile,
pin:pin,
city:city,
house:house,
area:area,
}

// arr.push(myObj)
localStorage.setItem("addres",JSON.stringify(myObj))
window.location.href="addres2.html"

// console.log(myObj);



    // alert("Thank You So Much Your delivery will be commming in this address")
}

document.getElementById("cancel").addEventListener("click",myCancel)
function myCancel(){
alert("Are You Sure you want cancel this")
window.location.href="login.html"

}
