//console.log("se esta ejecutando");
var Twit = require('twit'); 
var config = require('./config');
const knex = require('./db/conexion/db');
var T = new Twit(config); 
var numero=8;
var params = {
q: ('#zoom','#webinar'), 
count: numero
} 
T.get('search/tweets', params,searchedData); 
function searchedData(err, data, response) {
  var con=0;
  for(con=0 ; con< numero; con++){
    knex('tbot').insert([{
      id_tw:data.statuses[con].id,
     texto:data.statuses[con].text ,
      fecha:data.statuses[con].created_at
      
      }    
    
    ]).then(data =>{console.log(data)}).catch(err =>{console.log(err)});

   // console.log("numero",con+1,data.statuses[con].id,"texto", data.statuses[con].text,"fecha",data.statuses[con].created_at );

  }  

} 