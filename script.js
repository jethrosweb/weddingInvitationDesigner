// On-load
window.addEventListener("load", function() {
    firstNameInp.value = "";
    secondNameInp.value = "";
    lastNameInp.value = "";
    dateInp.value = "";
    locationInp.value = "";
    simpleBtn.style.backgroundColor = "rgb(135,32,33)";
    simpleBtn.style.color = "white";
});

// Template button declarations
const simpleBtn = document.getElementById("simple-btn");
const abstractBtn = document.getElementById("abstract-btn");
const texturedBtn = document.getElementById("textured-btn");
const templateBackground = document.getElementById("template-grid-container");

// Input & Output declarations
const initialOutElem = document.getElementById("initial-output");
const firstNameInp = document.getElementById("first-name-input");
const secondNameInp = document.getElementById("second-name-input");
const namesOutElem = document.getElementById("names-output");
const lastNameInp = document.getElementById("last-name-input");
const lastNameOut = document.getElementById("last-name-output");
const dateInp = document.getElementById("date-input");
const dateOut = document.getElementById("date-output");
const locationInp = document.getElementById("location-input");
const locationOut = document.getElementById("location-output");

// Simple button event & function
simpleBtn.addEventListener("click", function() {
    templateBackground.style.backgroundImage = "url('./media/style-1.png')";
    simpleTextFormat();

    simpleBtn.style.backgroundColor = "rgb(135,32,33)";
    simpleBtn.style.color = "white";
    abstractBtn.style.backgroundColor = "transparent";
    abstractBtn.style.color = "black";
    texturedBtn.style.backgroundColor = "transparent";
    texturedBtn.style.color = "black";
});

function simpleTextFormat() {
    const changeToPhosphate = [initialOutElem, namesOutElem, lastNameOut];
    const changeToRockwell = [dateOut, locationOut];
    const allSimpleText = changeToPhosphate.concat(changeToRockwell);

    for (let i = 0; i < changeToPhosphate.length; i++) {
        changeToPhosphate[i].style.fontFamily = "Phosphate";
    };

    for (let i = 0; i < changeToRockwell.length; i++) {
        changeToRockwell[i].style.fontFamily = "Rockwell";
    };

    for (let i = 0; i < allSimpleText.length; i++) {
        allSimpleText[i].style.color = "black";
    };
};

// Abstract button event & function
abstractBtn.addEventListener("click", function() {
    templateBackground.style.backgroundImage = "url('./media/style-2.png')";
    abstractTextFormat();

    simpleBtn.style.backgroundColor = "transparent";
    simpleBtn.style.color = "black";
    abstractBtn.style.backgroundColor = "rgb(0,8,96)";
    abstractBtn.style.color = "white";
    texturedBtn.style.backgroundColor = "transparent";
    texturedBtn.style.color = "black";
});

function abstractTextFormat() {
    const allAbstractText = [initialOutElem, namesOutElem, lastNameOut, dateOut, locationOut]; 

    for (let i = 0; i < allAbstractText.length; i++) {
        allAbstractText[i].style.fontFamily = "STSong";
    };

    for (let i = 0; i < allAbstractText.length; i++) {
        allAbstractText[i].style.color = "rgb(98,83,21)";
    };
};

// Textured button event & function
texturedBtn.addEventListener("click", function() {
    templateBackground.style.backgroundImage = "url('./media/style-3.png')";
    texturedTextFormat();

    simpleBtn.style.backgroundColor = "transparent";
    simpleBtn.style.color = "black";
    abstractBtn.style.backgroundColor = "transparent";
    abstractBtn.style.color = "black";
    texturedBtn.style.backgroundColor = "rgb(16,72,56)";
    texturedBtn.style.color = "white";
});

function texturedTextFormat() {
    const allTexturedText = [initialOutElem, namesOutElem, lastNameOut, dateOut, locationOut]; 

    for (let i = 0; i < allTexturedText.length; i++) {
        allTexturedText[i].style.fontFamily = "Herculanum";
    };

    for (let i = 0; i < allTexturedText.length; i++) {
        allTexturedText[i].style.color = "black";
    };
};

// Names & Intials events & function
firstNameInp.addEventListener("keyup", function() {
    namesInitialOutput();

    let firstName = firstNameInp.value;

    if (firstName.length === 10) {
        firstNameInp.style.borderColor = "red";
    } else {
        firstNameInp.style.borderColor = "black";
    };
});

secondNameInp.addEventListener("keyup", function() {
    namesInitialOutput();

    let secondName = secondNameInp.value;
   
    if (secondName.length === 10) {
        secondNameInp.style.borderColor = "red";
    } else {
        secondNameInp.style.borderColor = "black";
    };
});

function namesInitialOutput() {
    let firstName = firstNameInp.value ? firstNameInp.value: " ";
    let secondName = secondNameInp.value ? secondNameInp.value: " ";
    let ampersand = firstNameInp.value[0] || secondNameInp.value[0] ? "&" : " ";

    initialOutElem.innerHTML = `${firstName[0].toUpperCase()} ${ampersand} ${secondName[0].toUpperCase()}`;

    namesOutElem.innerHTML = `${firstName.toUpperCase()} ${ampersand} ${secondName.toUpperCase()}`;
};

// Last name event
lastNameInp.addEventListener("keyup", function() {
    let lastName = lastNameInp.value;
    lastNameOut.innerHTML = lastName.toUpperCase();

    if (lastName.length === 10) {
        lastNameInp.style.borderColor = "red";
    } else {
        lastNameInp.style.borderColor = "black";
    };
});

// Date event
dateInp.addEventListener("change", function() {
    let eventDate = new Date(dateInp.value);
    let day = eventDate.getDate() ? eventDate.getDate(): " ";
    let month = eventDate.getMonth() ? eventDate.getMonth() + 1: " ";
    let year = eventDate.getFullYear() ? eventDate.getFullYear(): " ";
    let slash = eventDate.getDate() || eventDate.getMonth() || eventDate.getFullYear() ? "/" : " "; 

    dateOut.innerHTML = `${day} ${slash} ${month} ${slash} ${year}`;
});

// Location event
locationInp.addEventListener("keyup", function() {
    let location = locationInp.value;
    locationOut.innerHTML = location.toUpperCase();

    if (location.length === 30) {
        locationInp.style.borderColor = "red";
    } else {
        locationInp.style.borderColor = "black";
    }
});





