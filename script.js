function removetransitionend (e){
        //   if(e.propertyName!==`transform`) return
          e.target.classList.remove(`playing`)
}

function playsound(e){
    const audio = (document.querySelector(`audio[data-key ="${e.keyCode}"]`))
    const key = (document.querySelector(`div[data-key ="${e.keyCode}"]`))
    if(!audio) return                     // If audio is null or undefined, the function exits early.
    key.classList.add(`playing`)
   audio.currentTime = 0          //  Purpose: Resets the audio playback.Effect: Starts the audio from the beginning.
   audio.play()
}

const keys = Array.from(document.querySelectorAll(`.key`))
keys.forEach(key => key.addEventListener("transitionend", removetransitionend)) //What it does: Waits for a CSS animation to finish.When it happens: After the animation ends.


window.addEventListener("keydown", playsound)