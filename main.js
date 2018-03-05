var game = new Phaser.Game(1000, 600, Phaser.AUTO, '');
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('End', End);
game.state.start('Game');
