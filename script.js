
// function for when button is clicked


function buttonClick() {
  if(cross === true) {
    $('td').click(function(){
      $(this).html('X');
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
