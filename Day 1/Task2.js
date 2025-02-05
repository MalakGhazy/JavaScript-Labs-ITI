do{
    var msg = prompt("Please Enter Your Message: ");
}while(isFinite(msg));
for(var i=1 ; i<7 ;i++)
{
    document.write(`<h${i}>${msg}</h${i}>`);
}