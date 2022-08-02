import './style.css'
import Shake from 'shake.js'
import { quotes } from './data'
const myShakeEvent = new Shake()

myShakeEvent.start()

// const video = document.querySelector('#video')
const quoteContainer = document.querySelector('.quote')
const moon = document.querySelector('.moon')
// const video = document.querySelector('#video')

quoteContainer.addEventListener('click', (e) => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  e.target.classList.toggle('hide')
  moon.classList.toggle('show-moon')
  setTimeout(() => {
    e.target.innerText = quotes[randomIndex]
    e.target.classList.toggle('hide')
    moon.classList.toggle('show-moon')
  }, 4000)
})

window.addEventListener('shake', (e) => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  e.target.classList.toggle('hide')

  setTimeout(() => {
    e.target.innerText = quotes[randomIndex]
    e.target.classList.toggle('hide')
  }, 4000)
})
