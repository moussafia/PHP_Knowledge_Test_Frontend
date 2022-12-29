//==============show function=======================
showQuizz();
//====================== import data.js =========================
import {quizz} from "./data.js";

//====================== get elementfrom =========================
let score=0;

//==================== display quizz in html file =======================
function showQuizz(){
  var randomQuestion= quizz.sort(()=>Math.random() - 0.5);
  var arrAnswrCount=[0,1,2,3];
  var arrAnswrRandom=arrAnswrCount.sort(()=>Math.random() - 0.5);

// ======================declaration variable vide================
var boxQuestion=document.querySelector(".question strong");
var answer1=document.querySelector(".answer1 strong");
var answer2=document.querySelector(".answer2 strong");
var answer3=document.querySelector(".answer3 strong");
var answer4=document.querySelector(".answer4 strong");

// ======================declaration button answer================
var next=document.getElementById('btn-skip');
var btnAnswer1=document.querySelector(".answer1");
var btnAnswer2=document.querySelector(".answer2");
var btnAnswer3=document.querySelector(".answer3");
var btnAnswer4=document.querySelector(".answer4");
var buttonAnswers=[btnAnswer1,btnAnswer2,btnAnswer3,btnAnswer4];

const bar = document.querySelector(".round-time-bar");

  // ==========================initialisation des variables=================
    boxQuestion.innerHTML='';
    answer1.innerHTML='';
    answer2.innerHTML='';
    answer3.innerHTML='';
    answer4.innerHTML='';
    let index=0;
  // =================== Appel function display==========================
  next.style.display='none';
  display(index);
  index++;
  next.addEventListener('click', ()=>{next.style.display='none';progressBarTiming(bar);
    removeClassesAndOpacity(buttonAnswers);
        display(index);
        if(index<=randomQuestion.length){  
          index++;
        } 
        
  }
  ); 
  
  function display(index){
    boxQuestion.innerHTML=randomQuestion[index].question;
      answer1.innerHTML=randomQuestion[index].answers[arrAnswrRandom[0]];
      answer2.innerHTML=randomQuestion[index].answers[arrAnswrRandom[1]];
      answer3.innerHTML=randomQuestion[index].answers[arrAnswrRandom[2]];
      answer4.innerHTML=randomQuestion[index].answers[arrAnswrRandom[3]];
         
    // ======================declaration variable rempli================
        var asw1=document.querySelector(".answer1 strong").textContent;
        var asw2=document.querySelector(".answer2 strong").textContent;
        var asw3=document.querySelector(".answer3 strong").textContent;
        var asw4=document.querySelector(".answer4 strong").textContent;
        var asws=[asw1,asw2,asw3,asw4];

        for(let j=0;j<buttonAnswers.length;j++){
          buttonAnswers[j].addEventListener('click',()=>{
                removeClassesAndOpacity(buttonAnswers);
                    if( asws[j].localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                        countScores(score);
                        buttonAnswers[j].classList.add("correct-answer");
                        for(let i=0;i<buttonAnswers.length;i++){
                          buttonAnswers[i].style.pointerEvents='none';
                          if(i!=j){
                            buttonAnswers[i].style.opacity='0';
                          }
                        }
                    }else{
                      buttonAnswers[j].classList.add("incorrect-answer");
                        for(let i=0;i<buttonAnswers.length;i++){
                          buttonAnswers[i].style.pointerEvents='none';
                          if(i!=j){
                            if(randomQuestion[index].answers[arrAnswrRandom[i]].localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                              buttonAnswers[i].classList.add("correct-answer");
                            } else buttonAnswers[i].style.opacity='0';
                          }
                        }
                    }
                next.style.display='block';});
     }
}
}
function removeClassesAndOpacity(array){
  for(let i=0;i<array.length;i++){
    array[i].classList.remove("correct-answer", "incorrect-answer");
    array[i].style.opacity='1';
    array[i].style.pointerEvents='auto';
  }
}  
function progressBarTiming(array){
  array.classList.remove("round-time-bar");
  array.offsetWidth;
  array.classList.add("round-time-bar");
}
function countScores(variable){
    
    variable++;
    return document.querySelector(".lesNotes span").innerHTML=variable;
}
