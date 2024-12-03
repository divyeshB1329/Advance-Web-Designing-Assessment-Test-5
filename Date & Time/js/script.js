const updateDateTime = () => {
    // Get the current date and time
    const now = new Date();

    // Array of day names for easy lookup
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Array of month names for easy lookup
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Extract the current day of the week, month, date, and year
    const weekDay = days[now.getDay()]; // Day of the week (e.g., Sunday)
    const month = months[now.getMonth()]; // Month name (e.g., January)
    const date = now.getDate(); // Date (e.g., 19)
    const year = now.getFullYear(); // Year (e.g., 2021)

    document.getElementById("week").innerHTML = `${weekDay},&nbsp;`; // Update day of the week
    document.getElementById("month").innerHTML = `${month}&nbsp;`; // Update month name
    document.getElementById("date").innerHTML = `${date},&nbsp;`; // Update date
    document.getElementById("year").innerHTML = `${year}`; // Update year

    // Format the current time into a 12-hour format with AM/PM
    let hours = now.getHours(); // Hours in 24-hour format
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Add leading zero if needed
    const seconds = now.getSeconds().toString().padStart(2, "0"); // Add leading zero if needed
    const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
    hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight (0 becomes 12)

    // Combine hours, minutes, seconds, and AM/PM into a time string
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("time").innerHTML = timeString; // Update time
};

// Call `updateDateTime` every second to keep the display updated in real-time
setInterval(updateDateTime, 1000);

// Call `updateDateTime` immediately to initialize the display
updateDateTime();
