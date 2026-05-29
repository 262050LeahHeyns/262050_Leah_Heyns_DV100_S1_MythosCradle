// about.html inputCounter
function changeCount(id, amount){
    const countEl = document.getElementById(id);
    let current = parseInt(countEl.textContent);
    current += amount;
    if (current < 0) current = 0;
    countEl.textContent = current;
}