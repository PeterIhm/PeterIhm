var divs = ["home", "aboutme", "education", "skills", "work", "contactme"];

function switchdiv(current, buttonhighlight){  
  for (let index = 0; index < divs.length; index++) {
    if(current == divs[index]){
      document.getElementById(divs[index]).className = "smoothtrans";
      document.getElementById(divs[index]).style.display = "block";      
    }
    else{
      document.getElementById(divs[index]).className = "smoothtransdis";
      
      setTimeout(() => {  document.getElementById(divs[index]).style.display = "none"; }, 500);
    }
  }

  var temp = document.getElementById("navul");

  for (let index = 0; index < temp.childNodes.length; index++) {
    if(temp.childNodes.item(index).childNodes.item(0) != null)
    temp.childNodes.item(index).childNodes.item(0).className = "notactive";
  }

  buttonhighlight.childNodes.item(0).className = "active";
}

function start(){
  switchdiv("home", document.getElementById("navul").childNodes.item(9).childNodes.item(0));  
  skills();

  document.getElementById("navul").childNodes.item(9).childNodes.item(0).className = "active";

  workload();
}