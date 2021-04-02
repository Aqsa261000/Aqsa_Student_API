const Student = require('../models/student.model');
exports.test =(req, res)=>{
    res.send('Greetings from the Test controller!')
};

exports.student_create=(req,res)=>{
let student= new Student({
student_name:req.body.student_name,
student_gender:req.body.student_gender,
course:req.body.course
});
student.save((err)=>{
    if(err) {
    return next(err);
    }
    res.send('Congratulations! Student Created Successfully!!')
});
}
exports.student_details=(req,res)=> {
    Student.findById(req.params.id,(err,student)=>{
        if (err) return next(err);
        res.send(student);
    })
}
exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,student)=>{
        if (err) return next(err);
        res.send('Student has been updated!');
    });
}
exports.student_delete=(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if (err) return next(err);
        res.send('successfully deleted');
    })
}
exports.list=(req,res)=>{
Student.find((err,studentsdata)=>{
    if(!err){res.render('student',{page:'Student List', menuId:'list',studentsdata:studentsdata})}
    else{console.log('Error in trying to retrieve students:' +JSON.stringify(err,undefined,2))}
})
    }