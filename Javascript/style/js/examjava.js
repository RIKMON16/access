function newStyle() {
    let newColor = '';
    let newFont = '';
    let x = Math.floor(Math.random()*7);
    switch (x) {
        case 0:
            newColor = 'red';
            newFont = 'Times New Roman';
            break;
        case 1:
            newColor = 'yellow';
            newFont = 'Florence, cursive';
            break;
        case 2:
            newColor = 'orange';
            newFont = 'Verdana';
            break;
        case 3:
            newColor = 'blue';
            newFont = 'Tahoma';
            break;
        case 4:
            newColor = 'burgundy';
            newFont = 'Impact';
            break;
    }
    var elem = document.getElementById('your');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont;
}

function hello(){
    alert('Hello World');
}

let d = new Date();
alert("Today's date is " + d);

let backElement = document.querySelector('body');
backElement.style.backgroundColor = 'white';
document.querySelector('body').style.fontFamily = 'Roboto';

let newDestination = document.createElement('li');
newDestination.id = 'oaxaca';
newDestination.innerHTML = 'Oaxaca, Mexico';
document.getElementById('more-destinations').appendChild(newDestination);

const parent = document.querySelector("#more-destinations");
const child = document.querySelector("#oaxaca");
parent.removeChild(child);

let element = document.querySelector("button");
function turnButtonRed (){
    element.style.backgroundColor = "red";
    element.style.color = "white";
    element.innerHTML = "Red Button"; 
}
element.onclick = turnButtonRed;

//let b = new Date();
//document.body.innerHTML = "<h1> Todays date is " + b + "</h1>"
