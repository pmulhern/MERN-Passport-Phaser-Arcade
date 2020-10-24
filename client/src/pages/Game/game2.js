import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Phaser, { Scene } from "phaser";
import React, {useEffect} from "react";

export const Game2 = () => {
  useEffect(() => {

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgrounColor: 0x00000,
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: false,
          debugShowVelocity: false
      }
    },
    scene: [Scene1, Scene2],
  };

  var game = new Phaser.Game(config);

  return function cleanup() {
    console.log("clean");
    console.log(game);
    game.destroy(true);
  };
});
return Game2;
};
