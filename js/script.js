const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right");

let index = 0;

let interval = setInterval(run, 2000);
function run() {
    index++;
    console.log(index);
    changeImage();
}
function changeImage(){
    if(index > img.length - 1){
        index = 0;
    } else if(index < 0) {
        index = img.length - 1;
    }
    imgs.style.transform = `translateX(${-index *500}px)`
}

leftBtn.addEventListener("click", () => {
    index--;
    changeImage();
    resetInterval();
});

rightBtn.addEventListener("click", () => {
    index++;
    changeImage();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
    console.log(index);
}