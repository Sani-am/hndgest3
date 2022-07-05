https://teachablemachine.withgoogle.com/models/ktaKLCAbk/


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


Webcam.attach('#Camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="Picture" src="'+data_uri+'"/>';
    });
}


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ktaKLCAbk/model.json',modelloaded);

function modelloaded(){
    console.log('Model Is Loaded!');
}

function check(){
    img=document.getElementById("Picture");
    classifier.classify(img,gotResults);

}

function gotResults(error,results){
if(error){
    console.error(error);
}
else {
console.log(results);
document.getElementById("Result").innerHTML = results[0].label;
gesture= results[0].label;
toSpeak= "";

if (gesture== "Amazing"){
    toSpeak="This is looking amazing";
    document.getElementById("Picture").innerHTML = "&#128076;";
}
if (gesture== "Victory"){
    toSpeak="That was a marvelous victory";
    document.getElementById("Picture").innerHTML = "&#128077;";
}
if (gesture== "Best"){
    toSpeak="All the Best";
    document.getElementById("Picture").innerHTML = "&#9996;";
}
}
}