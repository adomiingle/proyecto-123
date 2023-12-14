narizX = 0;
narizY = 0;

function preload(){
    gorro_vaquero = loadImage('https://i.postimg.cc/sDpKytLw/png-transparent-brown-cowboy-hat-graphic-design-hat-cowboy-hat.png');
    gorro_mexicano = loadImage('https://i.postimg.cc/QMd5WPdg/d511ypz-50fb8ce9-2985-4575-8a3a-b69a37462275.png');
    gorro_monopoly = loadImage('https://i.postimg.cc/y8sjNL4B/png-transparent-top-hat-hat-furniture-hat-top-hat.png');
    bigote = loadImage('https://i.postimg.cc/FRxNhXpJ/mustache-png.png');
}

function setup(){
    canvas = createCanvas(353, 353);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 350, 350);
    fill(255,0,0);
    stroke(255,0,0);
    image(bigote, narizX-25, narizY-10, 60, 60);
}

function take_snapshot(){
    save('FiltroImagen.png');
}

function modelLoaded(){
    console.log('PoseNet esta inicializando');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        narizX = results[0].pose.nose.x
        narizY = results[0].pose.nose.y
        
        console.log("nariz x = " + narizX);
        console.log("nariz y = " + narizY);
    }
}