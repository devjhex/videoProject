/* Select the elements */

let button = document.querySelector(".button");
let video = document.querySelector('.video-container');
let overlay = button.querySelector(".btnOverlay");
let preload = document.querySelector(".preload");
let header = document.querySelector(".header");

button.addEventListener('click', function(){
    if(overlay.classList.contains('translate-x-full')=== false){
        overlay.classList.add("translate-x-full");
        video.pause();
    }
    else if(overlay.classList.contains('translate-x-full')){
        overlay.classList.remove("translate-x-full");
        video.play();
    }
   
});


window.addEventListener("load",function(){
    preload.classList.add("hidden");
    header.classList.remove("hidden");

})