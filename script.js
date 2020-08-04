
//functions 
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

});

//work day scheduler container
const dayPart = $('.container');


// hour variables
const dayHours = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
const twentyfourhourClock = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];


//builds the work day scheduler container

for (var i = 0; i < dayHours.length; i++) {
    const rowDiv = $("<div class= 'row time-block'>").attr("id", twentyfourhourClock[i]);
    const hourDiv = $("<div class='hour col-md-1'>");
    const txtDiv = $("<textarea class='col-md-10 description' id='userText'>");
    const btnDiv = $("<button type='button' class='btn saveBtn col-md-1 fas fa-save'>");

    dayPart.append(rowDiv);

    hourDiv.text(dayHours[i]);
    rowDiv.append(hourDiv);

    txtDiv.text();
    rowDiv.append(txtDiv);

    btnDiv.text();
    rowDiv.append(btnDiv);
}


function businessHours() {
    var rightNow = moment().hours()
    $('.time-block').each(function () {
        var hourPool = parseInt($(this).attr("id").split(" ")[0]);

        if (hourPool < rightNow) {
            $(this).addClass("past");

        } else if (hourPool === rightNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });

}
businessHours();

if (window.localStorage) {
    var txtUser = document.getElementById('userText');
    txtUser.value = localStorage.getItem('userText');

    txtUser.addEventListener('button', function() {
        localStorage.setItem('userText', txtUser.value);
    }, false);
}







/*

hours.forEach(function (hour) {
    // Build the row
    const rowDiv = $('<div>');

    rowDiv.addClass('row');

    // build the hour div
    const hourDiv = $('<div>');
    hourDiv.attr('id', 'hour-' + hour);
    const currentHour = hour === 12 ? 12 : hour % 12;
    const amOrPm = (hour > 11) ? 'PM' : 'AM';
    hourDiv.text(currentHour + ' ' + amOrPm);
    hourDiv.addClass('')
    rowDiv.append(hourDiv);
    // build the input
        // append to row div
    //build the save
        // append to row div
    container.append(rowDiv);
});*/

/*<div class="col-md-1 hour">
        9AM
      </div>
      <textarea class="col-md-10 description">
          </textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
    </div>*/