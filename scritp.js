let count = 0
let savedA = null;
let savedB = null;


const container = document.createElement("div");
container.id ="container";

const counter = document.createElement("h1");
counter.textContent = count;
counter.id ="counter";

const incrementBtn = document.createElement("button");
incrementBtn.textContent = "+";
const decrementBtn = document.createElement("button");
decrementBtn.textContent = "-";
const resetBtn = document.createElement("button");
resetBtn.textContent = "⌫";
const saveABtn = document.createElement("button");
saveABtn.textContent ="🖫";
const saveBBtn = document.createElement("button");
saveBBtn.textContent ="🖫";
const clearABtn = document.createElement("button");
clearABtn.textContent ="🗑";
const clearBBtn = document.createElement("button");
clearBBtn.textContent ="🗑";

const savedAText = document.createElement("p");
savedAText.textContent ="-";
const savedBText = document.createElement("p");
savedBText.textContent ="-";


incrementBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    if (count > 0) {
        decrementBtn.disabled = false;
    }
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.textContent = count;
    }
    if (count ===0) {
        decrementBtn.disabled = true;
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counter.textContent = 0;
});

saveABtn.addEventListener("click", () => {
    savedA = count;
    savedAText.textContent =`${savedA}`;
});

saveBBtn.addEventListener("click", () => {
    savedB = count;
    savedBText.textContent =`${savedB}`;
});

clearABtn.addEventListener("click", () => {
    savedA = null;
    savedAText.textContent = "-"
})

clearBBtn.addEventListener("click", () => {
    savedB = null;
    savedBText.textContent = "-"
})


container.appendChild(counter);
container.appendChild(incrementBtn);
container.appendChild(decrementBtn);
container.appendChild(resetBtn);

container.appendChild(saveABtn);
container.appendChild(savedAText);
container.appendChild(clearABtn);

container.appendChild(saveBBtn);
container.appendChild(savedBText);
container.appendChild(clearBBtn);


document.body.appendChild(container);
