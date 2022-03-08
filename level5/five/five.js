var canvas;
var ctx;
var w = 1500;
var h = 1800;

var circles = [];


document.addEventListener('mousemove', getMousePos, false);
document.addEventListener('mouseenter', getMousePos, false);


setUpCanvas();

animationLoop();



function animationLoop(){                           

    clear();
    drawCircles(circles);
                                                    
    requestAnimationFrame(animationLoop);
}





function getMousePos(evt) {
    
    x = evt.pageX;
    y = evt.pageY;
    
    create_circledata(circles, x,y);

    if(circles.length > 100){
        circles.splice(0,5);
    }
}


function create_circledata(array,x,y){

    for ( var i=0; i<5; i++){

        array.push({
            "x":x,
            "y":y,
            "r": 120+randn(80),
            "a": 0.01,

        })
    
    }

};


function drawCircles(array){
    for(var i=0; i<array.length; i++){
        circle(array[i]);
    }
}



function clear(){
    ctx.clearRect(0,0,w,h);
}



function circle(o){
    ctx.beginPath();
    ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
    ctx.fillStyle = "hsla(0,100%,0%,"+o.a+")";
    ctx.fill();
}

function randn(r){
    var result = 2*rand(r) - r;
    return result
}


function rand(r){
    var result = Math.random()*r;
    return result
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid black";
}

