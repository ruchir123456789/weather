let result = document.getElementById('result');
let searchbtn = document.getElementById('search-btn');
let cityref = document.getElementById('city');
let getweather = ()=>{
    let cityvalue= cityref.value;
    console.log(cityvalue);

    if(cityvalue.length==0){
        result.innerHTML=`<h4>please enter a city name</h4>`
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}`;
        fetch(url).then(
            (resp)=>resp.json()).then(data=>{
                console.log(data);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                console.log(data.name);
                console.log(data.main.temp_min);
                console.log(data.main.temp_max);

                result.innerHTML=`<h2>${data.name}</h2>
                <h4 class="weather">${data.weather[0].description}</h4>
                <h4 class="weather">${data.weather[0].main}</h4>
                <i class="ri-cloud-fill"></i>
                <h1>${data.main.temp} &#176</h1>
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}</h4>
                </div>`


            })
            .catch(()=>{
                result.innerHTML=`<h4>city not found</h4>`
            })
    }
    
}
getweather();
searchbtn.addEventListener('click',()=>{
    getweather();

})