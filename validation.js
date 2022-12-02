function validate(){
    if(document.myform.empid.value==""){
        document.getElementById("idErr").innerHTML = "Please enter ID";
        return false;
    }
    if(document.myform.firstname.value==""){
        document.getElementById("nameErr1").innerHTML = "Please enter first name";
        return false;
    }
    if(document.myform.lastname.value==""){
        document.getElementById("nameErr2").innerHTML = "Please enter first name";
        return false;
    }
    if(document.myform.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }
    if(document.myform.contactnumber.value==""){
        document.getElementById("contnumErr").innerHTML = "Please enter contact number";
        return false;
    }
    if(document.myform.salary.value==""){
        document.getElementById("salErr").innerHTML = "Please enter salary";
        return false;
    }
}

function submit(){
    alert("Successfully Created an Account!")
}