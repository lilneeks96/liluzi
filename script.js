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
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText");
    arr.push(myName.value)
    console.log(arr);
};