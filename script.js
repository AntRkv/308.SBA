const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

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

function checkCourseAndAssignments(course, assigmGroup) {
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
}

const studentsData = [];

function getUniqIds(students) {
  const uniqueObj = {};

  students.forEach((item) => {
    if (!uniqueObj[item.learner_id]) {
      uniqueObj[item.learner_id] = { id: item.learner_id };
      studentsData.push(uniqueObj[item.learner_id]);
    }
  });
  return studentsData;
}

function getLearnerData(course, assigmGroup, submissions) {
  try {
    checkCourseAndAssignments(course, assigmGroup);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }

  function findAssignmentById(assigmGroup, assignmentId) {
    let foundAssigm = null;

    for (let index = 0; index < assigmGroup.assignments.length; index++) {
      if (assigmGroup.assignments[index].id === assignmentId) {
        foundAssigm = assigmGroup.assignments[index];
        break;
      }
    }
    return foundAssigm;
  }
  function pointsCalc(points, submitDay, dueDay, pointsPos) {
    if (submitDay > dueDay) {
      points -= pointsPos * 0.1;
    }
    return points;
  }

  const learners = getUniqIds(submissions);

  learners.forEach((learner) => {
    let totalPoints = 0;
    let totalPointsPossible = 0;

    submissions.forEach((submission) => {
      if (submission.learner_id === learner.id) {
        const assignment = findAssignmentById(
          assigmGroup,
          submission.assignment_id
        );

        if (assignment) {
          const dueDate = new Date(assignment.due_at);
          const submitDate = new Date(submission.submission.submitted_at);
          let points = submission.submission.score;

          points = pointsCalc(
            points,
            submitDate,
            dueDate,
            assignment.points_possible
          );

          learner[assignment.id] = +(
            points / assignment.points_possible
          ).toFixed(2);
          totalPoints += points;
          totalPointsPossible += assignment.points_possible;
        }
      }
    });

    learner.avg = +(totalPoints / totalPointsPossible).toFixed(2);
  });

  return learners;
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
