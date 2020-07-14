


// create a field with html to store user input in the local storage
    // this input should have fields for the time, the place, and a note for what the appointment is about.
        // In progress
// create a button to save this input into the local storage
    // Button complete, need to code it

// create a button to delete selected section (bonus)
    // might add this, finishing assignment first

// create a reader of the current time and day.
    // Have a rudimentary idea of how to do this. 


    function tad(){
        var currentDate = new Date();
        var currentYear = currentDate.getYear();
            if(currentYear < 1000){
                currentYear += 1900
            }
        var day = currentDate.getDay();
        var month = currentDate.getMonth();
        var daym = currentDate.getDate();
        var dayArray = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thurday,", "Friday,", "Saturday,");
        var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        // Date End

        // Time
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
            if (hours == 24) {
                hours == 0;
            } else if (hours > 12){
                hours = hours - 0;
            }
        // this will make the hours feel more digitalized with a 0 in the 10s place
            if (hours < 10) {
                hours = "0" + hours;
            }

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var clock = document.getElementById("currentDay");
            clock.textContent = "" + dayArray[day] + " " + daym + " " + monthArray[month] + " " + currentYear + " | " + hours + ":" + minutes + ":" + seconds;
            clock.innerText = "" + dayArray[day] + " " + daym + " " + monthArray[month] + " " + currentYear + " | " + hours + ":" + minutes + ":" + seconds;

            setTimeout("tad()", 1000);
    }

    tad();

var memory = document.querySelector("#memory");
var saveThis = document.getElementById("save");
var render = document.getElementById("render");

renderLastRegistered();

function message02(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    // call on the local storage to get value.
    var render = localStorage.getItem("memory");
    // render username into userSpan
    render.innerHTML = render;
} 


    function save() {
    
        var saveNotes = document.querySelector("#save").value;
    
            localStorage.setItem("save", saveNotes);
            renderLastRegistered();
        }

// code the time to correspond to a color.
    // Need to research this one. I assume it's just an if/then statement that call on functions to switch the appearance. 