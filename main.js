song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on("pose", gotPoses);
}

function modalLoaded() {
    console.log("Posenet is initialized");
}

function preload() {
    song1 = loadSound("catch-it-117676.mp3")
    song2 = loadSound("life-of-a-wandering-wizard-15549.mp3")
}