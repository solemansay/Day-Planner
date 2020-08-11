 var ct = moment().format("H")

$("#currentDay").text(moment().format("dddd MMMM Do YYYY h:mm a"));

$(".row").each(function () {
    if ($(this)[0].children[1].id == ct) {
        $(this).find(".ta").addClass("present")
    }
    else if ($(this)[0].children[1].id < ct) {
        $(this).find(".ta").addClass("past")
    }
    else{
        $(this).find(".ta").addClass("future")
    }
})