 var ct = moment().format("H")
 
 //date and time 
 $("#currentDay").text(moment().format("dddd MMMM Do YYYY h:mm a"));

 // On load function that will simultaniously set the color for past preasent future and getting the 
 //values from local storage and setting them as the text area value.
$( document ).ready(function() {
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
        var keyName = $(this)[0].children[1].id
        var item = localStorage.getItem(keyName)
        $(this)[0].children[1].children[0].value = item; 
    })
})

//Saving the value of the text area in local storage 
$("button").on("click", function(){
    var txtValue = $(this)[0].previousElementSibling.children[0].value
    var id = $(this)[0].previousElementSibling.id
    localStorage.setItem(id, txtValue)
})