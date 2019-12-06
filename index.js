var happy = document.querySelector('.happy');
var silly = document.querySelector('.silly');
var crying = document.querySelector('.crying');
var displayReply = document.querySelector('.message');
var happyWords = ['YAY!', 'Your smile just cheered me up!', 'You go!'];
var sillyWords = ['Sounds...good?', 'Interesting response', 'Me too.'];
var cryingWords = ['Do you want to talk?', 'What can I do?', 'Keep your head up.'];
var randomHappy = happyWords[Math.floor(happyWords.length * Math.random())]



function happyMessage() {

  console.log(happyWords);
for (var i = 0; i < happyWords.length; i++);{
    console.log(randomHappy)};
}
  // displayReply.innerText = 'YAY!'
  //
  // Your smile just cheered me up!
  // You go!


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
