


$(function(event) {
// function for when button is clicked
console.log("dom");
// global variables
var cross = true;
var winner = false;

function buttonClick() {
  $('td').click(function() {
    check();
    if(cross === true && winner === false) {
      cross = false;
      $(this).html('X').addClass('X');
      $('.playerTurn').html('It is O\'s turn');
      console.log(this);
    } else if(winner === false){
      cross = true;
      $(this).html('O').addClass('O');
      $('.playerTurn').html('It is X\'s turn');
    }
  });
}

// Checks for line
function check() {
  debugger;
  if(($('td')[0].innerHTML === $('td')[1].innerHTML === $('td')[2].innerHTML) || ($('td')[3].innerHTML === $('td')[4].innerHTML === $('td')[5].innerHTML) || ($('td')[6].innerHTML === $('td')[7].innerHTML === $('td')[8].innerHTML) || ($('td')[0].innerHTML === $('td')[3].innerHTML === $('td')[6].innerHTML) || ($('td')[1].innerHTML === $('td')[4].innerHTML === $('td')[7].innerHTML) || ($('td')[2].innerHTML === $('td')[5].innerHTML === $('td')[8].innerHTML) || ($('td')[2].innerHTML === $('td')[4].innerHTML === $('td')[6].innerHTML) || ($('td')[0].innerHTML === $('td')[4].innerHTML === $('td')[8].innerHTML)) {
    winner = true;
  }
}


// function to start game
function beginGame() {
  buttonClick();
}

beginGame();

});
