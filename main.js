left_WristX=0;
right_Wrist_X=0;
difference=0;
function setup(){
camera=createCapture(VIDEO);
camera.size(550,550);
canvas=createCanvas(500,450);
canvas.position(600,250);
library=ml5.poseNet(camera,modelloaded);
library.on("pose",hi);

}
function draw(){
background("white");
}
function modelloaded(){
    console.log("Model is Loaded");
}
function hi(results){
if(results){
    console.log(results);
left_Wrist=results[0].pose.leftWrist.x;
right_WristX=results[0].pose.rightWrist.x;
difference=Math.floor(left_WristX-right_WristX);
text("Atharv",100,400);
textSize(difference);
console.log("differnce");
}
}
