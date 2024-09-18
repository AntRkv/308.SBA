// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// const AssignmentInfo = {
//   id: number,
//   name: string,
//   // the due date for the assignment
//   due_at: string,
//   // the maximum points possible for the assignment
//   points_possible: number,
// };

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getPossiblePointsByAssigmentId(studentsGroup) {
  let posPoints = 0;
  let dueDate ;
  for (const element of studentsGroup.assignments) {
    if (element.id === 1) {
      posPoints = element.points_possible;
      dueDate = new Date(element.due_at);
    } else if (element.id === 2) {
      posPoints = element.points_possible;
      dueDate = new Date(element.due_at);
    } else if (element.id === 3) {
      posPoints = element.points_possible;
      dueDate = new Date(element.due_at);
    }
  }
  return { posPoints, dueDate };
}

let studentsData = {
  id:0,
  avg:0
};


function getLearnerScore(studentsSubmission){
  studentsSubmission.forEach(element => {
    switch (LearnerSubmissions[element].id) {
      case 1:
        studentsData = {
          id: LearnerSubmissions[element].id,
          avg: 
        }
        break;
      case 2:
        break;
      case 3:
        break;

      default:
        break;
    }
  });
}



function getLearnerData(course, assigmGroup, submissions) {
  // here, we would process this data to achieve the desired result.

  let flagZeroPoss = false;

  assigmGroup.assignments.forEach((assignment) => {
    if (assignment.points_possible === 0) {
      flagZeroPoss = true;
    }
  });

  if (
    assigmGroup.course_id !== course.id ||
    flagZeroPoss ||
    course.course_id < 0
  ) {
    throw new Error("Course id not matched or possible points equls zero˝");
  }

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

// const result = [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0, // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833, // late: (140 - 15) / 150
//   },
// ];
