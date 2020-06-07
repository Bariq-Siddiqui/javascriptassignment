var a=+prompt("Enter a number to show its multiplication table");
var b=+prompt("Enter lenght multiplication table");
document.write("Multiplication Table of  " + a + "  Lenght  " + b + "<br>");
for(var i=1; i<=b;i++)
{
    document.write(a + "x" + i + "=" + a*i + "<br>")
}