// document.getElementById("form").addEventListener("submit",signIn)
// arr=JSON.parse(localStorage.getItem("signIn"))||[]
// function signIn(event){
// event.preventDefault()
// // console.log("here");
// myObj={
// name:form.name.value,
// mobile:form.mobile.value,
// email:form.email.value,
// password:form.password.value,
// }

// // console.log(myObj)

// arr.push(myObj)
// localStorage.setItem("signIn",JSON.stringify(arr))
// alert("thank you")
// window.location.href="login.html"
// }

document.getElementById("form").addEventListener("submit", signIn)
async function signIn(event) {
    event.preventDefault()
    // console.log("here");
    let myObj = {
        name: form.name.value,
        mobile: form.mobile.value,
        email: form.email.value,
        password: form.password.value,
    }
    myObj = JSON.stringify(myObj)

    try {
        let response = await fetch('http://localhost:2345/register', {
            method: 'POST',
            body: myObj,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (e) {
        console.log(e);
    }

}
