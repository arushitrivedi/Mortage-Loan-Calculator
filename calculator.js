function computeLoan()
{
    var amt=document.getElementById("amount").value;
    amt=parseFloat(amt);
    var rate=document.getElementById("rate").value;
    rate=parseFloat(rate);
    var time=document.getElementById("months").value;
    time=parseFloat(time);
    var interest=(amt*rate*time*0.01);    
    var monthPrinc= ((amt+interest*1)/time);    
    document.getElementById("payment").innerHTML= "Monthly Payable Amount is Rs. "+ monthPrinc;
}