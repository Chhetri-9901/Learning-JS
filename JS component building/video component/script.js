// import "video.js/dist/video-js.css";
// import videojs from "video.js";

import '@videojs/html/video/player';
import '@videojs/html/video/skin';

const video = document.querySelector(".cmp-video");
const videoCards = document.querySelectorAll(".cmp-video__card");
const transcriptVideo = document.querySelectorAll(".cmp-video__transcript");
const audioDescription = document.querySelectorAll(
  ".cmp-video__audio-description",
);

const nonAdVideo = document.querySelector(".cmp-video__card__non-ad");
console.log(nonAdVideo);
const adVideo = document.querySelector(".cmp-video__card__ad");

const nonAdTranscript = nonAdVideo.querySelector(
  ".cmp-video__audio-description a",
);
const adTranscript = adVideo.querySelector(".cmp-video__audio-description a");

const nonAdVideoEl = document.getElementById("swa_event_s");
const adVideoEl = document.getElementById("swa_event_sa");

const nonAdPlayer = videojs(nonAdVideoEl);
const adPlayer = videojs(adVideoEl);

transcriptVideo?.forEach((element) => {
  element.style.display = "none";
});
audioDescription?.forEach((element) => {
  element.style.display = "none";
});

nonAdPlayer.ready(() => {
  nonAdPlayer.load();
});

adPlayer.ready(() => {
  adPlayer.load();
});

nonAdVideo.style.display = "block";
adVideo.style.display = "none";


function showTags() {
  console.log("Playing video id:", this.id());

  transcriptVideo.forEach((el) => (el.style.display = "block"));
  audioDescription.forEach((el) => (el.style.display = "block"));
  videoCards.forEach((el) => (el.style.paddingBottom = "25px"));
}

nonAdPlayer.on("play", showTags);
adPlayer.on("play", showTags);

// AD → NON-AD
adTranscript.addEventListener("click", (e) => {
  e.preventDefault();

  adPlayer.pause();
  adPlayer.currentTime(0);

  adVideo.style.display = "none";
  nonAdVideo.style.display = "block";

  nonAdPlayer.currentTime(0);
  nonAdPlayer.play();
});

// NON-AD → AD
nonAdTranscript.addEventListener("click", (e) => {
  e.preventDefault();

  nonAdPlayer.pause();
  nonAdPlayer.currentTime(0);

  nonAdVideo.style.display = "none";
  adVideo.style.display = "block";

  adPlayer.currentTime(0);
  adPlayer.play();
});


