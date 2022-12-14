/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const full = document.getElementById('full');
const half = document.getElementById('half');
const days = document.querySelectorAll('.days');
const clear = document.getElementById('clear');
const total = document.getElementById('total');
const fullRate = 35;
const halfRate = 20;

updateTotal();

days.forEach((selection, idx) => {
    selection.addEventListener('click', () => selectDay(idx))
});

full.addEventListener('click', () => changeToFullRate())
half.addEventListener('click', () => changeToHalfRate())
clear.addEventListener('click', () => resetSelection())

console.log(days);
console.log(clear);
console.log(full);
console.log(total);



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function selectDay(idx) {
    days.forEach((day, idx2) => {
		if (idx === idx2 && !day.classList.contains('clicked')) {
			day.classList.add('clicked')
		}
    })

    updateTotal()
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetSelection() {
    days.forEach((day, _) => {
		day.classList.remove('clicked')
    })
    changeToFullRate()
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeToHalfRate() {
	full.classList.remove('clicked')
	if (!half.classList.contains('clicked')) {
		half.classList.add('clicked')
	}
    updateTotal()
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeToFullRate() {
	half.classList.remove('clicked')
	if (!full.classList.contains('clicked')) {
		full.classList.add('clicked')
	}
    updateTotal()
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateTotal() {
	const selectedDays = document.querySelectorAll('.days.clicked').length;
	const selectedRate = full.classList.contains('clicked') ? fullRate : halfRate;
	total.innerText = `${selectedDays * selectedRate}`;
}
