const weatherForm = document.querySelector('form')
const searchBar = document.querySelector('input')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')

weatherForm.addEventListener('submit', e => {
  e.preventDefault()
  p1.textContent = 'Loading . . .'
  p2.textContent = ''
  p3.textContent = ''
  p4.textContent = ''
  const location = searchBar.value
  // fetch('http://localhost:3000/weather?location=' + location)    
  fetch('/weather?location=' + location)    // !!! compatible with heroku and locally
    .then(response => response.json())
    .then(data => {
      if (!data.error) {
        p1.innerHTML = '<b>Current temperature:  </b>' + data.temperature + 'C'
        p2.innerHTML = data.forecast
        p3.textContent = data.location
        p4.innerHTML = ''
      }
      else {
        p1.textContent = ''
        p2.textContent = ''
        p3.innerHTML = ''
        p4.textContent = data.error
      }
    })
})
