function validate()
{
var str1=document.MyForm.email.value;
var re = new RegExp('^[a-zA-Z0-9_.]+@[a-z]+.[a-z]{3}$','g');
var str2=document.MyForm.Pass.value;
var x =new RegExp('^[0-9a-zA-Z@#$&_]{8,12}$','g');
var str4=document.MyForm.Passc.value;
var str3=document.MyForm.pno.value;
var p =new RegExp('^[0-9]{10}$','g');
if(!(str1.match(re)))
{

		alert('Please Entere valid Email');
	}
else if(!(str2.match(x))){

alert('Password length should be 8 to 12 character');

}
else if (!(str2==str4)) {

	alert("Password doesn't match");
}
else if(!(str3.match(p)))
{
		alert('Enter valid Phone Number');
	}
else{
	alert('Valid Deatails');
	window.open("home.html");
}

}