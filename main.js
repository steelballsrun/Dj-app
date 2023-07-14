song ="";
leftWristX=0;
leftWristY= 0;
rightWristX=0;
rightWristY= 0;
function preload()
{
song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js");
}
function setup() {
canvas = createCanvas(600,500);
canvas.center();
    
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
 }

 function gotPoses(results)
{
    if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    rightWristY=results[0].pose.rightWrist.y;
    }
}
function draw(){
    image(video,0,0,600,500);
    }