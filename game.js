//var cal = "plus";
var open = "false";
var p1 = localStorage.getItem("p1-username");
var p2 = localStorage.getItem("p2-username");
var iou = 0;
var itu = 0;
var p1_score = 0;
var p2_score = 0;
var question_turn = p1;
var answer_turn = p2;
let first_num = 0;
let second_num = 0;
//let plus_num = "0";
//let minus_num = "0";
//let multiply_num = "0";
//let divide_num = "0";
let real_ans = "0;"
//var sign = "+";
//var plusing = true;
//var subbing = false;
//var multiplying = false;
//var dividing = false;
var oren = false;
function load()
{
document.getElementById("p1-score").innerHTML = p1 + " : " + p1_score;
document.getElementById("p2-score").innerHTML = p2 + " : " + p2_score;
document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;
}
function dk()
{
    x = document.getElementById("utem");
    if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
    }
}
function plusI()
{
  document.getElementById("ob").style.display = "block";
  document.getElementById("tb").style.display = "none";
  document.getElementById("thb").style.display = "none";
  document.getElementById("fb").style.display = "none";
  document.getElementById("incu").innerHTML = "+";
  document.getElementById("utem").style.display = "none";
}
function substractI()
{
  document.getElementById("ob").style.display = "none";
  document.getElementById("tb").style.display = "block";
  document.getElementById("thb").style.display = "none";
  document.getElementById("fb").style.display = "none";
  document.getElementById("incu").innerHTML = "-";
  document.getElementById("utem").style.display = "none";
}
function multiplyI()
{
  document.getElementById("ob").style.display = "none";
  document.getElementById("tb").style.display = "none";
  document.getElementById("thb").style.display = "block";
  document.getElementById("fb").style.display = "none";
  document.getElementById("incu").innerHTML = "×";
  document.getElementById("utem").style.display = "none";
}
function divideI()
{
  document.getElementById("ob").style.display = "none";
  document.getElementById("tb").style.display = "none";
  document.getElementById("thb").style.display = "none";
  document.getElementById("fb").style.display = "block";
  document.getElementById("incu").innerHTML = "÷";
  document.getElementById("utem").style.display = "none";
}
function submitplus()
{
  
  if(document.getElementById("one_num").value.length == 0 || document.getElementById("two_num").value.length == 0)
{
    alert("Make sure you have filled out both numbers")
}
 else
 { 
  first_num = document.getElementById("one_num").value;
  second_num = document.getElementById("two_num").value;
  document.getElementById("one_num").value = "";
    document.getElementById("two_num").value = "";
  real_ans = parseFloat(first_num) + parseFloat(second_num);

  document.getElementById("output").style.display = "block";
  document.getElementById("question").innerHTML = first_num + " + " + second_num;
  document.getElementById("numDiv").style.display = "none";     
  oren = true;
}
  

}
function submitsubstract()
{
  if(document.getElementById("one_num").value.length == 0 || document.getElementById("two_num").value.length == 0)
  {
    alert("Make sure you have filled out both numbers")
  }
   else
   { 
    first_num = document.getElementById("one_num").value;
    second_num = document.getElementById("two_num").value;
    document.getElementById("one_num").value = "";
    document.getElementById("two_num").value = "";
    real_ans = parseFloat(first_num) - parseFloat(second_num);
    document.getElementById("output").style.display = "block";
    document.getElementById("question").innerHTML = first_num + " - " + second_num;
    document.getElementById("numDiv").style.display = "none";
    oren = true;
  }

}
function submitmultiply()
{
  if(document.getElementById("one_num").value.length == 0 || document.getElementById("two_num").value.length == 0)
  {
    alert("Make sure you have filled out both numbers")
  }
   else
   { 
    first_num = document.getElementById("one_num").value;
    second_num = document.getElementById("two_num").value;
    document.getElementById("one_num").value = "";
    document.getElementById("two_num").value = "";
    real_ans = parseFloat(first_num) * parseFloat(second_num);
    document.getElementById("output").style.display = "block";
    document.getElementById("question").innerHTML = first_num + " × " + second_num;
    document.getElementById("numDiv").style.display = "none";
    oren = true;
  }

}
function submitdivide()
{
  if(document.getElementById("one_num").value.length == 0 || document.getElementById("two_num").value.length == 0)
  {
    alert("Make sure you have filled out both numbers")
  }
   else
   { 
    first_num = document.getElementById("one_num").value;
    second_num = document.getElementById("two_num").value;
    document.getElementById("one_num").value = "";
    document.getElementById("two_num").value = "";
    real_ans = parseFloat(first_num) / parseFloat(second_num);
    document.getElementById("output").style.display = "block";
    document.getElementById("question").innerHTML = first_num + " ÷ " + second_num;
    document.getElementById("numDiv").style.display = "none";
    oren = true;
  }
}
function check()
{
  an = document.getElementById("answer_input").value;
  document.getElementById("output").style.display = "none";
  document.getElementById("numDiv").style.display = "block";
  document.getElementById("answer_input").value = "";
  oren = false;
  
  if (real_ans == an)
  {
    if (answer_turn == p1)
    {
      p1_score = p1_score + 1;
      document.getElementById("p1-score").innerHTML = p1 + " : " + p1_score;
      
    } else
    {
      p2_score = p2_score + 1;
      document.getElementById("p2-score").innerHTML = p2 + " : " + p2_score;
    
    }
  }
  if (question_turn == p1)
  {
    question_turn = p2;
    answer_turn = p1;
    document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;
    document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;
  } else 
  {
    question_turn = p1;
    answer_turn = p2;
    document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;
    document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;
  }

}
addEventListener("keydown", function (e)
{
  if (e.key === "Enter") {  
    an = document.getElementById("answer_input").value;
    document.getElementById("output").style.display = "none";
    document.getElementById("numDiv").style.display = "block";
    document.getElementById("answer_input").value = "";
 
    
    if (real_ans == an)
    {
      if (answer_turn == p1)
      {
        p1_score = p1_score + 1;
        document.getElementById("p1-score").innerHTML = p1 + " : " + p1_score;
        
      } else
      {
        p2_score = p2_score + 1;
        document.getElementById("p2-score").innerHTML = p2 + " : " + p2_score;
      
      }
    }
    if (question_turn == p1)
    {
      question_turn = p2;
      answer_turn = p1;
      document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;
      document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;
    } else 
    {
      question_turn = p1;
      answer_turn = p2;
      document.getElementById("question_turn").innerHTML = "Question Turn - " + question_turn;
      document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answer_turn;
      oren = false;
    }
  }
})