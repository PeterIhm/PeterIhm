function mynavbar(){
    let myparent = document.getElementById("nav");
    let web = document.getElementById("navul");
    let mobile = document.getElementById("navulmobile");

    myparent.innerHTML = "";
    if (screen.width < 1200) {
        myparent.innerHTML = `<div class="topnav">
        <a href="#home" class="active"></a>
        <div id="myLinks" style="dislay:none">
          <a onclick="chooseclose('home',null)" href="#home">HOME</a>
          <a onclick="chooseclose('education',null)" href="#education">EDUCATION</a>
          <a onclick="chooseclose('aboutme',null)" href="#aboutme">ABOUT ME & CV</a>
          <a onclick="chooseclose('skills',null)" href="#skills">SKILLS</a>
          <a onclick="chooseclose('work',null)" href="#work">MY WORK</a>
        </div>
        <a class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>`;
    }
    else {
        myparent.innerHTML = `<ul id="navul">
        <li onclick="switchdiv('work',this)"><a class="notactive" href="#work">MY WORK</a></li>
        <li onclick="switchdiv('skills',this)"><a class="notactive" href="#skills">SKILLS</a></li>
        <li onclick="switchdiv('aboutme',this)"><a class="notactive" href="#aboutme">ABOUT ME & CV</a></li>
        <li onclick="switchdiv('education',this)"><a class="notactive" href="#education">EDUCATION</a></li>
        <li onclick="switchdiv('home',this)"><a class="active" href="#home">HOME</a></li>
        </ul>`;

    }
}

function chooseclose(a, b){
    let mylink = document.getElementById("myLinks");

    mylink.style.display = "none";
    switchdiv(a, b);
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}