/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

var hairImg = 1,
    eyesImg = 1,
    noseImg = 1,
    mouthImg = 1;

hair.addEventListener("click", function(){
    if(hairImg == 3){
        hairImg = 1;
    }else{
        hairImg++;
    }
    hair.src = "img/hair" + hairImg + ".png";
});

eyes.addEventListener("click", function(){
    if(eyesImg == 3){
        eyesImg = 1;
    }else{
        eyesImg++;
    }
    eyes.src = "img/eyes" + eyesImg + ".png";
});
nose.addEventListener("click", function(){
    if(noseImg == 3){
        noseImg = 1;
    }else{
        noseImg++;
    }
    nose.src = "img/nose" + noseImg + ".png";
});

mouth.addEventListener("click", function(){
    if(mouthImg == 3){
        mouthImg = 1;
    }else{
        mouthImg++;
    }
    mouth.src = "img/mouth" + mouthImg + ".png";
});