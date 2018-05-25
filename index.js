canvas=document.createElement("canvas");
canvas.width=window.innerWidth-20;
canvas.height=window.innerHeight - 20;
document.body.appendChild(canvas);
pen=canvas.getContext("2d");
document.addEventListener('keydown',keyPush);
//mouse lisenters
document.addEventListener("mousemove",mouseMoveHandler,false);
document.addEventListener("mousedown",mouseClickHandler,false);
// touchscreen lisenters
document.addEventListener("touchmove", move, false);
document.addEventListener("touchstart", shoot, false);
var fps=30
setInterval(update,1000/fps)
  //enemy spawn rate
setInterval(spawn,1000);
spaceship = new Image();
spaceship.src = "data:image/png;base64,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"

//player stat
player_y=canvas.height*.9;
player_x=canvas.width*.5
player_speed=15;
player_dim=50;
lives=99
//enemy stat
enemy_list=[];
enemy_dim=25;
enemy_speed=5;
score=0
//shot stats
shot_list=[]
shot_dim=4;
shot_speed=7;
//randomly spawn emenies
function spawn(){
  enemy_list.push({x:Math.random()*canvas.width,y:0})
}
//update each frame
function update(){
  //black background
  pen.fillStyle="#0e0029";
  pen.fillRect(0,0,canvas.width,canvas.height);
  //draw player 
  /*pen.fillStyle="#ecedaa"
  pen.fillRect(player_x-player_dim/2,player_y-player_dim/2,player_dim,player_dim);*/
  pen.drawImage(spaceship,
  player_x - player_dim / 2,
  player_y - player_dim / 2,
  player_dim,
  player_dim);

  //drawing shots 
  pen.fillStyle="#ef4747"
  for(var s=0; s<shot_list.length;s++){
    shot_list[s].y-=shot_speed;
    pen.fillRect(shot_list[s].x-shot_dim/2,shot_list[s].y-shot_dim/2,shot_dim,shot_dim);
    for(var e=enemy_list.length-1;e>=0;e--){
          // Calculate the distance between the shots and enemies
      var diff_x = Math.abs(enemy_list[e].x - shot_list[s].x);
      var diff_y = Math.abs(enemy_list[e].y - shot_list[s].y);
      var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
      // detects if a shot hits the enemy
      if (dist < (shot_dim + enemy_dim) / 2) {
        enemy_list.splice(e, 1);
        score++}
    }
  }
    //draw enemies
  pen.fillStyle="#b0f0f9"
  for(var e=0;e<enemy_list.length;e++){
    // Calculate the distance between the shots and enemies

  enemy_list[e].y += enemy_speed;
  pen.fillRect(
      enemy_list[e].x - enemy_dim / 2,
      enemy_list[e].y - enemy_dim / 2,
      enemy_dim,
      enemy_dim
    );
  //player distance
  var diff_x=Math.abs(enemy_list[e].x-player_x);
  var diff_y=Math.abs(enemy_list[e].y-player_y);
  var dist=Math.sqrt(diff_x*diff_x+diff_y*diff_y);
  //emeny hits hero
  if(dist<(player_dim+enemy_dim)/2 || player_x<player_dim/2 ||player_y<player_dim/2){
    //clear stats and reset
    shot_list=[];
    enemy_list=[];
    player_y=canvas.height*.9;
    player_x=canvas.width*.5
    lives--;
    break;
  }
  }
  if(player_x>canvas.width-player_dim/2 ||player_y>canvas.height-player_dim/2){
    player_y=canvas.height-player_dim/2;
    player_x=canvas.width-player_dim/2;
  }
  pen.fillStyle="white";
  pen.font=0.12*canvas.width+"px Times New Roman";
  pen.fillText("Lives: " + (lives).toString(), canvas.width*.5,80);
  pen.fillText("Score: "+(score).toString(), canvas.width*.5,160);
  if(lives===0){
    lives=5
    alert("GAME OVER\n Score: "+score.toString())
    score=0
  }
}


function keyPush(happpenings){
switch(happpenings.keyCode){
  case 32: //space bar
    shot_list.push({ x: player_x, y: player_y });
    break;
  case 37: //left arrow
    player_x-=player_speed;
    break;
  case 38: //up arrow
    player_y-=player_speed;
    break;
  case 39://right arrow
    player_x+=player_speed;
    break;
  case 40://down arrow
    player_y+=player_speed;
    break;
}
}
function mouseMoveHandler(e){
  player_x=e.clientX
}
function mouseClickHandler(e){
  if(e.button==0){
    shot_list.push({x:player_x,y:player_y});
  }
}
function move(e){
  //checks touchscreen
  if(e.touches){
  player_x=e.touches[0].pageX - canvas.offsetLeft-player_dim/2}
} 
function shoot(e){
  shot_list.push({x:player_x,y:player_y});
}
