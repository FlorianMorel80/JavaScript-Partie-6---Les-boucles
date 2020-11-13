let paragraph = document.querySelectorAll('p');

let bold = document.querySelector('#boldButton');
bold.addEventListener('click', textBold);

let color = document.querySelector('#colorButton');
color.addEventListener('click', textColor);

let size = document.querySelector('#upSizeButton');
size.addEventListener('click', textSize);


function textBold() {
    if (paragraph.style.fontWeight === "bold") {
        cancel();
    } else {
        paragraph.style.fontWeight = "bold"
    }
}


function textColor() {
    paragraphe.style.color = "blue";
}

function textSize() {
    paragraphe.style.zoom = 1.5;
}

function cancel() {
    paragraph.style.color = "black";
    paragraph.style.fontWeight = "normal";
    paragraph.style.fontStyle = "normal";
}

// function textBold() {
//     paragraphe.style.fontWeight = "bold";
// }