
$(".submit").on("click", function(event) {
    event.preventDefault();

    var newReservation = {
      customerName: $("#reserve-name").val().trim(),
      phoneNumber: $("#reserve-phone").val().trim(),
      customerEmail: $("#reserve-email").val().trim(),
      customerID: $("#reserve-unique-id").val().trim()
    };
});
$.post("/api/tables", newReservation,
function(data) {

  // if reservations < 5, add user to reservations and alert them to this fact.
  if (data) {
    alert("Your reservation has been made.");
  }

  // if reserved tables > 5, add user to wait list and tell them as much.
  else {
    alert("You may have to wait some time for a table to come available.");
  }

  // form clearing mechanism.
  $("#reserve-name").val("");
  $("#reserve-phone").val("");
  $("#reserve-email").val("");
  $("#reserve-unique-id").val("");

});