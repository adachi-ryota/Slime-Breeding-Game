import * as Phaser from 'phaser';


const config: Phaser.Types.Core.GameConfig  = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    scene: []
};

const game = new Phaser.Game(config)