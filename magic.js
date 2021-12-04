var divs = ["home", "education", "aboutme", "skills", "work", "contactme"];

function MessageMailSend(){
    alert("Message Send!")
}

function switchdiv(b, buttonhighlight){  
  
  var c = parseInt(b);

  for (let index = 0; index < divs.length; index++) {
      if(c == index){         
        console.log("hello!")
        document.getElementById(divs[index]).classList.add("smoothtransto") 
        document.getElementById(divs[index]).classList.remove("smoothtransaway") 

        setTimeout(function () {
            document.getElementById(divs[index]).style.display = "block";
        }, 400);
      }                   
      else if(c != index){
        document.getElementById(divs[index]).classList.add("smoothtransaway")
        document.getElementById(divs[index]).classList.remove("smoothtransto")  

        setTimeout(function () {
            document.getElementById(divs[index]).style.display = "none";
        }, 400);
      }
  } 

  var temp = document.getElementById("navul");
  try{ 
  for (let index = 0; index < temp.childNodes.length; index++) {
    if(temp.childNodes.item(index).childNodes.item(0) != null)
    temp.childNodes.item(index).childNodes.item(0).className = "notactive";
  }

  if(buttonhighlight != null)
  buttonhighlight.childNodes.item(0).className = "active";
  }
  catch{}
}

function start(){
  mynavbar();

  setTimeout(function () {
    switchdiv("0", document.getElementsByClassName("home_nav").item(0));
  }, 400);

  skills();
  workload();
}