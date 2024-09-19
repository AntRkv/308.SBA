# JavaScript Course Grading System

## Project Description

This project calculates students' grades based on their assignment submissions. It adjusts scores if assignments are submitted late (10% penalty) and calculates an average score for each student.

## Data Structure

### CourseInfo
- **id**: Course identifier
- **name**: Course name

### AssignmentGroup
- **id**: Assignment group identifier
- **course_id**: Linked course identifier
- **assignments**: List of assignments with details (id, name, due date, possible points)

### LearnerSubmissions
- **learner_id**: Student identifier
- **assignment_id**: Assignment identifier
- **submission**: Contains submission date and score

## Main Functions

1. **Course & Assignment Validation**: Ensures all assignments are linked to the correct course and have valid possible points.
2. **Unique Students**: Extracts unique students from submissions.
3. **Score Calculation**: Adjusts scores for late submissions and computes the average score for each student.
4. **Late Penalty**: Deducts 10% of the score for late submissions.

## How to Run

1. Clone or download the repository.
2. Open the project in a code editor.
3. Run the program using:
                            node script.js
    

