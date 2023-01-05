// dice 1 //
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImg = "images/" + "dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImg);

// dice 2 //

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImg2 = "images/" + "dice" + randomNumber2 + ".png";

var Img2 = document.querySelectorAll("img")[1];

Img2.setAttribute("src", randomImg2);


// H1 change on refresh depending on what  number is bigger // 

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "player 1 wins !!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "player 2 wins !!";
}
else{
    document.querySelector("h1").textContent = "Its a DRAW !";
}



