

//const { strict } = require('assert');
var express=require('express');
const { resolve } = require('path');
var app = express();

var routes1 = require('./routes/route1');
var routes2 = require('./routes/route2');
app.use('/api1', routes1); // url with test 1 goes to route1
app.use('/api2', routes2);// url with test 2 goes to route2

app.use(express.static("myApp")); // myApp will be the same folder name.


app.listen(3030, () => {

    var t = 0;
   /* for(let i=0; i<10; i++){
        for(let i=0; i<10; i++){
          for(let i=0; i<10; i++){
            console.log("AA")
            var t = i;
          }
        }
     };*/

     var newProm =  new Promise(function(resolve , reject){
        var t = 1;
        if( t === 2){
           //reoslve(true);
           resolve("true");
        }
        else{
            reject("true")
        }
    })

     console.log("value t " + t);
     
     for(var i=0;i<10;i++){
         console.error("forloop i " + i);
         newProm.then(function(values){
            console.log("prosm " +values);
         }).catch(function(error){
            console.log("eroror " + error );
         })
        console.log("After forllop i " + i);
    }
         
      
        console.log("someother inputs");
      
       
     
        //console.log('B');
     
     function call(input ,  callback ){
         /*for(var j=0;j<=100000000;j++){
         }*/
       
         /*setTimeout(function(){
            callback(null);
         },2000)*/
        
         
     }
     
    console.log('App listening on port 3030');
});


