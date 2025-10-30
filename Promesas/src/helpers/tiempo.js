const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_OPEN_WEATHER = import.meta.env.VITE_API_OPEN_WEATHER;

export function getWeatherPromise(city="Granada"){
    const URL = `${VITE_API_OPEN_WEATHER}?q=${city}&units=metric&lang=es&appid=${VITE_API_KEY}`;
    return fetch(URL)
        .then(response=>{
            if(!response.ok) throw new Error("Error al obtener los datos de la API");
            return response.json()
        })
        .then(data=>{
            console.log(`------ Clima de la ciudad ${city} -----`);
            console.log(`🌡️ -- Temperatura: ${data.main.temp}ºC`);
            const arrayImg = ['☁️','🌧️','⛅','🌤️'];
            const weather = data.weather[0].main;
            console.log(`💧 -- Humedad: ${data.main.humidity}`)
            return data;
        })
        .catch(error=>console.log("Error ...",error))
        .finally(()=>console.log("Cerrando getWeatherPromise API"));
}