function validate()
{
var str1=document.MyForm.email.value;
var re = new RegExp('^[a-zA-Z0-9_.]+@[a-z]+.[a-z]{3}$','g');
var str2=document.MyForm.Pass.value;
var x =new RegExp('^[0-9a-zA-Z@#$&_]{8,12}$','g');
if(!(str1.match(re)))
{
	if (!(str2.match(x))) {

		alert('Incorrect Email and Password');
	}
	else{
		alert('Enter Registered Email');
	}
}
else if (!(str2.match(x))) {
	alert('Incorrect Password');
}
else{
	alert('Valid Deatails');
	window.open("home.html");
}

}