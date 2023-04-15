import { minutesDisplay,
         buttonDark,
         buttonLight } from "./elements.js"

export default function({
    buttonPause,
    buttonPlay,
    oneFlorest,
    twoFlorest,
    oneRain,
    twoRain,
    oneFire,
    twoFire,
    oneCoffe,
    twoCoffe
}){

function play(){
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')
}

function pause(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function stop(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function florest(){
  oneFlorest.classList.add('colorOne')
  twoFlorest.classList.add('colorTwo')
  oneRain.classList.remove('colorOne')
  twoRain.classList.remove('colorTwo')
  oneFire.classList.remove('colorOne')
  twoFire.classList.remove('colorTwo')
  oneCoffe.classList.remove('colorOne')
  twoCoffe.classList.remove('colorTwo')
}

function rain(){
  oneFlorest.classList.remove('colorOne')
  twoFlorest.classList.remove('colorTwo')
  oneRain.classList.add('colorOne')
  twoRain.classList.add('colorTwo')
  oneFire.classList.remove('colorOne')
  twoFire.classList.remove('colorTwo')
  oneCoffe.classList.remove('colorOne')
  twoCoffe.classList.remove('colorTwo')
}

function fire(){
  oneFlorest.classList.remove('colorOne')
  twoFlorest.classList.remove('colorTwo')
  oneRain.classList.remove('colorOne')
  twoRain.classList.remove('colorTwo')
  oneFire.classList.add('colorOne')
  twoFire.classList.add('colorTwo')
  oneCoffe.classList.remove('colorOne')
  twoCoffe.classList.remove('colorTwo')
}

function coffe(){
  oneFlorest.classList.remove('colorOne')
  twoFlorest.classList.remove('colorTwo')
  oneRain.classList.remove('colorOne')
  twoRain.classList.remove('colorTwo')
  oneFire.classList.remove('colorOne')
  twoFire.classList.remove('colorTwo')
  oneCoffe.classList.add('colorOne')
  twoCoffe.classList.add('colorTwo')
}

function dark(){
  buttonDark.classList.add('hide')
  buttonLight.classList.remove('hide')
}

function light(){
  buttonDark.classList.remove('hide')
  buttonLight.classList.add('hide')
}

function more(){
  minutesDisplay.value = Number(minutesDisplay.value) + 5
}

function less(){
  minutesDisplay.value = Number(minutesDisplay.value) - 5
}

return{
  play,
  pause,
  stop,
  florest,
  rain,
  coffe,
  fire,
  more,
  less,
  dark,
  light
}
}