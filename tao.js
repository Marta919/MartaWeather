let time = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[time.getDay()];
function date(time){
let hours = time.getHours()
if (hours < 10){
  hours = (`0${hours}`);
}
  let minutes = time.getMinutes();  
  if (minutes <10) {
    minutes = (`0${minutes}`)
  }
return `${day}, ${hours}:${minutes}`; 
}
let now = document.querySelector("#now");
now.innerHTML = date(time);



function showTemperature(response){
document.querySelector(".twelve").innerHTML = Math.round(response.data.main.temp); 
document.querySelector(".sky").innerHTML= (`${response.data.weather[0].description}`); 
document.querySelector(".wind").innerHTML = (`Wind Speed: ${Math.round(response.data.wind.speed)}km/h`); 
document.querySelector(".humidity").innerHTML = (`Humidity: ${response.data.main.humidity}%`);
document.querySelector("#city").innerHTML = response.data.name;
}
function search(event) {
event.preventDefault();  
let city = document.querySelector("#enterCity").value; 
let apiKey = "e8cf93c11b2e03971616c05c042f7ad8";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
axios.get (`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("#submit-city");
form.addEventListener("submit", search);
function searchLocation(position){
  let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = ("e8cf93c11b2e03971616c05c042f7ad8");
    let apiEndPoint = `http://api.openweathermap.org/data/2.5/weather`;
    let apiUrl = `${apiEndPoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
 axios.get (`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
function showPosition(event) {
event.preventDefault();
navigator.geolocation.getCurrentPosition(searchLocation);
} 
let position = document.querySelector(".position");
position.addEventListener("click", showPosition);
