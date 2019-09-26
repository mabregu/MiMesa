const url = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=413d44aad85e644361d60c7c1ad8c047&format=json'

function getResto() {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.warn('data', data)
    })
}

export { getResto }
