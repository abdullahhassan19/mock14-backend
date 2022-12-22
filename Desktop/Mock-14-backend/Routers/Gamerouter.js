const { Router } = require("express");
const { Connection } = require("../Config/db");
const { Quizmodel } = require("../Models/game.Model");
const Gamerouter = Router();



Gamerouter.get("/get", async (req, res) => {

    let quiz=Quizmodel.find()
  try {
    res.send({ msg: "success", players: quiz });
  } catch {
    res.send({ msg: "err" });
  }
});

module.exports = { Gamerouter };
