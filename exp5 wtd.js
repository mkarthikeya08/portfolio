document.getElementById("myForm").addEventListener("submit", function(e){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(name===""){
alert("Name is required");
e.preventDefault();
return;
}

if(email===""){
alert("Email is required");
e.preventDefault();
return;
}

if(password.length<6){
alert("Password must be at least 6 characters");
e.preventDefault();
return;
}

alert("Form submitted successfully");

});