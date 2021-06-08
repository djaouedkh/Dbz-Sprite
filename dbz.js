// Canvas et son context 2d
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");

// Largeur, hauteur du canvas
canvas.width = 800;
canvas.height = 300; 

// Charge les images , nettoie le canvas, et dessine l'image de base de trunks
document.addEventListener('DOMContentLoaded', function () {
    var imgTrunks = document.querySelector('#imgTrunks');
    ctx.clearRect(x, y, canvas.width, canvas.height);
    ctx.drawImage(imgTrunks,0,0,trunksWidthEpee,trunksHeightEpee,x,y,trunksWidthEpee,trunksHeightEpee);
});

// Largeur hauteur du bloc
var trunksWidthEpee = 190; 
var trunksHeightEpee = 174; 

// A quel bloc commence l animation
var curFrame = 0; 

// Nombre de bloc
var frameCount = 6; 

// Position du sprite dans le canvas
var x=0;
var y=0; 


var flag;
var animation;
var button = document.querySelector('#button');

// Lance animation et bloque le bouton qui l'a crée
button.addEventListener('click', function(){   
    flag=0;
    animation = setInterval(drawTrunks,170);
    button.disabled = true;
})

// Supprime l'image pour que drawImage() puisse dessiner la suivante et translate de bloc en bloc 6 fois
// Reviens a l'image de base, stop l'animation et débloque le boutton
// CurFrame =1 , 2,3,4,5,6,0... car 6 modulo de 6 = 1 donc cela crée une boucle.
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

// Appel de la Translation et creation du sprite
// drawImage(Image, Sx position x dans toute l'image, Sy position y dans toute l'image, sLargeur, sHauteur, dX position x où l'image doit etre dans le canvas, dY position y où l'image doit etre dans le canvas , dLargeur de l'image dessinee, dHauteur de l'image dessinée)
function drawTrunks(){
    updateFrame();
    ctx.drawImage(imgTrunks,srcX,0,trunksWidthEpee,trunksHeightEpee,x,y,trunksWidthEpee,trunksHeightEpee);
}
