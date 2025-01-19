var myImg = document.getElementById('myImg');

myImg.onclick = function () {
    if (clouds.style.webkitAnimationPlayState == "paused") {
        clouds.style.webkitAnimationPlayState == "running";
        airplane.style.webkitAnimationPlayState == "running";
        hotairballoon.style.webkitAnimationPlayState == "running";
        console.log('run')
    } else {
        clouds.style.webkitAnimationPlayState == "paused";
        airplane.style.webkitAnimationPlayState == "paused";
        hotairballoon.style.webkitAnimationPlayState == "paused";
        console.log('pause')
    }
}