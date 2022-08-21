const shapes = [
`<svg width="100%" height="100%" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke="rgba(255, 255, 255, 0.2)" stroke-width="15" fill="transparent" />
</svg>`
, 
`<svg width="100%" height="100%" viewBox="0 0 100 100">
<rect width="100" height="100" stroke="tomato" stroke-width="25" fill="transparent" />
</svg>`
, 
`<svg width="100%" height="100%" viewBox="-10 -10 110 110">
<polyline points="0,30 20,10 40,30 60,10 80,30 60,50 80,70 60,90 40,70 20,90 0,70 20,50 0,30 20,10" stroke="rgba(255, 255, 255, 0.2)" stroke-width="10" fill="transparent" />
</svg>`
,
`<svg width="100%" height="100%" viewBox="0 0 100 100">
<polygon points="50,20 13,90 87,90"  stroke="SpringGreen" stroke-width="10" fill="transparent" />
</svg>`
];

function setup(){
    var shapelist = document.getElementById("shapes");
    var listitems = "";
    var shapeindex = 0;

    for (let index = 0; index < 10; index++) {

        if(shapeindex > shapes.length - 1){
            shapeindex = 0;
        }
                   
        listitems += "<li class=\"shapesize\">" + shapes[shapeindex] + "</li>";

        shapeindex ++;
    }

    shapelist.innerHTML = listitems;
}