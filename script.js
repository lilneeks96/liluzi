// detect enter key to submit
var input = document.getElementById("myText");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myButton").click();
    }
});

let arr= [];


// taking user input and pushing it into array
// challenges below! now find a way to take user input and remove from array 
// also show array on current page? than on another part of the website?
// make multiple buttons with different ways to sort the array
// sort array so most characters are left and least characters are right

document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText");
    arr.push(myName.value)
    console.log(arr);
};