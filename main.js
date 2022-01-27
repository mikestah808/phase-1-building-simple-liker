// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")

// Your JavaScript code goes here!

// Invoke mimicServerCall to simulate making a server request
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Has Loaded!');
  errorModal.classList.add("hidden")

  // CALL FIND LIKES 
  // findLikes()
  clickListener()

})

function hideError(){
  errorModal.classList.add('hidden');
}

// function findLikes(){
//   const likeArr = document.querySelectorAll(".like-glyph")

//   likeArr.forEach((singularLike) => {
//     singularLike.addEventListener('click', () => console.log("YOU FOUND ME! LIKE!"))
//   })
// }


function clickListener(){
  document.addEventListener('click', (event) => {
    // If I click on the heart then console.log("YOU FOUND ME! LIKE!") otherwise, do nothing

    if(event.target.classList[0] === 'like-glyph'){
      //PROMISE!! ASYNC WE NEED A .THEN
      mimicServerCall()
      .then(resp => {
        event.target.classList.add('activated-heart')
      })
      .catch(error => {
        errorModal.classList.remove('hidden')
        setTimeout(() => {
          hideError()
        }, 3000)
      }) //PROMISE FAILS, .catch -> catches it 

    }

  })
}







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
