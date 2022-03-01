// document.getElementById("form").addEventListener("submit", signIn)
// arr = JSON.parse(localStorage.getItem("signIn")) || []
// function signIn(event) {
//     event.preventDefault()
//     // console.log("here");
//     myObj = {
//         name: form.name.value,
//         mobile: form.mobile.value,
//         email: form.email.value,
//         password: form.password.value,
//     }

//     // console.log(myObj)

//     arr.push(myObj)
//     localStorage.setItem("signIn", JSON.stringify(arr))
//     alert("thank you")
//     window.location.href = "login.html"
// }

document.getElementById("form").addEventListener("submit", signIn)

const togglePassword = document.querySelector('#togglePassword');
let password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
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
        let response = await fetch('https://firstcryserver.herokuapp.com/register', {
            method: 'POST',
            body: myObj,
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await response.json();
        if (data.message !== undefined) {
            alert(data.message);
        } else {
            window.location.href = "login.html"
        }

    } catch (e) {
        alert(e.message);
    }

    // alert("thank you")
    // window.location.href = "login.html"

}
