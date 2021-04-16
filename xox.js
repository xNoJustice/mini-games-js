var turn = "X",
  moves = 0;
$("#game td").html("");

$(document).ready(function () {
  $("#game td").click(function () {
    var x = $(this).attr("id");
    if ($("#winner").html() != "") {
      reset();
    } else {
      if (turn == "X") {
        if ($("#" + x).text() != "O") {
          $("#" + x).addClass("X");
          $("#" + x).text("X");
          moves += 1;
          turn = "O";
          $("#turn").html("<h3>Turn O</h3>");
          winner();
        }
      } else {
        if ($("#" + x).text() != "X") {
          $("#" + x).addClass("O");
          $("#" + x).text("O");
          moves += 1;
          turn = "X";
          $("#turn").html("<h3>Turn X</h3>");
          winner();
        }
      }
    }
  });
});
function reset() {
  $("#game td").html("");
  $("#turn").html("");
  $("#winner").html("");
  return (turn = "X"), (moves = 0);
}
function winner() {
  if (
    $("#one").text() == "X" &&
    $("#two").text() == "X" &&
    $("#three").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#four").text() == "X" &&
    $("#five").text() == "X" &&
    $("#six").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#seven").text() == "X" &&
    $("#eight").text() == "X" &&
    $("#nine").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#one").text() == "X" &&
    $("#five").text() == "X" &&
    $("#nine").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#three").text() == "X" &&
    $("#five").text() == "X" &&
    $("#seven").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#one").text() == "X" &&
    $("#four").text() == "X" &&
    $("#seven").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#two").text() == "X" &&
    $("#five").text() == "X" &&
    $("#eight").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#three").text() == "X" &&
    $("#six").text() == "X" &&
    $("#nine").text() == "X"
  ) {
    $("#winner").html("<h1>Winner : X </h1>");
  } else if (
    $("#one").text() == "O" &&
    $("#two").text() == "O" &&
    $("#three").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (
    $("#four").text() == "O" &&
    $("#five").text() == "O" &&
    $("#six").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (
    $("#seven").text() == "O" &&
    $("#eight").text() == "O" &&
    $("#nine").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (
    $("#one").text() == "O" &&
    $("#five").text() == "O" &&
    $("#nine").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (
    $("#three").text() == "O" &&
    $("#five").text() == "O" &&
    $("#seven").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (
    $("#one").text() == "O" &&
    $("#four").text() == "O" &&
    $("#seven").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (
    $("#two").text() == "O" &&
    $("#five").text() == "O" &&
    $("#eight").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (
    $("#three").text() == "O" &&
    $("#six").text() == "O" &&
    $("#nine").text() == "O"
  ) {
    $("#winner").html("<h1>Winner : O</h1>");
  } else if (moves == 9) {
    $("#winner").html("<h1>Draw</h1>");
  }
}
