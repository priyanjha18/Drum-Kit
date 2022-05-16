//function for making sound;
function keycheck(buttonhtml){
    switch (buttonhtml) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var crash=new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "k":
            var snare=new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
    
        default:
            console.log(buttonhtml);
            break;
    }
}
//for button animation;
function buttonanimation(button){
    document.querySelector("."+button).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+button).classList.remove("pressed");},100)
}

//for making click sounds;
var doc=document.querySelectorAll(".drum").length;
for (var i=0;i<doc;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        var buttonhtml=this.innerHTML;
        keycheck(buttonhtml);
        buttonanimation(buttonhtml)
        
    });

//for making key press sound;
}
document.addEventListener("keydown",function(event){
    keycheck(event.key);
    buttonanimation(event.key);
})
