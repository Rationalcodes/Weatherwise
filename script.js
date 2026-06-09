const button  = document.getElementById("search");

button.addEventListener("click",async () => {
    const city=
    document.getElementById("city").value;
    const apiKey="99f6acc4ea6b2900c20a615fa399b075";
    const url = 
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   try{
    const response=
    await fetch(url);

    const data=
    await response.json();

    document.getElementById(
        "weather").innerHTML=
        `<h2>${data.name}</h2>
        <p>Temp: 
        ${data.main.temp}*c
        </p>

        <p>Humidity:
        ${data.main.humidity}%
        </p>

        <p>Weather:
        ${data.weather[0].description}</p>
        `;

    
   }

   catch(error){
    document.getElementById(
        "weather"
    ).innerHTML="city not found";
   }

});