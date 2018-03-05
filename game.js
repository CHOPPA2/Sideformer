var sidePlatforms, player, i = 0, ledge, hitPlatform;
var Game = {
  preload() {
   game.load.spritesheet('player', 'assets/blue-square.png');
   game.load.image('sky', 'assets/sky.png');
   game.load.spritesheet('platform', 'assets/platform.png');
  },
  create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    background = game.add.image(0, 0, 'sky');
    background.scale.setTo(2, 1);
    sidePlatforms = game.add.group(); // add the side platforms group
    sidePlatforms.enableBody = true;
    sidePlatforms.create(400, 300, 'platform'); // add the two sides
    sidePlatforms.create(100, 0, 'platform');
    sidePlatforms.setAll('anchor', [0.5, 0.5]);
    sidePlatforms.setAll('body.angle', 180);
    sidePlatforms.setAll('body.immovable', true);
    player = game.add.sprite(0, 0, 'player', 4);
    game.physics.arcade.enable(player);
    player.body.bounce.x = 0.2;
    player.body.collideWorldBounds = true;
    controls = game.input.keyboard.createCursorKeys();
  },
  update() {
    hitPlatform = game.physics.arcade.collide(player, sidePlatforms);
    player.body.velocity.y = 400;
    if (controls.left.isDown && i === 0) {
      player.x = player.x - 100;
      i = 1;
    } else if (controls.right.isDown) {
      player.x = player.x + 100;
      i = 2;
    } else {
      i = 0;
    }
  }
}
