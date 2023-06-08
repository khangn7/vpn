const iframe = document.getElementById("iframe");

const width_button_plus = document.getElementById("width-button-plus");
const width_button_minus = document.getElementById("width-button-minus");

const height_button_plus = document.getElementById("height-button-plus");
const height_button_minus = document.getElementById("height-button-minus");

const reset_button = document.getElementById("reset-button");

const speed = 100;

// starting sizes hardcoded in index.html
const iframe_start_height = 200;
const iframe_start_width = 200;

let iframe_width = iframe_start_width;
let iframe_height = iframe_start_height;

/**
 * 
 * @param {Number} dimension 0 for width, 1 for height
 * @param {Number} change 1 for increase in size, -1 for decrease
 * @param {Number} reset 1 to ignore dimension and change and reset to og size, 0 to not
 */
function changeIframeSize(dimension, change, reset=0)
{
    if (reset)
    {
        iframe_width = iframe_start_width;
        iframe_height = iframe_start_height;
        iframe.width = iframe_start_width + "px";
        iframe.height = iframe_start_height + "px";
        return;
    }

    if (dimension)
    {
        iframe_height += change * speed;
        iframe.height = iframe_height + "px";
    }
    else
    {
        iframe_width += change * speed;
        iframe.width = iframe_width + "px";
    }
}

width_button_minus.addEventListener("click", () => {
    changeIframeSize(0, -1);
});
width_button_plus.addEventListener("click", () => {
    changeIframeSize(0, 1);
});
height_button_minus.addEventListener("click", () => {
    changeIframeSize(1, -1);
});
height_button_plus.addEventListener("click", () => {
    changeIframeSize(1, 1);
});
reset_button.addEventListener("click", () => {
    changeIframeSize(0, 0, 1);
})
