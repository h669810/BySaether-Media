let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

var disablePrev = true;
var disableNext = false;


const day = document.querySelector(".calendar-dates");

const currdate = document
	.querySelector(".calendar-current-date");

const prenexIcons = document
	.querySelectorAll(".calendar-navigation span");

const calendarPrev = document.getElementById("calendar-prev");
const calendarNext = document.getElementById("calendar-next");

// Array of month names
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

//Days not available
const unavailable = [
    "2023-08-22-2",
    "2023-08-24-2",
    "2023-08-26-2",
    "2023-09-01-2",
    "2023-09-02-2",
    "2023-09-05-2",
    "2023-09-07-2",
	"2023-09-15-2",
    "2023-09-16-2",
	"2023-09-19-2",
    "2023-09-21-2",
	"2023-09-29-2",
    "2023-09-30-2",
]

const unavailMeaning = [
	"Full booked",
	"Vacation",
	"Not available"
]


// Function to generate the calendar
const manipulate = () => {

	if(month === new Date().getMonth()) {
		disablePrev = true;
		calendarPrev.classList.add("disableIcon")
	} else {
		disablePrev = false;
		calendarPrev.classList.remove("disableIcon")
	}


	// Get the first day of the month
	let dayone = new Date(year, month, 1).getDay();

	// Get the last date of the month
	let lastdate = new Date(year, month + 1, 0).getDate();

	// Get the day of the last date of the month
	let dayend = new Date(year, month, lastdate).getDay();

	// Get the last date of the previous month
	let monthlastdate = new Date(year, month, 0).getDate();

	// Variable to store the generated calendar HTML
	let lit = "";

	// Loop to add the last dates of the previous month
	for (let i = dayone; i > 0; i--) {
		lit +=
			`<li class="inactive">${monthlastdate - i + 1}</li>`;
	}

	// Loop to add the dates of the current month
	for (let i = 1; i <= lastdate; i++) {

		// Check if the current date is today
		let isToday = i === date.getDate()
			&& month === new Date().getMonth()
			&& year === new Date().getFullYear()
			? "active"
			: "";
		
        let isUnactive = "";
        for(let j = 0; j < unavailable.length;j++) {
            let unavailDate = unavailable[j].split("-");
            
            isUnactive = i === parseInt(unavailDate[2]) && month + 1 === parseInt(unavailDate[1]) && year === parseInt(unavailDate[0]) ? "unavailable" : "";
            if(isUnactive === "unavailable") break;
        }
        
        if(isToday === "")
            lit += `<li id="${i}" class="${isUnactive}" onmouseover="addReason(${i})">${i}</li>`;
        else
            lit += `<li id="${i}" class="${isToday}" onmouseover="addReason(${i})">${i}</li>`;
	}

	// Loop to add the first dates of the next month
	for (let i = dayend; i < 6; i++) {
		lit += `<li class="inactive">${i - dayend + 1}</li>`
	}

	// Update the text of the current date element
	// with the formatted current month and year
	currdate.innerText = `${months[month]} ${year}`;

	// update the HTML of the dates element
	// with the generated calendar
	day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

	// When an icon is clicked
	icon.addEventListener("click", () => {

		if (icon.id === "calendar-prev" & disablePrev === true) {}
		else {
			// Check if the icon is "calendar-prev"
			// or "calendar-next"
			month = icon.id === "calendar-prev" ? month - 1 : month + 1;

			// Check if the month is out of range
			if (month < 0 || month > 11) {

				// Set the date to the first day of the
				// month with the new year
				date = new Date(year, month, new Date().getDate());

				// Set the year to the new year
				year = date.getFullYear();

				// Set the month to the new month
				month = date.getMonth();
			}

			else {

				// Set the date to the current date
				date = new Date();
			}

			// Call the manipulate function to
			// update the calendar display
			manipulate();
		}
	});
});

let number;
function addReason(number) {
	
	for (let i = 0; i < unavailable.length; i++) {
		if(number === parseInt(unavailable[i].split("-")[2])) {
			document.getElementById(number).setAttribute('data-avail',unavailMeaning[unavailable[i].split("-")[3]])
		}
	}
}