const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  category: "",
  type: "",
  difficulty: "",
  question:"",
  correct_answer: "",
  incorrect_answers: []
});

const Quizmodel = mongoose.model("quizgames", QuizSchema);

module.exports = { Quizmodel };
