function changeCount(amount){
    let count = parseInt(document.getElementById("count").innerText);
    count += amount;

    if (count < 0) count = 0;
    document.getElementById("count").innerText = count;
}