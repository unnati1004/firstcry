// document.getElementById("form").addEventListener("submit", login)
// count = 0;
// var arr1 = JSON.parse(localStorage.getItem("signIn")) || []

// function login(event) {
//     event.preventDefault()


//     let emailId = document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     // console.log(emailId,pass);

//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i].email == emailId && arr1[i].password == pass) {
//             count++;
//         }

//     }


//     alert("we are processing just a sec plz")
//     setTimeout(() => {
//         if (count >= 1) {
//             alert("You are sussefully login Thank You ")
//             window.location.href = "index.html"
//         } else {
//             alert("sorry something went wrong")
//         }
//     }, 1000)


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
    let myObj = {
        email: form.email.value,
        password: form.password.value,
    }
    myObj = JSON.stringify(myObj)

    try {
        let response = await fetch('https://firstcryserver.herokuapp.com/login', {
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
            window.location.href = "index.html"
        }

    } catch (e) {
        console.log(e.message);
    }

}
