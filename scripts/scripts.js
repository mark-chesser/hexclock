function updateClock () {

    // Variables to store current time
    var currentTime = new Date ();
    var currentHours = currentTime.getHours ();
    var currentMinutes = currentTime.getMinutes ();
    var currentSeconds = currentTime.getSeconds ();
 
    // Pad the minutes and seconds with leading zeros
    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
 
    // Convert the hours component to 12-hour format if needed
    // currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
 
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
 
    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
     
    // Write time to element 
    $("#time").html(currentTimeString);     
 }


 function changeBackgroundColor() {

     // Get value of element
     var time = $("#time").html()

     // Remove semi-colons
     var timeText = time.replace(/[^a-zA-Z 0-9]+/g, "");

     // Set background colour
     $("html").css("background-color", "#" + timeText )
 }
 
$(document).ready(function() {

    // Update clock ever 1 second
    setInterval('updateClock()', 1000);

    // Change background colour ever second
    setInterval('changeBackgroundColor()', 1000);
});

