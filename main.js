const game = new Game();

function preload() {
  game.preLoad();
}


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup()

  
  
}


timerArr = []

function draw() {
  clear();
  game.draw();
  game.player.draw(); 
  
  if (frameCount % 60 === 0 && timerArr.length < 149){
    timerArr.push("1")
    let timeLeft = 149 - timerArr.length
    console.log(timeLeft)
  } else if (timerArr.length === 149 && game.player.score > 1000){
    noLoop()
    clear()
    image(game.winningimg,0, 0, WIDTH, HEIGHT)
    

  } else if (timerArr.length === 120 && game.player.score < 1000){
    noLoop()
    clear()
    image(game.loosingimg,0, 0, WIDTH, HEIGHT)
  }
}







function keyPressed(event) {

event.preventDefault()


  if (keyCode === 39) {

    game.player.moveRight()

  }
  if (keyCode === 37) {

    game.player.moveLeft()
  }
  if (keyCode === 38) {

    game.player.moveUp()
  }
  if (keyCode === 40) {

    game.player.moveDown()
  }

  if (keyCode === 82) {
    game.player.attackRight()
  
  }

  if (keyCode === 76) {
    game.player.attackLeft()
  }

}

