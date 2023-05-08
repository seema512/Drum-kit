/*document.querySelector("button").addEventListener("click", eventTrigger);// notice how i haven't included parentheses for the function eventTrigger. if any doubt regarding this, see lec 162.
function eventTrigger(){
    alert("i got clicked");
}*/


// the above code, function can be replaced and written as an anonymous function:

for(var i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerHTML = this.innerHTML; //"this" keyword gives the identity of the button that triggers the event
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
    
});
}

document.addEventListener("keydown", function(KeyboardEvent){ //here, we are calling the eventlistener to the entire
                                                              //document instead of just buttons as above.
    makeSound(KeyboardEvent.key);   //key is the property of keyboardEvent which gives the value of the key pressed.
                                    //keyboardEvent is pressing the key.
    buttonAnimation(KeyboardEvent.key);
})

function makeSound(key){
    switch(key){
        case "w": 
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        default: console.log(buttoninnerHTML);

    }
}
function buttonAnimation(currentKey){
   var activebutton = document.querySelector("."+currentKey);
   activebutton.classList.add("pressed");
   setTimeout(function(){
    activebutton.classList.remove("pressed");
   }, 100);
}






  //see lec 165, how to play sounds on a website for more info.
