//==============style bar time=======================
showQuizz();

//====================== import data.js =========================
import {quizz} from "./data.js";

//====================== get elementfrom =========================
let form=document.forms['quiz'];

let answerCount=0;


//==================== display quizz in html file =======================

function showQuizz(){
  var randomQuestion= quizz.sort(()=>Math.random() - 0.5);
  var arrAnswrCount=[0,1,2,3];
  var arrAnswrRandom=arrAnswrCount.sort(()=>Math.random() - 0.5);
  var next=document.getElementById("btn-skip");
  var boxQuestion=document.querySelector(".question strong");
  var answer1=document.querySelector(".answer1 strong");
  var answer2=document.querySelector(".answer2 strong");
  var answer3=document.querySelector(".answer3 strong");
  var answer4=document.querySelector(".answer4 strong");
  boxQuestion.innerHTML='';
  answer1.innerHTML='';
  answer2.innerHTML='';
  answer3.innerHTML='';
  answer4.innerHTML='';
  let index=0;
  display(index);
  next.onlick = display(index);

  function display(index){
    boxQuestion.innerHTML=`${randomQuestion[index].question}`;
      answer1.innerHTML=`${randomQuestion[index].answers[arrAnswrRandom[0]]}`;
      answer2.innerHTML=`${randomQuestion[index].answers[arrAnswrRandom[1]]}`;
      answer3.innerHTML=`${randomQuestion[index].answers[arrAnswrRandom[2]]}`;
      answer4.innerHTML=`${randomQuestion[index].answers[arrAnswrRandom[3]]}`;
      if(answer1.onclick || answer2.onclick || answer3.onclick || answer4.onclick){
        answerOfUser(index);
      }
      index++;
  }

function answerOfUser(i){
  var answer1=document.querySelector(".answer1 strong").textContent;
  var answer2=document.querySelector(".answer2 strong").textContent;
  var answer3=document.querySelector(".answer3 strong").textContent;
  var answer4=document.querySelector(".answer4 strong").textContent;
  if( answer1==randomQuestion[i].trueAnswer[0]){
    answer1.classList.add("correct-answer");
  }else{
    answer1.classList.add("incorrect-answer");
  }
  if( answer2==randomQuestion[i].trueAnswer[0]){
    answer2.classList.add("correct-answer");
  }else{
    answer2.classList.add("incorrect-answer");
  }
  if( answer3==randomQuestion[i].trueAnswer[0]){
    answer3.classList.add("correct-answer");
  }else{
    answer3.classList.add("incorrect-answer");
  }
  if( answer4==randomQuestion[i].trueAnswer[0]){
    answer4.classList.add("correct-answer");
  }else{
    answer4.classList.add("incorrect-answer");
  }
}
}

