export default function({
    secondsDisplay,
    minutesDisplay
}){
    let timerTimeOut
    let minutes = minutesDisplay.value

    function countdown(){
        timerTimeOut = setTimeout(function(){
            let seconds = Number(secondsDisplay.value)
            let minutes = Number(minutesDisplay.value)
            let isFinished = minutes <= 0 && seconds <= 0
    
            if(isFinished){
                return 
            }
            
            if(seconds <= 0){
                secondsDisplay.value = 60
                minutesDisplay.value--
    
                let minutesUpdate = minutesDisplay.value
                minutesDisplay.value = String(minutesUpdate).padStart(2,"0")
            }
            
            //impossibilita os segundos ultrapassarem 60
            if(seconds > 60){
              secondsDisplay.value = 60

              let secondsUpdate = secondsDisplay.value
              secondsDisplay.value = String(secondsUpdate).padStart(2,"0")
            }
            
            secondsDisplay.value--
            
            let secondsUpdate = secondsDisplay.value
            secondsDisplay.value = String(secondsUpdate).padStart(2,"0")
    
            countdown()
        }, 1000)
    }

    function clear(){
      clearTimeout(timerTimeOut)
    }

    function reset(){
      minutesDisplay.value = minutes
      secondsDisplay.value = 0
      let secondsUpdate = secondsDisplay.value
      secondsDisplay.value = String(secondsUpdate).padStart(2,"0")
    }

    return{
      countdown,
      clear,
      reset
    }
}
