
const forecast= require('./data1/forecast')
const  geocode = require('./data1/gecoding')
const country= process.argv[2]

 geocode (country,(error,data) =>{
   console.log("error is : " ,  error)
   console.log("data is : " ,  data)  
    if (data){
        forecast(data.latitude,data.longitude,(error,data)=>{
            console.log("error is : " ,  error)
            console.log("data is : " ,  data) 
        })
    }



 })