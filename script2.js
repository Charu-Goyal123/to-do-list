
container=document.querySelector(".container");
pwShowHide=document.querySelector(".showhidepw");
pwfields=document.querySelector(".password");



pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListner("click", ()=>{
        pwfields.forEach(pwfields=>{
            if(pwfields.type==="password"){
                pwfields.type="text";
                pwShowHide.forEach(icon =>{
                    Icon.classList.replace("fa-eye-slash", "fa-eye");
                })
            }else{
                pwfields.type="password";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye", "fa-eye-slash");
            })
        }
    })
})
    
});

function loginvalidation()
{
    let email=document.forms.loginform.email.value;
    let password=document.forms.loginform.password.value;
    let regEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)`$/
    if (email=="" || !regEmail.test(email)){
        alert("please enter your email properly");
        email.focus();
        return false;

    }
    if (password==""){
        alert("please enter your password");
        password.focus();
        return false;
        
    }else{
        alert("Login successful");
    }
}