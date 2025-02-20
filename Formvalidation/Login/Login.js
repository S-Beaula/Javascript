let login=document.getElementById("login")
login.addEventListener("click",(e)=>{
    e.preventDefault()
    let emailvalue=document.getElementById("email").value.trim()
    let passwordvalue=document.getElementById("password").value.trim()
    let storeddata=JSON.parse(localStorage.getItem("users"));

    console.log(storeddata);

    const user=storeddata.find(x=>{
        return x.email === emailvalue && x.password === passwordvalue
    })
    console.log(user);
    

    if(user){
        alert("successfully loggedin")
        location.href="../index/index.html"
    }else{
        alert("user not found")
    }
})
