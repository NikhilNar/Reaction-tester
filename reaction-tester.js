makeShapeAppear();
var start=new Date().getTime();
var noOfLives=3;
var totalTime=0;
var noOfClicks=0;

function randomPosition(){
    var top=Math.floor(Math.random()*600);
    var left=Math.floor(Math.random()*600);
    document.getElementById("shape").style.top=top+"px";
    document.getElementById("shape").style.left=left+"px";
}
function randomSize(){
    var width=Math.floor(Math.random()*200);
    var height=Math.floor(Math.random()*200);
    document.getElementById("shape").style.width=width+"px";
    document.getElementById("shape").style.height=height+"px";
}
function randomColor(){
    var colorString="0123456789ABCDEF".split("");
    var color="#";
    for(var i=0;i<6;i++)
    {
        color+=colorString[Math.floor(Math.random()*16)];
    }
    if(color=="#FFFFFF"){
        randomColor();
        return;
    }
    document.getElementById("shape").style.backgroundColor=color;
}
function randomShape(){
    var randomShape=Math.random()*100+1;
    document.getElementById("shape").style.borderRadius=randomShape+"%";
}
function displayShape(){
    document.getElementById("lives").innerHTML=noOfLives;
    document.getElementById("clicks").innerHTML=noOfClicks;
    document.getElementById("time-spent").innerHTML=totalTime.toFixed(4);
    randomSize();
    randomShape();
    randomColor();
    randomPosition();
    document.getElementById("shape").style.display="block";
    start=new Date().getTime();
}
function makeShapeAppear(){

    if(noOfLives==0){
        displayScore();
        return;
    }
    setTimeout(displayShape,Math.random()*1500);
}
function displayScore(){
    document.getElementsByTagName("h1").item(0).style.display="none";
    document.getElementsByTagName("h4").item(0).style.display="none";
    document.getElementById("time-taken-paragraph").style.display="none";
    document.getElementById("no-of-lives").style.display="none";
    document.getElementById("no-of-clicks").style.display="none";
    document.getElementById("total-time-spent").style.display="none";
    document.getElementById("shape").style.display="none";
    document.getElementById("game-information").style.display="block";
    document.getElementById("game-over").innerHTML="Game Over";
    document.getElementById("game-over").style.fontSize="100px";
    document.getElementById("total-clicks").innerHTML="Total Clicks ="+noOfClicks;
    document.getElementById("total-time").innerHTML="Total time ="+totalTime.toFixed(4)+"seconds";
}
document.getElementById("shape").onclick=function(){


    document.getElementById("shape").style.display="none";

    var end=new Date().getTime();


    var timetaken=(end-start)/1000;
    if(timetaken>1.5)
    {
        noOfLives--;
    }
    else {
        totalTime += timetaken;
        noOfClicks++;
    }

    document.getElementById("time-taken").innerHTML=timetaken+" seconds";
    makeShapeAppear();

}

