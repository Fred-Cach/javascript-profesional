/* const video = document.querySelector("video");
  const button = document.querySelector("button");

  function MediaPlayer(config) {
    this.media = config.el;
  }

  MediaPlayer.prototype.play = function () {
    this.media.play();
    count += 1;
  };

  MediaPlayer.prototype.pause = function () {
    this.media.pause();
    count -= 1;
  };

  const player = new MediaPlayer({ el: video });
  let count = 0;
  button.onclick = () => {
    !count ? player.play() : player.pause();
  }; */

import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from './plugins/Ads';


const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});
const playPause: HTMLElement = document.querySelector("#playPause");
const muteUnmute: HTMLElement = document.querySelector("#muteUnmute");

playPause.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
