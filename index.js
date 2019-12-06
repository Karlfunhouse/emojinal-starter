var happy = document.querySelector('.happy');
var silly = document.querySelector('.silly');
var crying = document.querySelector('.crying');
var displayReply = document.querySelector('.message');



function happyMessage(){
  console.log('You\'re Happy');
  displayReply.innerText = 'YAY!'
  //
  // Your smile just cheered me up!
  // You go!
}

function sillyMessage(){
  console.log("You're silly!")
  displayReply.innerText = 'Sounds...good?';
  displayReply.innerText = 'Interesting response'
  displayReply.innerText = 'Me too.'
}

function cryingMessage(){
  console.log("you're crying")
  displayReply.innerText = 'Do you want to talk?'
  // what can i do?
  // We can cry together!
}

happy.addEventListener('click', happyMessage);
silly.addEventListener('click', sillyMessage);
crying.addEventListener('click', cryingMessage);
