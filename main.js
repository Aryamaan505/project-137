 var  video="";
var status="";
objects=[];

function  preload() {
    video=createVideo('video.mp4');
}

function  setup() {
    canvas=createCanvas(480,400);
    canvas.center();
    video.hide();
}

function  start() {
    objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function ModelLoaded(){
    console.log("Model Loaded! 🏏");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}

function  draw() {
    image(video,0,0,480,400);
    if (status!=" ") {
        objectDetector.detect(video,gotResult);

            for ( h = 0; h < objects.length; h++) {
                document.getElementById("status").innerHTML="Status: Objects Detected";
                document.getElementById("no_of_objects").innerHTML="Number of objects detected are:"+ objects.length;
                 fill("#FA8072");
                percent=floor(objects[h].confidence*100);
                text(object[h].length+" "+ percent+"%",objects[h].x+15,objects[h].y+15);
                noFill();
                stroke("FA8072");
                rect(objects[h].x,objects[h].y,objects[h].width,objects[h].height);
            }
    }


}

function  gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}