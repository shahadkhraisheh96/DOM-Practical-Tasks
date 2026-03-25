const display = document.getElementById("counter");
let count = 0;

document.body.addEventListener("click", (e) => {
    if (e.target.id === "plus") count++;
    if (e.target.id === "minus") count--;

    display.textContent = count;
    if (count > 0) {
        display.dataset.state = "positive";
    } else if (count < 0) {
        display.dataset.state = "negative";
    } else {
        display.dataset.state = "zero";
    }
});
