const loader = document.querySelector(".loader");
const image = document.querySelector("img");

let loadValue = 0;
const timer = setInterval(() => {
    loadValue += 1;
    if (loadValue === 100) {
        clearTimeout(timer);
    }
    updateUI();
}, 30);

const updateUI = () => {
    loader.textContent = loadValue + "%";
    loader.style.opacity = scale(loadValue, 0, 100, 1, 0);
    image.style.filter = `blur(${scale(loadValue, 0, 100, 30, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};