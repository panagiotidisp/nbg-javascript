function turnOnTheLight() {
    document.getElementById('lamp').src = 'images/2.jpg'
}

function turnOffTheLight() {
    document.getElementById('lamp').src = 'images/1.jpg'
}


function changeImageIn() {
    document.getElementById("earth").src = "images/4.jpg";
}


function changeImageOut() {
    document.getElementById("earth").src = "images/3.png";
}


let img = document.querySelector("#earth");
img.addEventListener("mouseenter", changeImageIn);
img.addEventListener("mouseleave", changeImageOut);