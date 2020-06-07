var a=+prompt("Enter prize item 1");
var b=+prompt("Enter quantity item 1");
var c=+prompt("Enter prize item 2");
var d=+prompt("Enter quantity item 2");
var e=+prompt("Enter Shipping charges");
var f=a*b;
var g=c*d;
var h=e+f+g;

document.write("Price of item 1 is  " + a + "<br>");
document.write("Quantity of item 1 is  " + b + "<br>" );
document.write("Price of item 2 is  " + c + "<br>" );
document.write("Quantity of item 2 is  " + d + "<br>" );
document.write("Shipping charges  " + e  + "<br>");
document.write("Total cost of your order is  " + h);

