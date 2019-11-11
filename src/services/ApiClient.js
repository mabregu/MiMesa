//?term=pizza&latitude=-34.6131500&longitude=-58.3772300
import axios from 'axios';

function getResto(categoria) {
  const term = `term=${categoria}`
  const lat = 'latitude=-34.6131500'
  const long = 'longitude=-58.3772300'
  const urlProxy = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${term}&${lat}&${long}`;
  const url = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=413d44aad85e644361d60c7c1ad8c047&format=json'
  const key = "o7Rti7ivJuE4V4UNLD74oyOsYieLF1rIndI7QmmNsJMbxmW5Dpt6doo_QIrI9t-1rWKHOXmxVLt_T7efdT5KQ2Rh1qseHfsG9qUOBljxwtCzKd3S7XxU0SdaWSZ6XXYx"
  const myHeaders = new Headers()

  myHeaders.append('authorization', `Bearer ${key}`)
  myHeaders.append('Accept', 'application/json')
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Origin', 'http://localhost:8000')
  myHeaders.append('Access-Control-Allow-Headers', '*')
  myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8000')

  return fetch(urlProxy, {
    method: 'GET',
    headers: myHeaders,
  })
    .then(res => res.json())
    .then(data => data.businesses)
    .then(businesses => businesses.map(businesse => {
      return {
        id: businesse.id,
        name: businesse.name,
        image: businesse.image_url,
        url: businesse.url,
        likes: 200,
        comments: 140,
      }
    }))
}

export { getResto }
