const ListSchema = require('../models/list-schema')

exports.userData = (req,res) =>{
    const { name,email } = req.body;
    
    const newUser = new ListSchema({
        name:name,
        email:email
    })

    newUser.save().then(result => {
        res.json({message:"New USer Created",userData:result})
    }).catch(err =>{
        res.status(500).json({message:"Internal Server Error"})
    })
}

exports.addTask = (req,res) => {
    const { email,taskname,subTask } = req.body;
    let subTaskArray = [];
    if(!subTask.isEmpty()){
       
        subTask.forEach(element => {
            let obj = {
                subTaskDiscription:element,
                isDone:false
            }
            subTaskArray.push(obj);
        });
    }
    
        

    ListSchema.findOne({email:email}).then( userData => {
        
        let obj = {
            taskName:taskname,
            subTaskArray:subTaskArray
        }
        
        userData.toDoArray.push(obj)
    }) 
    
}

exports.getList = (req,res) => {
    const { email } = req.body;
    
    ListSchema.findOne({email:email}).then(tasks => {
        res.json({message:"Tasks",allTask:tasks})
    }).catch(err =>{
        res.status(500).json({message:"Internal Server Error"})
    })
}