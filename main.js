x=0;
y=0;
function preload(){}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(560,150);
    background("pink");

    video=createCapture(VIDEO);
    video.size(300,300);

    poseNet=ml5.poseNet(video, modalLoaded);
    //poseNet.on('pose',gotPoses);
}
function modalLoaded(){
    console.log("Modal is loaded...")
}