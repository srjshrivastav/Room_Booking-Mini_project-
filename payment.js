function validate()
{
       var no=document.MyForm.cardNo.value;
        var x1=new RegExp('^[0-9]{15}$','g');
       var cv=document.MyForm.Cvv.value;      
        var x2=new RegExp('^[0-9]{3}$','g');
       if ((!no.match(x1)))
       {
       	    if (!(cv.match(x2)))
             {
       	    	alert('Invalid Card number and Cvv');
       	    }
            else
            {
              alert('Invalid Card Number');
             }
        }
	     else if(!(cv.match(x2)))
       {

	     	alert('Invalid CVV');
	     }
	     else
       {
	     	alert('All Details are Valid');
	     	window.open('home.html');
	     }
            
}



