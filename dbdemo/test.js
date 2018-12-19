var repo = require('./courserepo')


console.log('test');
// var course = {title: "React", summary: "Library from facebook!!"};
// repo.insertCourse(course);

repo.findCourses((err, courses)=>{
    if(err) throw err;
    console.log(courses);
})


