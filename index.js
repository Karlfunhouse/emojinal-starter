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



happy.addEventListener('click', happyMessage);
silly.addEventListener('click', sillyMessage);
crying.addEventListener('click', cryingMessage);
