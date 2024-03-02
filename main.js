var song1= ""
var song2= ""
var leftWristX= 0
var leftWristY= 0
var rightWristX= 0
var rightWristY= 0

function preload() {
    song1= loadSong("Can't Catch Me Now.mp3")
    song2= loadSong("My Heart Will Go On.mp3")
}

function setup() {
    canvas= createCanvas(550,400)
    canvas.center()
    webcam= createCapture(VIDEO)
    webcam.hide()
    poseNet= ml5.poseNet(webcam, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results)
        rightWristX= results[0].pose.rightWrist.x
        rightWristY= results[0].pose.rightWrist.y
        leftWristX= results[0].pose.leftWrist.x
        leftWristY= results[0].pose.leftWrist.y
        console.log("Right and left wrist x and y are " + rightWristX + ", " + rightWristY + ", " + leftWristX + ", " + leftWristY)
    }
}

function modelLoaded() {
    console.log("model loaded")
}

function draw() {
    image(webcam, 0, 0, 550, 400)
}