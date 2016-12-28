var axios = require('axios');
const KEY_API = 'cf6655a4a6db55124f883ffb67795075&units';
const OPEN_WEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + KEY_API + '=metric';

//cf6655a4a6db55124f883ffb67795075


module.exports ={
    getTemp: function (location){
            var encodedLocation = encodeURIComponent(location);
            var requestUrl = `${OPEN_WEATER_MAP_URL}&q=${encodedLocation}`;


              return axios.get(requestUrl).then(function(res){
               if(res.data.cod && res.data.message){
                   throw new Error(res.data.message);
               }else{
                   return res.data.main.temp;
               }     
            }, function(res){
                throw new Error (res.data.message);
            });

    }
}