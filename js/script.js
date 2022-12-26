//==============style bar time=======================


//====================== import data.js =========================
import {quizz} from "./data.js";

//====================== get elementfrom =========================
let form=document.forms['quiz'];

let answerCount=0;

function showQuizz(){
  var randomQuestion= quizz[0].question.sort(()=>Math.random() - 0.5);
  var randomReponse=quizz[0].answers.sort(()=>Math.random() - 0.5);

}


