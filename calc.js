var form=document.getElementById('form');
var text=document.getElementById("text");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var zero=document.getElementById("zero");
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var mul=document.getElementById("mul");
var divid=document.getElementById("divide");
var equal=document.getElementById("equal");
var clear=document.getElementById("clear");
var dot=document.getElementById("dot");
var del=document.getElementById("del");
one.addEventListener("click",function(){
     form.text.value+=1;     

});
two.addEventListener("click",function(){
     form.text.value+=2;
});
three.addEventListener("click",function(){
     form.text.value+=3;
});
four.addEventListener("click",function(){
     form.text.value+=4;
});
five.addEventListener("click",function(){
     form.text.value+=5;
});
six.addEventListener("click",function(){
     form.text.value+=6;
});
seven.addEventListener("click",function(){
     form.text.value+=7;
});
eight.addEventListener("click",function(){
     form.text.value+=8;
});
nine.addEventListener("click",function(){
     form.text.value+=9;
});
zero.addEventListener("click",function(){
     form.text.value+=0;
});
plus.addEventListener("click",function(){
     form.text.value+='+';
});
minus.addEventListener("click",function(){
     form.text.value+='-';
});
mul.addEventListener("click",function(){
     form.text.value+='*';
});
divid.addEventListener("click",function(){
     form.text.value+='/';
});
equal.addEventListener("click",function(){
     form.text.value=eval(form.text.value)
});
clear.addEventListener("click",function(){
     form.text.value='';
});
dot.addEventListener("click",function(){
     form.text.value+='.';
});
del.addEventListener("click",function(){
     var a=form.text.value;
     form.text.value=a.substr(0,a.length-1)
})



