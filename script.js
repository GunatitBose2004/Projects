let display = document.getElementById("display");
let historyList = document.getElementById("history-list");
let history = [];

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function sqrt() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        let result = Math.sqrt(value);
        addToHistory(`√${value}`, result);
        display.value = result;
    }
}

function calculate() {
    
        let expression = display.value.replace(/\^/g, "**");
        let result = eval(expression);
        addToHistory(display.value, result);
        display.value = result;
}

function addToHistory(equation, result) {
    let entry = `${equation}=${result}`;
    history.unshift(entry);
    
    if (history.length > 10) {
        history.pop();
    }
    
    updateHistoryUI();
}

function updateHistoryUI() {
    historyList.innerHTML = "";
    
    history.forEach((item, index) => {
        let li = document.createElement("li");
        
        let equationSpan = document.createElement("span");
        equationSpan.textContent = item.split("=")[0];
        equationSpan.className = "history-equation";
        equationSpan.onclick = () => {
            display.value = item.split("=")[0];
        };
        

        let resultSpan = document.createElement("span");
        resultSpan.textContent = "=" + item.split("=")[1];
        resultSpan.className = "history-result";
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "history-delete";
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            history.splice(index, 1);
            updateHistoryUI();
        };
        
        li.appendChild(equationSpan);
        li.appendChild(resultSpan);
        li.appendChild(deleteBtn);
        historyList.appendChild(li);
    });
}