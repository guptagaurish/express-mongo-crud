const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');



router.post('/', (req, res) => {
    
        insertRecord(req, res);
        
});


function insertRecord(req, res) {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if (!err){
            res.json({status:true, message:'inserted', data:doc});
            
            


        }
                    else {
            
                console.log('Error during record insertion : ' + err);
        }
    });
}

router.post('/:id', (req,res)=>{
    updateRecord(req,res)
})

function updateRecord(req, res) {
    Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { 
            res.json({status:true, message:'Updated'});
            }
        else {
            
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs)
            
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});



router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
            
        }
    });
});

router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({status:true, message:'Deleted'});
           
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;