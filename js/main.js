function milesOrMoney(miles, money, value) {
    let cpm = (money / miles);
    if (cpm * 100 >= value) {
        return `Use your miles!`;
    }
    else {
        return `Use cash!`;
    }
}


// console.log(milesOrMoney())