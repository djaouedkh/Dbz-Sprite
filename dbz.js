// Canvas and context 2d
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");

// widht and height canvas
canvas.width = 800;
canvas.height = 300; 

// Loads the images, cleans up the canvas, and draws the base image of trunks
document.addEventListener('DOMContentLoaded', function () {
    var imgTrunks = document.querySelector('#imgTrunks');
    ctx.clearRect(x, y, canvas.width, canvas.height);
    ctx.drawImage(imgTrunks,0,0,trunksWidthEpee,trunksHeightEpee,x,y,trunksWidthEpee,trunksHeightEpee);
});

// Width height of the block
var trunksWidthEpee = 190; 
var trunksHeightEpee = 174; 

// Starting block
var curFrame = 0; 

// Number of blocks
var frameCount = 6; 

// Position of the sprite in the canvas
var x=0;
var y=0; 


var flag;
var animation;
var button = document.querySelector('#button');

// Starts animation and blocks the button
button.addEventListener('click', function(){   
    flag=0;
    animation = setInterval(drawTrunks,170);
    button.disabled = true;
})

// Delete the image so that drawImage() can draw the next one and translate from block to block 6 times
// Go back to the base image, stop the animation and unlock the button
// CurFrame =1 , 2,3,4,5,6,0... because 6 modulo 6 = 1 so this creates a loop.
function updateFrame(){
    if (flag < 6) {
        curFrame = ++curFrame % frameCount; 
        srcX = curFrame * trunksWidthEpee;
        ctx.clearRect(x, y, trunksWidthEpee, trunksHeightEpee);
        flag++; 
    }
    else{
        srcX = 0;
        clearInterval(animation);
        button.disabled = false;
    }
}

// Calling the Translation and creating the sprite
// drawImage(Image, Sx position x in all image, Sy position y in all image, sWidth, sHeight, dX position x where image is in canvas, dY position y where image is in canvas , dWidth image drawing, dHeight image drawing)
function drawTrunks(){
    updateFrame();
    ctx.drawImage(imgTrunks,srcX,0,trunksWidthEpee,trunksHeightEpee,x,y,trunksWidthEpee,trunksHeightEpee);
}
