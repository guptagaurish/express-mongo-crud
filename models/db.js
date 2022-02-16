const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{ useNewUrlParser: true}, (err)=>{
    if(!err){
        console.log("Connection succeded")
    }
    else{
        console.log('error in db connection')
    }
});


require('./employee.model')