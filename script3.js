function validateInputs(){
    var fullName=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    if (fullName==='') {
        alert("Name is required");
        return false;
    }else{
        true;
    }
    if (email===''){
        alert("Email is required");
        return false;
    }
    else{
        true;
    }
    if (password===''){
        alert("password is required");
        return false;
    }else{
        alert("Registered successfully");
    }
}
function validateInputs1(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    if (email===''){
        alert("Email is required");
        return false;
    }
    else{
        true;
    }
    if (password===''){
        alert("password is required");
        return false;
    }else{
        alert("Registered successfully");
    }
}