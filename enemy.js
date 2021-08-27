
class Witch {
   
    constructor()  {
        this.x   
        this.y 
        this.direction
        this.image 
        this.openX
        this.openY
    }

    randomizer() {
        
        let coinFlip = (Math.random() * 10)
        
        if (coinFlip < 5){
            this.direction = 0 // turnedLeft
            this.x = 100
            this.openX = 300
        } else {
            this.direction = 1 // turnedRight
            this.x = 300
            this.openX = 300
            
        }
        this.image = game.witchImages[this.direction]
        const yArr = [100, 200, 300, 400, 500]
        let y = Math.floor(Math.random() * 5)
        this.y = yArr[y]
        this.openY = this.y
        console.log(this.openX)
        console.log(this.openY)
        

    }
   
    killedChar(player) {
        let witchX = this.x
        let witchY = this.y
        let witchDirection = this.direction
        let witchAttackRight1 = witchX + 100
        let witchAttackRight2 = witchX + 200
        let witchAttackLeft1 = witchX + 100
        let witchAttackLeft2 = witchX + 200
    
        let playerX = player.row
        let playerY = player.col

        if ( witchDirection === 0){
            if (playerX === witchAttackLeft1 && playerY === witchY){
                return true
            } else if (playerX === witchAttackLeft2 && playerY === witchY){
                return true 
            } else if (playerX === witchX && playerY === witchY){  
                return true 
            } else {
                return false
            }
        }

        if ( witchDirection === 1){
            if (playerX === witchAttackRight1 && playerY === witchY){ 
                return true
            } else if (playerX === witchAttackRight2 && playerY === witchY){
                return true 
            } else if (playerX === witchX && playerY === witchY){
                return true 
            }
    }

  }
  

    defeatWitch(){

    let witchX = this.openX
    let witchY = this.openY
    let attackedX = game.player.attackedTileX
    let attackedY = game.player.attackedTileY
    if ( witchX === attackedX && witchY === attackedY){  
        return true      
    }
} 



witchDead() {
    this.image = game.witchImages[2]
}
    
drawWitch() {
if (this.image !== game.witchImages[2]){
    image(this.image, this.x, this.y, 300, 100)
} else {
    image(this.image, this.x, this.y, 100, 100)
}
    

}
     
}

class Viking {
   
    constructor()  {
        this.x
        this.y
        this.direction
        this.image
        this.openX
    }

    randomizer() {
        const xArr = [200, 300, 400]
        const yArr = [100, 200, 300, 400, 500]
        
        let x = Math.floor(Math.random() * 3)
        let y = Math.floor(Math.random() * 5)
        this.x = xArr[x]
        this.y = yArr[y]
        let coinFlip = (Math.random() * 10)
        
        if (coinFlip < 5){
            this.direction = 0 // turnedLeft
            this.openX = this.x + 100
        } else {
            this.direction = 1 // turnedRight
            this.openX = this.x
        }
        
        this.image = game.vikingImages[this.direction]


    }

    killedChar(player) {
        let vikingX = this.x
        let vikingY = this.y
        let vikingDirection = this.direction
        let vikingAttackLeft = vikingX + 100
        let vikingAttackRight = vikingX + 100

        let playerX = player.row
        let playerY = player.col
        
        

        if (vikingDirection === 0){
            if (playerX === vikingAttackLeft && playerY === vikingY){
                
                return true

            } else if (playerX === vikingX && playerY === vikingY){
                
                return true
            }
        }

        if ( vikingDirection === 1){
            if (playerX === vikingAttackRight && playerY === vikingY){
                
                return true
            
            } else if (playerX === vikingX && playerY === vikingY){
                
                return true
    }
}

}

    defeatViking(){

    let vikingX = this.openX
    let vikingY = this.y
    
    let attackedX = game.player.attackedTileX
    let attackedY = game.player.attackedTileY
    
    if ( vikingX === attackedX && vikingY === attackedY){
        return true 
    }
    
    }

  
    vikingDead () {
       this.image = game.vikingImages[2]
   }

   drawViking() {

    if (this.image !== game.vikingImages[2]){
        image(this.image, this.x, this.y, 200, 100)
    } else {
        image(this.image, this.x, this.y, 100, 100)
    }

}
}




