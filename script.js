
// function for when button is clicked


function buttonClick() {
  $('td').click(function(){
    console.log('button clicked');
  });
}

// global variables
var cross = true;
var nought = false;


// function to start game
function beginGame() {
  buttonClick();
}

beginGame();
