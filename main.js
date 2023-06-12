


const formEle = document.getElementsByTagName('form')[0]
const formEl = document.getElementsByTagName('form')[1]
formEle.addEventListener('submit', (event) => {
    event.preventDefault()
    const city = formEle[0].value
    const state = formEle[1].value
    weatherData(city,state)
})


const weatherDiv = document.querySelector('.search-div')



const weatherData = async (city,state) => {
    const apiKey = 'df0d599eb30c97378b5794bf816cdb8d'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},&appid=${apiKey}`)
    const data= await response.json()
    const weatherInfo = data['weather'][0]['description']
    const tempData = data['main']['temp']
    const tempfeelData = data['main']['feels_like']
    const tempmaxData = data['main']['temp_max']
    const tempminData = data['main']['temp_min']
    const humidData = data['main']['humidity']
    const temp = Math.ceil((tempData-273.15)* 9/5 +32)
    const feelsLike = Math.ceil((tempfeelData-273.15)* 9/5 +32)
    const tempMin = Math.ceil((tempminData-273.15)* 9/5 +32)
    const tempMax = Math.ceil((tempmaxData-273.15)* 9/5 +32)

    weatherDiv.innerHTML = `
         <div class="card" style="width: 18rem;">       
               <div class="card-body">
                <h5 class="card-title">${city.toUpperCase()}${state.toUpperCase()}</h5>
           <hr>
           <p class="card-text"> Current weather: ${weatherInfo}</p>
           <hr>
           <p class="card-text"> Temperature: ${temp}F</p>
           <hr>
           <p class="card-text"> Feels Like: ${feelsLike}F</p>
           <hr>
           <p class="card-text"> Hi: ${tempMax}F</p>
           <hr>
           <p class="card-text"> Low: ${tempMin}F</p>
           <hr>
           <p class="card-text"> Humidity: ${humidData}%</p>
           <hr>
            </div>
         </div>`

    const bodyTag = document.querySelector('body')
   
    
    if (weatherInfo==="rain" || weatherInfo=="moderate rain" || weatherInfo =="light rain" 
    || weatherInfo=="heavy intensity rain"){
        bodyTag.style.backgroundImage='url("images/rain.jpg")'
    }else if (weatherInfo==="clear sky"){
        bodyTag.style.backgroundImage='url("images/sunbaby.webp")'
}   else if (weatherInfo==="mist"){
    bodyTag.style.backgroundImage='url("images/mist.jpeg")'
}   else if(weatherInfo==="cloudy" || weatherInfo =="scattered clouds"|| weatherInfo=="overcast clouds"
|| weatherInfo=="broken clouds"){
    bodyTag.style.backgroundImage='url("images/cloudy.jpeg")'
}   else if (weatherInfo==="snow"|| weatherInfo =="light snow" || weatherInfo== "heavy snow" 
|| weatherInfo=="sleet"){
    bodyTag.style.backgroundImage='url("images/snow.webp")'
} else{
    return "invalid response"
}

}




    


   
    const btn = document.querySelector('.btn btn-primary')
   

    // btn.addEventListener('click', () => {
    //     document.body.style.backgroundImage = "url('rain.jpg')";
    //    });

 
// function SetBack(dir) {
//     document.getElementById('body').style.backgroundImage=dir;
// }
// SetBack("url('rain.jpg')");



