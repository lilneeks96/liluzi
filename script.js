//EASY WAY
//var myName = window.prompt("What's your name?");
//console.log("Hello",myName);
let addArray= [];

//HARD WAY
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText");
    addArray.push(myName.value)
    console.log(addArray);
};