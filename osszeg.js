function szamolj1() {
alert("fuggvenyben vagyok");
};

function szamolj() {
    var a = Number(document.getElementById("szam1").value);
    var b = Number(document.getElementById("szam2").value);
    var c = a+b;
    document.getElementById("eredmeny").value=c;
    };