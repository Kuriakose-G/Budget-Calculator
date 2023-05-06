function signup(){
    username=username_signup.value;
    password=password_signup.value;
    cpassword=password_signup_confirm.value;
    if(password==cpassword){
        data={
            username,
            password
        }
        localStorage.setItem(username,JSON.stringify(data))
        alert('Account has been created');
        window.location='./login.html';
    }else{
        donotmatch.innerHTML=`password do not match`;
    }
}