function login()
{
    a = document.getElementById("p1-name").value;
    b = document.getElementById("p2-name").value;
    if(document.getElementById("p1-name").value.length == 0 || document.getElementById("p2-name").value.length == 0)
        {
            alert("Make sure you have filled out both usernames")
        } else if (a === b)
        {
            alert("Both usernames can't be same")
        }
         else
        {
            p1 = document.getElementById("p1-name").value; 
            p2 = document.getElementById("p2-name").value;
            localStorage.setItem("p1-username", p1);
            localStorage.setItem("p2-username", p2);
            location.href = 'game.html'; 
        }
}
addEventListener("keydown", function (e)
{
    a = document.getElementById("p1-name").value;
    b = document.getElementById("p2-name").value;
    if (e.key === "Enter") {  
        if(document.getElementById("p1-name").value.length == 0 || document.getElementById("p2-name").value.length == 0)
        {
            alert("Make sure you have filled out both usernames")
        } else if (a === b)
        {
            alert("Both usernames can't be same")
        }
         else
        {
            p1 = document.getElementById("p1-name").value; 
            p2 = document.getElementById("p2-name").value;
            localStorage.setItem("p1-username", p1);
            localStorage.setItem("p2-username", p2);
            location.href = 'game.html'; 
        }
    }
  });