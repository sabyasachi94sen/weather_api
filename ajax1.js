function cl(){
    var city=document.getElementsByTagName("input")[0].value;
    city=city.toUpperCase();
    console.log(city)

var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b836fa1e5754f866418ba57891c8577e`;


var response=$.ajax(url,{
    type:"GET",
    timeout:5000,
    data: "json",
    
    success: function(data,status,Xhr){
        console.log(data);

        
        
        document.getElementById("city").innerHTML=city;
        document.getElementById("weather").innerHTML=data.weather[0].main;
        document.getElementById("temp").innerHTML=parseInt(data.main.temp-273)+" <sup>o</sup> C";
        document.getElementById("min-temp").innerHTML=parseInt(data.main.temp_min-273)+" <sup>o</sup> C";
        document.getElementById("max-temp").innerHTML=parseInt(data.main.temp_max-273)+" <sup>o</sup> C";
        document.getElementById("wind").innerHTML=data.wind.speed+" Km/h";
       
        console.log(Xhr);

    },
    error: function(error){
        document.getElementById("city").innerHTML="";
        document.getElementById("weather").innerHTML=""
        document.getElementById("temp").innerHTML="";
        document.getElementById("min-temp").innerHTML="";
        document.getElementById("max-temp").innerHTML="";
        document.getElementById("wind").innerHTML="";
    }
   
});

console.log(response)





}


