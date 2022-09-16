//Create a function that takes in a list of button inputs and returns the final state.
function likeOrDislike(buttons) {
    let state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing'
      } else {
        state = buttons[i]
      }
    }
  
    return state
  }