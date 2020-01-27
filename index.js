var randno1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceimage = "dice" + randno1 + ".png"; //dice1.png

var randomImagesource = "./images/" + randomDiceimage; //images/dice.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);


var randno2 = Math.floor(Math.random() *6) + 1;

var randomDiceimage2 = "dice" + randno2 + ".png";

var randomImagesource2 = "./images/" + randomDiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesource2);


if(randno1>randno2){
    document.querySelector("h1").innerHTML = "🎆 Player 1 wins!";
}else if(randno2>randno1){
    document.querySelector("h1").innerHTML = "🎆 Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "😮 Draw!";
} 