function validate(){
    var f=document.myform.fname.value;
    var l=document.myform.lname.value;
    var phone=document.myform.num.value;
    var pa=document.myform.pass.value;
    var pa1=document.myform.pass1.value;
    var ma=document.myform.mail.value;
    var at=ma.indexOf("@");
    var d=ma.lastIndexOf(".");
    if(f==null||f=="")
    {
        document.getElementById("fn").innerHTML="First name shoul not be empty";
        return false;
    }
    if(l==null||l=="")
    {
        document.getElementById("ln").innerHTML="Last name shoul not be empty";
        return false;
    }
    if(pa.length<=6)
    {
        document.getElementById("p").innerHTML="Password shuld contain atleast 6 characters or number ";
        return false;
    }
    if(pa1!=pa)
    {
        document.getElementById("p1").innerHTML="Both Password and Confirm password should be same";
        return false;
    }
    if(at<1||ma.length-d>4)
    {
        document.getElementById("ml").innerHTML="Please enter a valid email address";
        return false;
    }
    if(phone==null||phone=="")
    {
        document.getElementById("pn").innerHTML="Phone number is required";
        return false;
    }
    if(phone.length!=10)
    {
        document.getElementById("pn").innerHTML="Enter a valid phone number (should contain only 10 numbers)";
        return false;
    }

}