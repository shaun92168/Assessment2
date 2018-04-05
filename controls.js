var color = document.getElementById("color"),
    preview = document.getElementById("preview"),
    number = document.getElementById("number"),
    range = document.getElementById("range"),
    inputOne = document.getElementById("inputOne"),
    inputTwo = document.getElementById("inputTwo"),
    inputThree = document.getElementById("inputThree"),
    inputFour = document.getElementById("inputFour"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    plus = document.getElementById("plus"),
    display = document.getElementById("display"),
    random = document.getElementById("random"),
    auto = document.getElementById("auto"),
    stop = document.getElementById("stop"),
    autoRandom,
    newDis = document.getElementsByClassName("newDis");

function createFace(){
    var newDiv = document.createElement("div"),
        newHair = document.createElement("img"),
        newEyes = document.createElement("img"),
        newNose = document.createElement("img"),
        newMouth = document.createElement("img");
    
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = preview.style.backgroundColor;
    newDiv.style.position = "relative";
    newDiv.style.display = "inline-block";
    newDiv.className = "newDis col-xl-1 col-lg-1 col-md-2 col-sm-3"
    
    newHair.src = hair.src;
    newHair.style.width = hair.style.width;
    newHair.style.top = hair.style.top;
    newHair.className = "newItems";
    newEyes.src = eyes.src;
    newEyes.style.width = eyes.style.width;
    newEyes.style.top = eyes.style.top;
    newEyes.className = "newItems";
    newNose.src = nose.src;
    newNose.style.width = nose.style.width;
    newNose.style.top = nose.style.top;
    newNose.className = "newItems";
    newMouth.src = mouth.src;
    newMouth.style.width = mouth.style.width;
    newMouth.style.top = mouth.style.top;
    newMouth.className = "newItems";
    
    newDiv.appendChild(newHair);
    newDiv.appendChild(newEyes);
    newDiv.appendChild(newNose);
    newDiv.appendChild(newMouth);
    
    display.appendChild(newDiv);
}

function randomFace(){
    hair.src = "img/hair" + Math.floor((Math.random() * 3) + 1) + ".png";
    eyes.src = "img/eyes" + Math.floor((Math.random() * 3) + 1) + ".png";
    nose.src = "img/nose" + Math.floor((Math.random() * 3) + 1) + ".png";
    mouth.src = "img/mouth" + Math.floor((Math.random() * 3) + 1) + ".png";
    
    
    hair.style.width = Math.floor((Math.random() * 70) + 0) + "%";
    inputOne.value = parseInt(hair.style.width);
    eyes.style.width = Math.floor((Math.random() * 40) + 0) + "%";
    inputTwo.value = parseInt(eyes.style.width);
    nose.style.width = Math.floor((Math.random() * 30) + 0) + "%";
    inputThree.value = parseInt(nose.style.width);
    mouth.style.width = Math.floor((Math.random() * 35) + 0) + "%";
    inputFour.value = parseInt(mouth.style.width);
    
    preview.style.backgroundColor ="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

function changeType(type){
    if(type == "number"){
        inputOne.type = "number";
        inputTwo.type = "number";
        inputThree.type = "number";
        inputFour.type = "number";
    } else if(type == "range"){
        inputOne.type = "range";
        inputTwo.type = "range";
        inputThree.type = "range";
        inputFour.type = "range";
    }
}

function autoRandomFace(){
    randomFace();
    createFace();
}

color.addEventListener("change", function(){
    preview.style.backgroundColor = color.value;
});

number.addEventListener("click", function(){
    changeType("number");
});

range.addEventListener("click", function(){
    changeType("range");
});

inputOne.addEventListener("change", function(){
    hair.style.width = inputOne.value + "%";
});

inputTwo.addEventListener("change", function(){
    eyes.style.width = inputTwo.value + "%";
});

inputThree.addEventListener("change", function(){
    nose.style.width = inputThree.value + "%";
});

inputFour.addEventListener("change", function(){
    mouth.style.width = inputFour.value + "%";
});

plus.addEventListener("click", function(){
    createFace();
});

random.addEventListener("click", function(){
    randomFace();
});

auto.addEventListener("click", function(){
    autoRandom = setInterval(autoRandomFace, 500);
});

stop.addEventListener("click", function(){
    clearInterval(autoRandom);
})

newDis.addEventListener("click", function(){
    display.removeChild(this);
})