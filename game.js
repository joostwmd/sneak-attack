class Game {


    setup() {
      this.backGround = new Background()
      this.player = new Player(0, 0)
      this.viking = new Viking
      this.viking.randomizer()
      this.witch = new Witch
      this.witch.randomizer()
      
      

    }
  
    preLoad() {
      this.charImages = [
        this.imgCharAttackLeft = loadImage('assets/char-attack-left.png'),
        this.imgCharAttackRight = loadImage('assets/char-attack-right.png'),
        this.imgCharDead = loadImage('assets/char-dead.png'),
        this.imgCharDown = loadImage('assets/char-down.png'),
        this.imgCharLeft = loadImage('assets/char-left.png'),
        this.imgCharRight = loadImage('assets/char-right.png'),
        this.imgCharUp = loadImage('assets/char-up.png'),
    
      ]

       this.witchImages = [
        this.imgWitchLeft = loadImage('assets/witch-left.png'),
        this.imgWitchRight = loadImage('assets/witch-right.png'),
        this.imgWitchDead = loadImage('assets/witch-dead.png')
       ]

       this.vikingImages = [
         this.imgVikingLeft = loadImage('assets/viking-left.png'),
         this.imgVikingRight = loadImage('assets/viking-right.png'),
         this.imgVikingDead = loadImage('assets/vinking-dead.png')
       ]
  
      this.backGroundimg = loadImage('assets/background.png')
      this.loosingimg = loadImage('assets/loosing-screen.gif')
      this.winningimg = loadImage('assets/winning-screen.gif')
  
      
    }
  
    draw() {
      
      this.player.draw()
      this.backGround.draw()
      this.witch.drawWitch()
      this.viking.drawViking()

      if (this.viking.defeatViking(this.player)) {
        this.player.score += 10
        document.querySelector(".score").innerText = 'Points:' + game.player.score
        this.viking.randomizer()
        
    
      }

      if (this.witch.defeatWitch(this.player)) {
        this.player.score += 15
        document.querySelector(".score").innerText = 'Points:' + game.player.score
        this.witch.randomizer()
        
      }
      
  
     if (this.viking.killedChar(this.player)) {
        this.player.health -= 1
        document.querySelector(".health").innerText = 'Health:' + game.player.health
        this.player.dead()
     }
     
     if (this.witch.killedChar(this.player)) {
        this.player.health -= 1
        document.querySelector(".health").innerText = 'Health:' + game.player.health
        this.player.dead()
     }

     if (this.player.health === 0){
       noLoop()
       clear()
       image(game.loosingimg,0, 0, WIDTH, HEIGHT) 
     }

  
    }

    

    
  
  
  }