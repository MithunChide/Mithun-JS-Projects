
const bg = document.querySelector('.bg');
const LoadText = document.querySelector('.loading-text');

let load = 1;

let int = setInterval(blurring, 30)

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    // console.log(load);

    LoadText.innerHTML = `${load}%`
    LoadText.style.opacity = scale(load, 0 , 100 , 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers