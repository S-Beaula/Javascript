// let registerform=document.getElementById("Form")
// registerform.addEventListener("submit",(k)=>{
//     k.preventDefault();
// let n=document.getElementById("name").value;
// let e=document.getElementById("email").value;
// let p=document.getElementById("password").value;
// localStorage.setItem("user",JSON.stringify({"name":n,"email":e,"password":p}))
// console.log("User registered successfully:", { n,e,p});
// })

let registerform=document.getElementById("Form")
registerform.addEventListener("register",(k)=>{
    k.preventDefault();
let n=document.getElementById("name").value;
let e=document.getElementById("email").value;
let p=document.getElementById("password").value;
let addallusers=JSON.parse(localStorage.getItem("user"))|| [];
addallusers.push({n,p,e});
localStorage.setItem("user",JSON.stringify({"name":n,"email":e,"password":p}))
localStorage.setItem("user",JSON.stringify(addallusers))
console.log("User registered successfully:", { n,e,p});
alert("userloggedin succcesfully",{n,p,e})
})
