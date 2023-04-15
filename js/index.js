import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonLess,
    buttonMore,
    buttonStop,
    florest,
    rain,
    fire,
    coffe,
    oneFlorest,
    twoFlorest,
    oneRain,
    twoRain,
    oneFire,
    twoFire,
    oneCoffe,
    twoCoffe,
    inputFlorest,
    inputRain,
    inputCoffe,
    inputFire,
    html,
    buttonLight,
    buttonDark
} from "./elements.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
  bFire,
  bCoffe,
  bRain,
  bFlorest} from "./sounds.js"

const sounds = Sounds()

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    oneFlorest,
    twoFlorest,
    oneRain,
    twoRain,
    oneFire,
    twoFire,
    oneCoffe,
    twoCoffe
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

minutesDisplay.addEventListener('change', function(e){
  minutesDisplay.value = Number(e.target.value)
})

buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.clear()
})

buttonStop.addEventListener('click', function(){
  controls.stop()
  timer.clear()
  timer.reset()
})

buttonMore.addEventListener('click', function(){
  controls.more()
})

buttonLess.addEventListener('click', function(){
  controls.less()
})

florest.addEventListener('click', function(){
  controls.florest()
  sounds.florest()
  inputFlorest.value = 0.5
  inputRain.value = 0.5
  inputFire.value = 0.5
  inputCoffe.value = 0.5
})

rain.addEventListener('click', function(){
  controls.rain()
  sounds.rain()
  inputFlorest.value = 0.5
  inputRain.value = 0.5
  inputFire.value = 0.5
  inputCoffe.value = 0.5
})

fire.addEventListener('click', function(){
  controls.fire()
  sounds.fire()
  inputFlorest.value = 0.5
  inputRain.value = 0.5
  inputFire.value = 0.5
  inputCoffe.value = 0.5
})

coffe.addEventListener('click', function(){
  controls.coffe()
  sounds.coffe()
  inputFlorest.value = 0.5
  inputRain.value = 0.5
  inputFire.value = 0.5
  inputCoffe.value = 0.5
})

inputFire.addEventListener("change", function(e) {
  bFire.volume = e.target.value;
})

inputCoffe.addEventListener("change", function(e) {
  bCoffe.volume = e.target.value;
})

inputRain.addEventListener("change", function(e) {
  bRain.volume = e.target.value;
})

inputFlorest.addEventListener("change", function(e) {
  bFlorest.volume = e.target.value;
})
 
buttonDark.addEventListener('click', function(){
  controls.dark()
})

buttonLight.addEventListener('click', function(){
  controls.light()
})

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
  background: getStyle(html, "--background"),
  timerColor: getStyle(html, "--timer-color"),
  mainBackground: getStyle(html, "--main-background"),
  fillColorone: getStyle(html, "--fill-colorone"),
  fillColortwo: getStyle(html, "--fill-colortwo"),
  lightOne: getStyle(html, "--light-one"),
  lightTwo: getStyle(html, "--light-two")
}

const lightMode = {
  background: "#d6d6db",
  timerColor: "#323238",
  mainBackground: "#E5E5E5",
  fillColorone: "#02799D",
  fillColortwo: "#323238",
  lightOne: "#d6d6db",
  lightTwo: "#323238"
}

const transformKey = key => 
  "--" + key.replace(/([A-Z)])/, "-$1").toLowerCase()

buttonDark.addEventListener('click', () => {
  Object.keys(lightMode).map(key => 
    html.style.setProperty(transformKey(key), lightMode[key])
    )
})

buttonLight.addEventListener('click', () => {
  Object.keys(initialColors).map(key => 
    html.style.setProperty(transformKey(key), initialColors[key])
    )
})
