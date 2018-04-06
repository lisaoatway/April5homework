function myFunction1() {
    alert(document.getElementsByTagName("p").length);
}

function myFunction2() {
   var x= document.getElementById("inner");
    var y = x.getElementsByTagName("p").length;
   alert("there are "+ y+ " inner elements");
}

function myFunction3() {
   var z= document.getElementById("end");
    var w = z.getElementsByTagName("p").length;
    alert("there are "+ w+ " end elements")
}