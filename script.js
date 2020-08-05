
//functions 
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

});

//work day scheduler container
const dayPart = $('.container');


// hour variables
const dayHours = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
const twentyfourhourClock = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
var saveButton = document.querySelector(".btn");


function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}
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
    getLocalStorage(i);
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

function showusertask(){
    $(".description").each(function(){
        var inputId = $(this).attr("#userText");
        $(this).val(localStorage.getItem(inputId));
        
    });
};

$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).children().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
    console.log(text, time)
    
});
showusertask();
