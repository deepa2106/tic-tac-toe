
// function for when button is clicked


function buttonClick() {
  if(cross === true) {
    $('td').click(function(){
      $(this).html('X');
      cross = false;
      nought = true;
      $('.playerTurn').html('It is O\'s turn');
  })
  }
}

// global variables
var cross = true;
var nought = false;


// function to start game
function beginGame() {
  buttonClick();
}

beginGame();
