var students = require('../students.json');
var questions = require('../questions.json');
var answers = require('../answers.json');
function createStudent(student) {
  students.push(student);
  return students;
}

function findAllStudents() {
  return students;
}

function findStudentById(sid) {
  return students.find(student => student._id == sid)
}

function createQuestion(question) {
  questions.push(question);
  return questions;
}

function findAllQuestions() {
  return questions;
}
function findQuestionById(qid) {
  return questions.find(question => question._id == qid)
}

function findAllAnswers() {
  return answers;
}

function  findAnswerById(aid) {
  return answers.find(answer => answer._id == aid)

}
function findAnswerByStudent(sid) {
  return answers.find(answer => answer._id == sid);
}

function findAnswerByQuestion(qid){
  return answers.find(answer => answer._id == qid);
}

function findAnswersByStudentAndQuestion(sid,qid) {
  return answers.find(answer => answer._id == sid && answer._id == qid);
}


module.exports = {
  findAllStudents,
  createStudent,
  findStudentById,
  createQuestion,
  findAllQuestions,
  // answerQuestion,
  findQuestionById,
  findAllAnswers,
  findAnswerById,
  // findAnswersByStudent,
  // findAnswersByQuestion,
  findAnswersByStudentAndQuestion
};
