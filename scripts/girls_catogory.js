var image=["./gp/gslide1.jpg",
"./gp/gslide2.jpg",
"./gp/gslide3.jpg",
"./gp/gslide4.jpg",
"./gp/gslide5.jpg"];

var i=0;
function slides(){
document.getElementById("slider").src=image[i];
if(i<image.length-1){
i++;
}else{
i=0;
}
}setInterval(slides,1000)