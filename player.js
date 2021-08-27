class Player {

    constructor(col, row) {

        this.col = col
        this.row = row
        this.image = game.charImages[3]
        this.attackedTileX 
        this.attackedTileY 
        this.score = 0;
        this.health = 250
    }
      

    moveUp() {
            this.col -= 100
            this.image = game.charImages[6]
            console.log(this.col)
            console.log(this.row)
        }
    
    moveDown() {  
             this.col += 100
             this.image = game.charImages[3]        
             console.log(this.col)
             console.log(this.row)
    }

    moveLeft() {
            this.row -= 100
            this.image = game.charImages[4]
            console.log(this.col)
            console.log(this.row)
        }

    
    moveRight() {
            this.row += 100
            this.image = game.charImages[5]
            console.log(this.col)
            console.log(this.row)

        }


    attackLeft(){
        this.image = game.charImages[0]
        this.attackedTileX = this.row - 100   
        this.attackedTileY = this.col
        
    }

    attackRight(){
        this.image = game.charImages[1]
        this.attackedTileX = this.row + 100
        this.attackedTileY = this.col
        
    }   

    dead() {
        this.image = game.charImages[2]
        
    }
    
    draw() {
        let state = this.image

        if (state === game.charImages[0]){
            image(this.image, this.row - 100, this.col, 200, 80)
        } else if(state ===game.charImages[1]) {
            image(this.image, this.row, this.col, 200, 80)
        } else {
            image(this.image, this.row, this.col, 80, 80)
        
        }
        
    }
    
}