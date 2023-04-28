

// TODO: numbers.withCommas - a class?
function numberWithCommas(number:number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// TODO: text.capitalizeFirstLetter - maybe a class?
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
    numberWithCommas,
    capitalizeFirstLetter,
}