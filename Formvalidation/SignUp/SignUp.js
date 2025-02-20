let signup = document.getElementById("signup")
signup.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let confirmpassword = document.getElementById("confirmpassword")

    let nameValue = name.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let confirmpasswordValue = confirmpassword.value.trim()
 
    let isValid=true
    if (nameValue === "") {
        document.getElementById("nameerror").textContent = "name required"
        isValid=false
    } else if (nameValue.length <= 3) {
        document.getElementById("nameerror").textContent = "please enter atleast 3 characters"
         document.getElementById("nameerror").textContent = ""
        isValid=false
    } 
    // emailpattern =/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{4,}$/
    const emailpattern = /^[a-zA-z0-9]+@[a-zA-z]+\.[a-zA-Z]{2,}$/
    // E_pattern=/^[a-zA-z0-9]+@[a-zA-z]+\.[a-zA-Z]{2,}$/
    if (emailValue === "") {
        document.getElementById("emailerror").textContent = "email required";
        isValid=false
    } else if (!emailpattern.test(emailValue)) {
        document.getElementById("emailerror").textContent = "Email not valid";
        document.getElementById("emailerror").textContent = "";
        isValid=false
    }
    // let check = emailpattern.test(emailValue)
    // console.log(check);
    const pswdpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/

    if (passwordValue === "") {
        document.getElementById("passworderror").textContent = "email required"
        isValid=false
    }
    else if (!pswdpattern.test(passwordValue)) {
        document.getElementById("passworderror").textContent = "password not valid"
        document.getElementById("passworderror").textContent = "";
        isValid=false
    }
    let check = pswdpattern.test(passwordValue)
    console.log(check);

    if (passwordValue !== confirmpasswordValue) {
        document.getElementById("cwpderror").textContent = "password not matched"
        isValid=false
}


if(isValid){
    name.value=""
    email.value =""
    password.value =""
    confirmpassword.value =""

    const allUsers=JSON.parse(localStorage.getItem("users")) || [];

    allUsers.push({name:nameValue,email:emailValue,password:passwordValue,confirmPassword:confirmpasswordValue})
    localStorage.setItem("users",JSON.stringify(allUsers))
    location.href="../Login/Login.html"
  }


})