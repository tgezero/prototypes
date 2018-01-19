var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var g = 0.1; //accelleration due to gravity
var f = 0.1; //friction
var ball = {
    radius:20,
    color:"rgba(255,255,255,0.4)",
    x:50,
    y:50,
    vx:2,
    vy:0,
    draw:function(){
        with (context){
            clearRect(0, 0, canvas.width, canvas.height);
            fillStyle = this.color;
            beginPath();
            arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
            closePath();
            fill();
       };        
    }
};

var init = function(){
    setInterval(step, 1000/60); // 60 fps
}
var step = function(){
    ball.vy += g; //gravity increases the vertical speed
    ball.x += ball.vx; // horizontal speed increases horizontal position
    ball.y += ball.vy; // vertical speed increases vertical position
    if(ball.y > canvas.height - ball.radius){
        //if ball hits the ground
        ball.y = canvas.height - ball.radius // reposition ball to the ground
        ball.vy *= -0.8 //Then reverse and reduce it's vertical speed   
        if(ball.vx > 0){
            ball.vx -= f; //friction reduces horiontal speed
        } 
    }

    if(ball.x > canvas.width + ball.radius){
        //if ball goes beyond the canvas wall
        ball.x = -ball.radius; // back to beginning
    }
    ball.draw()
}
window.onload = init;
