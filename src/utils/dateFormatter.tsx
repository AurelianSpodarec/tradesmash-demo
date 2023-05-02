const dateFormatter = {
    formatDate(timestamp: number) {
        // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        // const date = new Date(timestamp);
        // const day = date.getDate();
        // let suffix = "th";
        // if (day === 1 || day === 21 || day === 31) suffix = "st";
        // else if (day === 2 || day === 22) suffix = "nd";
        // else if (day === 3 || day === 23) suffix = "rd";
        
        // const month = months[date.getMonth()];
        // const year = date.getFullYear();
        // const dayOfWeek = days[date.getDay()];
        
        // return `${day}${suffix} ${month} ${dayOfWeek}, ${year}`;
        const date = new Date(timestamp);
        const year = date.getFullYear().toString().padStart(4, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${year}-${month}-${day} - ${hours}:${minutes}:${seconds}`;
    },
    todayDate() {
        const date = new Date();
        const suffixes = ["th", "st", "nd", "rd"];
        const dayOfMonth = date.getDate();
        const suffix = suffixes[(dayOfMonth - 1) % 10 === 1 && dayOfMonth !== 11 ? 1 : (dayOfMonth - 1) % 10 === 2 && dayOfMonth !== 12 ? 2 : (dayOfMonth - 1) % 10 === 3 && dayOfMonth !== 13 ? 3 : 0];
        const monthName = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();
        return `${dayOfMonth}${suffix} ${monthName} ${year}`;
    }
}

export default dateFormatter;