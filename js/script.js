//==============style bar time=======================
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
  // ==========================initialisation des variables=================
   
    boxQuestion.innerHTML='';
    answer1.innerHTML='';
    answer2.innerHTML='';
    answer3.innerHTML='';
    answer4.innerHTML='';
    let index=0;

  // =================== Appel function display==========================
  display(index);
  index++;
  next.addEventListener('click', ()=>{
      btnAnswer1.classList.remove("correct-answer", "incorrect-answer");
      btnAnswer2.classList.remove("correct-answer", "incorrect-answer");
      btnAnswer3.classList.remove("correct-answer", "incorrect-answer");
      btnAnswer4.classList.remove("correct-answer", "incorrect-answer");
        for(let i=0;i<buttonAnswers.length;i++){
          buttonAnswers[i].style.opacity='1';
        }

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
    console.log(randomQuestion[index].trueAnswer[0]);
    console.log(asw1);
    console.log(asw1.localeCompare(randomQuestion[index].trueAnswer[0]));

        btnAnswer1.addEventListener('click',()=>{
                  btnAnswer1.classList.remove("correct-answer", "incorrect-answer");
                    if( asw1.localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                        btnAnswer1.classList.add("correct-answer");
                    }else{
                      btnAnswer1.classList.add("incorrect-answer");
                        for(let i=1;i<=3;i++){
                            if(randomQuestion[index].answers[arrAnswrRandom[i]].localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                              buttonAnswers[i].classList.add("correct-answer");
                            } else buttonAnswers[i].style.opacity='0';
                        }
                    }
          });
        btnAnswer2.addEventListener('click',()=>{
                  btnAnswer2.classList.remove("correct-answer", "incorrect-answer");
                    if( asw2.localeCompare(randomQuestion[index].trueAnswer[0]) == 0){

                      btnAnswer2.classList.add("correct-answer");
                    }else{
                      btnAnswer2.classList.add("incorrect-answer");
                      for(let i=0;i<=3 && i!=1;i++){
                        if(randomQuestion[index].answers[arrAnswrRandom[i]].localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                          buttonAnswers[i].classList.add("correct-answer");                      
                        } else buttonAnswers[i].style.opacity='0';
                    }
                    }
          });
          btnAnswer3.addEventListener('click',()=>{
            btnAnswer3.classList.remove("correct-answer", "incorrect-answer");
              if( asw3.localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                btnAnswer3.classList.add("correct-answer");
              }else{
                btnAnswer3.classList.add("incorrect-answer");
                for(let i=0;i<=3 && i!=2;i++){
                  if(randomQuestion[index].answers[arrAnswrRandom[i]].localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                    buttonAnswers[i].classList.add("correct-answer");
                  }  else buttonAnswers[i].style.opacity='0'; 
              }
              }
           });
          btnAnswer4.addEventListener('click',()=>{
            btnAnswer4.classList.remove("correct-answer", "incorrect-answer");
              if( asw4.localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                btnAnswer4.classList.add("correct-answer");
              }else{
                btnAnswer4.classList.add("incorrect-answer");
                for(let i=0;i<3;i++){
                  if(randomQuestion[index].answers[arrAnswrRandom[i]].localeCompare(randomQuestion[index].trueAnswer[0]) == 0){
                    buttonAnswers[i].classList.add("correct-answer");
                  }else buttonAnswers[i].style.opacity='0';
              }
              }
          });
}
}
