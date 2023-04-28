const dateHelper = {
    formatDate(timestamp: number) {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        const date = new Date(timestamp);
        const day = date.getDate();
        let suffix = "th";
        if (day === 1 || day === 21 || day === 31) suffix = "st";
        else if (day === 2 || day === 22) suffix = "nd";
        else if (day === 3 || day === 23) suffix = "rd";
        
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const dayOfWeek = days[date.getDay()];
        
        return `${day}${suffix} ${month} ${dayOfWeek}, ${year}`;
    }
}

export default dateHelper;