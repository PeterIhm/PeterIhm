function mynavbar(){
    let myparent = document.getElementById("nav");
    let web = document.getElementById("navul");
    let mobile = document.getElementById("navulmobile");

    myparent.innerHTML = "";
    if (screen.width < 1200) {
        myparent.innerHTML = `<div class="topnav">
        <a href="#home" class="active"></a>
        <div id="myLinks" style="dislay:none">
          <a onclick="chooseclose('0',null)" href="#home">HOME</a>
          <a onclick="chooseclose('1',null)" href="#education">EDUCATION</a>
          <a onclick="chooseclose('2',null)" href="#aboutme">ABOUT ME & CV</a>
          <a onclick="chooseclose('3',null)" href="#skills">SKILLS</a>
          <a onclick="chooseclose('4',null)" href="#work">MY WORK</a>
        </div>
        <a class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>`;
    }
    else {
        myparent.innerHTML = `<ul id="navul">
        <li class="work_nav" onclick="switchdiv('4',this)"><a class="notactive" href="#work">MY WORK</a></li>
        <li class="skills_nav" onclick="switchdiv('3',this)"><a class="notactive" href="#skills">SKILLS</a></li>
        <li class="aboutme_nav" onclick="switchdiv('2',this)"><a class="notactive" href="#aboutme">ABOUT ME & CV</a></li>
        <li class="education_nav" onclick="switchdiv('1',this)"><a class="notactive" href="#education">EDUCATION</a></li>
        <li class="home_nav" onclick="switchdiv('0',this)"><a class="active" href="#home">HOME</a></li>
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