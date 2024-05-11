function getRandomImg() {

    var i = (Math.floor(Math.random() * Math.floor(6)))+1;
    var img = document.getElementById("imgShown");
    img.src = "assets/"+i+".jpg";

}

function isGa() {

    var imgFile = document.getElementById("imgShown").src.slice(-5);
    var result = document.getElementById("result");
    if (imgFile == "5.jpg") {
        result.innerHTML = "Correcto! QueGuapa :* =]";
        result.style.color = "cyan";
    }
    else {
        result.innerHTML = "No.";
        result.style.color = "black";
    }

}

function isNotGa() {

    var imgFile = document.getElementById("imgShown").src.slice(-5);
    var result = document.getElementById("result");
    if (imgFile != "5.jpg") {
        result.innerHTML = "Sip. Esa no es >=]";
        result.style.color = "black";
    }
    else {
        result.innerHTML = "COMO TE VAS A EQUIVOCAR ASI >=[[[.";
        result.style.color = "black";
    }

}