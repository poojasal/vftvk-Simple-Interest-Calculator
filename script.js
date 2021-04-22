var tt1;
var tt2;
tt1=0;
tt2=1; /*variable for number of year */

/* function for displaying the interest rate value after slider */
function displayir()
{
    var irate = document.getElementById("iir").value;
    document.getElementById("oir").innerHTML = irate;
}

/* functions related to scrolling dropdown for number of year and to get its value */
function appeary(){
var vsel1 = document.getElementById("f22");
var vsel2 = document.getElementById("f21");

	vsel1.style.display = "block";
	vsel2.style.display = "none";
}

function dispyear() {
var val1 = document.getElementById("syear");
var vselect1 = document.getElementById("f22");
var vselect2 = document.getElementById("f21");

tt1=1;
vselect2.style.display = "block";
document.getElementById("op1").innerHTML = val1.value;
document.getElementById("op2").innerHTML = val1.value;
tt2=val1.value;
vselect1.style.display = "none";
}

function dispyear1() {
var val1 = document.getElementById("syear");
var vselect1 = document.getElementById("f22");
var vselect2 = document.getElementById("f21");

if(tt1==1)
{
vselect2.style.display = "block";
document.getElementById("op1").innerHTML = val1.value;
tt2=val1.value;
vselect1.style.display = "none";
}
else if(tt1==0)
{
vselect2.style.display = "block";
document.getElementById("op1").innerHTML = 1;
tt2=1;
vselect1.style.display = "none";
}
}
/* end of functions related to scrolling dropdown for number of year and to get its value */

/* function having all actions when we click button */
/* functions such as alert message, to calculate and show result, etc */
function mess1() {

var number1= document.getElementById("ipa");
var showpar1 = document.getElementById("dpar");
var numpa= document.getElementById("ipa").value;
var numir= document.getElementById("iir").value;
var numyear;
var fyear;
var fa;
var fint1;
var fint;
/* calculation of interest amount */
numyear=tt2;
fa= numpa * (1 + ((numir/100) * parseInt(numyear)));
fint1= fa - numpa;
/*--------- */

/* for converting the final interest value as integer only if integer and float with 2 decimal point if float */
if (Number.isInteger(fint1))
{
fint= fint1;
}
else 
{
fint= fint1.toFixed(2);
}
/*----------- */

/* to calculate year at which to receive amount */
fyear= parseInt(numyear) + 2020;
/*----------- */

/* to give alert message, to display final result paragraph etc */
if((numpa <= "0") || (numpa == "") )
{
alert("Enter a positive number");
number1.focus();
return false;
}
else
{
showpar1.style.display = "block";
document.getElementById("pa").innerHTML = numpa;
document.getElementById("ir").innerHTML = numir;
document.getElementById("famount").innerHTML = fint;
document.getElementById("vyear").innerHTML = fyear;
number1.focus();
return true;
}
/* -------- */
}
/* -------------- */