const API_KEY = `ef27b2720cbaf29830909b34b5daa3ec`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, Text) => {
  document.getElementById(id).innerText = Text;
};
const displayTemperature = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText('temperature', temperature.main.temp)
  setInnerText('condition', temperature.weather[0].main)
//   set image icon 
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url)
};
