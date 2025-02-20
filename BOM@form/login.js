let login=document.getElementById("login")
login.addEventListener("submit",(k)=>{
    k.preventDefault();
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    localStorage.setItem("usersinfo",JSON.stringify({email:email,password:password}))
    console.log("usersinfo");
    location.href="./home.html"
})