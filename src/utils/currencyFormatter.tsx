const currencyFormatter = {
    format: (number: number, currency = "GBP") => {
        return number.toLocaleString('en-GB', { style: 'currency', currency });
    },
    formatWithCommas: (number: number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatAsPercentage: (number: number) => {
        return (number * 100).toFixed(2) + "%";
    },
    abbreviateNumber: (number: number) => {
        const abbreviations = ["", "K", "M", "B", "T"];
        let magnitude = 0;
        while (number >= 1000) {
            number /= 1000;
            magnitude++;
        }
        return number.toFixed(2) + abbreviations[magnitude];
    }
}

export default currencyFormatter
