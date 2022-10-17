
var count;
var colors = ["red","blue","green","yellow"];
var sounds = ["sounds/red.mp3","sounds/blue.mp3","sounds/green.mp3","sounds/yellow.mp3"];
var sequence = [];
var randomNumber;
var userSequence = [];
var flag =1;
var level;
$(document).on("keypress",function(){
    
    $("h1").text("SIMON GAME");
    if(flag == 1){
        level=1;
        flag =0;
        count = 0;
        start();
    }
    
});
function check(){
    // alert("sequence:"+sequence);
    // alert("userSequence:"+userSequence);
    if(JSON.stringify(sequence) == JSON.stringify(userSequence)){
        // alert("pass");
        userSequence = [];
        play();
        count=0;
        level++;
        setTimeout(() => {
            $("h3").text("Level:"+level);
        }, 500);
        
    }else{
        setTimeout(() => {
            gameOver();
        }, 1000);
         
    }
}
function effect(n){
    $("#"+colors[n]).fadeToggle("fast");
    $("#"+colors[n]).fadeToggle("fast");
    new Audio(sounds[n]).play();

}
function play(){
    randomNumber = Math.floor(Math.random()*4);
    setTimeout(function(){
        effect(randomNumber);
    },1000);
    
    sequence.push(colors[randomNumber]);
}
function start(){
    $("h2").hide();
    $("h1").after($("<h3></h3>").text("Level: "+level));
    sequence = [];
    userSequence = [];
    play();    
}
$(".play_button").on("click",function(){
    if(flag == 0){
        var choice = $(this).attr("id");
    userSequence.push(choice);
    effect(colors.indexOf(choice));
    // setTimeout(function(){
    //     effect(colors.indexOf(choice));
    // },2000);
    count++;
    if(count == sequence.length){
        check();
    }
    }
    
    
});
function gameOver(){
    flag = 1;
    new Audio("sounds/wrong.mp3").play();
    $("h1").text("GAME OVER");
    $("h2").show();
    $("h3").hide();
    
}



