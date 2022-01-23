document.getElementById("form").addEventListener("submit",login)
count=0;
    var arr1=JSON.parse(localStorage.getItem("signIn"))||[]
  
    function login(event){
        event.preventDefault()
      

        let emailId=document.getElementById("email").value;
        let pass=document.getElementById("password").value;
// console.log(emailId,pass);

for(var i=0;i<arr1.length;i++){
    if(arr1[i].email==emailId&&arr1[i].password==pass){
   count++;
}

}


alert("we are processing just a sec plz")
setTimeout(()=>{
    if(count>=1){
    alert("You are sussefully login Thank You ")
    window.location.href="index.html"
}else{
    alert("sorry something went wrong")
}
},1000)

        
    }