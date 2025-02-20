let registerform=document.getElementById("Form")
registerform.addEventListener("register",(k)=>{
    k.preventDefault();
let n=document.getElementById("name").value;
let e=document.getElementById("email").value;
let p=document.getElementById("password").value;
let addallusers=JSON.parse(localStorage.getItem("user"))|| [];
let NAME=addallusers.n;
let EMAIL=addallusers.e;
let PSWD=addallusers.p
addallusers.push({n,p,e});
localStorage.setItem("user",JSON.stringify({"name":n,"email":e,"password":p}))
localStorage.setItem("user",JSON.stringify(addallusers))
if(n==NAME && e==EMAIL && p==PSWD){
    alert("userloggedin succcesfully",{n,p,e})
    location.href="./login.html"
}
else{
    alert("usernot found")
    location.href="./signup.js"
}
 console.log("User registered successfully:", { n,e,p});
 alert("userloggedin succcesfully",{n,p,e})
 location.href="./login.html"
})

