window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
            game.load.image( 'night', 'assets/night1.png' );
            game.load.sprite('jar','assets/jar1');
            game.load.image('frog', 'assets/frog.png');
            game.load.image('spdier', 'assets/spider.png');
            game.load.image('toad', 'assets/toad.png');
            game.load.image('bat', 'assets/bat.png');
            game.load.image('rat', 'assets/rat.png');
            game.load.image('bird', 'assets/bird.png');
    }
    
    //enemies
    var enemies, cursors;
    var frog;
    var spider;
    var toad;
    var bat;
    var rat;
    var bird;
    

    var jar;
        
    
    function create() {
        //background
        game.add.sprite(0, 0, 'night');
        
        //enemies
        frog = game.add.sprite(0, 0, 'frog');
        spider = game.add.sprite(0, 0, 'spider');
        toad = game.add.sprite(0, 0, 'toad');
        bat = game.add.sprite(0, 0, 'bat');
        rat = game.add.sprite(0, 0, 'rat');
        bird = game.add.sprite(0, 0, 'bird');
        
        //add the "enemies" that are bad objects to collect, to a group.
        enemies.add(frog);
        enemies.add(spider);
        enemies.add(toad);
        enemies.add(bat);
        enemies.add(rat);
        enemies.add(bird);
        
        
       
      
    }
    
    function update() {
      
       
    }
};
