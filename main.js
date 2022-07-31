import './style.css'
import Shake from 'shake.js'

const myShakeEvent = new Shake({
  threshold: 15, // optional shake strength threshold
  timeout: 1000, // optional, determines the frequency of event generation
})

myShakeEvent.start()

const quoteContainer = document.querySelector('.quote')
// const video = document.querySelector('#video')

const quotes = [
  'onus is on us.',
  "lawbreakers can't be legislated.",
  'an earthly loss is an ancestral gain.',
  'a mistake is the truth trying to come out.',
  'overturning the bullshit on a personal level by not subscribing to it is the new moevement.',
]

quoteContainer.addEventListener('click', (e) => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  e.target.classList.toggle('hide')

  setTimeout(() => {
    e.target.innerText = quotes[randomIndex]
    e.target.classList.toggle('hide')
  }, 5000)
})

window.addEventListener('shake', (e) => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  e.target.classList.toggle('hide')

  setTimeout(() => {
    e.target.innerText = quotes[randomIndex]
    e.target.classList.toggle('hide')
  }, 5000)
})
