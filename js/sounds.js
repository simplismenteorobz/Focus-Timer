let bFire = new Audio("./audio/Lareira.wav")
let bCoffe = new Audio("./audio/Cafeteria.wav")
let bRain = new Audio("./audio/Chuva.wav")
let bFlorest = new Audio("./audio/Floresta.wav")

export default function(){
    
    bFire.loop = true
    bCoffe.loop = true
    bRain.loop = true
    bFlorest.loop = true

    function fire(){
      bFire.play()
      bCoffe.pause()
      bRain.pause()
      bFlorest.pause()
    }
    
    function coffe(){
      bCoffe.play()
      bFire.pause()
      bRain.pause()
      bFlorest.pause()
    }
    
    function rain(){
      bRain.play()
      bFire.pause()
      bCoffe.pause()
      bFlorest.pause()
    }
    
    function florest(){
      bFlorest.play()
      bFire.pause()
      bCoffe.pause()
      bRain.pause()
    }

    return{
        fire,
        coffe,
        rain,
        florest
    }
}

export{
  bFire,
  bCoffe,
  bRain,
  bFlorest}