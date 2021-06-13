const dateValue = location.search.slice(6)

const daysContainer = document.querySelector('[data-js="days"]')
const hoursContainer = document.querySelector('[data-js="hours"]')
const minutesContainer = document.querySelector('[data-js="minutes"]')
const secondsContainer = document.querySelector('[data-js="seconds"]')

const insertDateIntoDOM = (days, hours, minutes, seconds) => {
    daysContainer.textContent = days < 10 ? `0${days}` : days
    hoursContainer.textContent = hours < 10 ? `0${hours}` : hours
    minutesContainer.textContent = minutes < 10 ? `0${minutes}` : minutes
    secondsContainer.textContent = seconds < 10 ? `0${seconds}` : seconds
}

const counter = () => {
    const userSetDate = new Date(`${dateValue} 00:00:00`).getTime()
    const presentDate = new Date().getTime()
    const difference = userSetDate - presentDate

    const days = Math.floor((difference / 1000 / 60 / 60 / 24))
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    insertDateIntoDOM(days, hours, minutes, seconds)
}

const checkLocation = location.href.includes('contador.html')

if(checkLocation){
    setInterval(counter, 1000)
} 