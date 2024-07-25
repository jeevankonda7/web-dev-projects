 function passwordViewer() {
     var password = document.getElementById("userpassword");
     var icon = document.getElementById("icon");

     if(password.type==="password") {
        password.type="text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
     }
     else {
        password.type="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
     }
 }


