let course = {
    courseName: "web && app Development",
    courseInstructure: "Sir Noor Muhammad",
    price: 500
}

// // call object key sample way

// console.log(course.courseInstructure);




// // Call object key different and clean syntax 
const { courseInstructure } = course
// console.log(courseInstructure);



// // and you can modify this method

const { courseInstructure: instructure } = course
console.log(instructure);