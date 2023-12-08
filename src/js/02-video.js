import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
let time = localStorage.getItem("videoplayer-current-time")
    

player.on('timeupdate', throttle(function(ev) {
    let currentTime = ev.seconds
    localStorage.setItem("videoplayer-current-time", currentTime)
}, 500)
);



if (time === null) {
    return
} else {
    player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
}
