document.getElementById("form").addEventListener("submit",signIn)
arr=JSON.parse(localStorage.getItem("signIn"))||[]
function signIn(event){
event.preventDefault()
// console.log("here");
myObj={
name:form.name.value,
mobile:form.mobile.value,
email:form.email.value,
password:form.password.value,
}

// console.log(myObj)

arr.push(myObj)
localStorage.setItem("signIn",JSON.stringify(arr))
alert("thank you")
window.location.href="login.html"
}