// varaible declaration
const year = new Date().getFullYear();
const slide = document.getElementById("slide");
const nodeList = document.querySelectorAll("span");

// function declaration
function leftremoveElement(leftvalue) {
    for (let i = 0; i < 2; i++) {
        if (leftvalue <= year - 27) {
            break;
        }
        slide.lastElementChild.remove();
    }
}
function leftaddElement(leftvalue) {
    for (var i = nodeList.length - 1; i < nodeList.length + 1; i++) {
        if (leftvalue <= year - 27) 
        {
            break;
        }
        leftvalue--;
        let spanitem = document.createElement("span");
        let text = document.createTextNode(leftvalue);
        spanitem.appendChild(text);
        spanitem.className="px-2 col-2 col-md-1";
     
        slide.insertBefore(spanitem, slide.firstElementChild);
    }
}
function rightremoveElement(rightvalue) {
    for (var i = 0; i < 2; i++) {
        if (rightvalue >= year) {
            break;
        }
        slide.firstElementChild.remove();
    }
}

function rightaddElement(rightvalue) {
    for (var i = nodeList.length - 1; i < nodeList.length + 1; i++) {
        if (rightvalue >= year) {
            break;
        }
        rightvalue++;
        let spanitem = document.createElement("span");
        let text = document.createTextNode(rightvalue);
        spanitem.appendChild(text);
        spanitem.className="px-2 col-2 col-md-1";
        slide.appendChild(spanitem);
    }
}

document.getElementById("left").onclick = function () {
    let leftvalue = slide.firstElementChild.innerText;
    leftremoveElement(leftvalue);
    leftaddElement(leftvalue);
}

document.getElementById("right").onclick = function () {
    let rightvalue = slide.lastElementChild.innerText;
    rightremoveElement(rightvalue);
    rightaddElement(rightvalue);
}
