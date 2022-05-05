var open = "false";
var p1 = localStorage.getItem("p1-username");
var p2 = localStorage.getItem("p2-username");
var iou = 0;
var itu = 0;
var p1_score = 0;
var p2_score = 0;
var question_turn = p1;
var answer_turn = p2;
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
    
  }
}