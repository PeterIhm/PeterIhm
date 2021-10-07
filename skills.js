var jsonRight =[{skill: "Unity", Rating: 90},
                {skill: "GIMP", Rating: 90},
                {skill: "Krita", Rating: 80},
                {skill: "DATABASE (SQL, NoSQL)", Rating: 80},
                {skill: "AUTODESK Maya", Rating: 70},
                {skill: "Unreal", Rating: 40},
                {skill: "Blender", Rating: 20}                
            ];

var jsonLeft = [{skill: "C#", Rating: 90},
                {skill: "Java", Rating: 80},
                {skill: "HTML", Rating: 70},
                {skill: "CSS", Rating: 70},   
                {skill: "JavaScript", Rating: 50},    
                {skill: "BASIC", Rating: 40},         
                {skill: "C++", Rating: 30}                
            ];

function skills(){

    var myhtml = document.getElementById("skillingleft");
    var myhtml2 = document.getElementById("skillingright");

    for (let index = 0; index < jsonLeft.length; index++) {
        var a = document.createElement("div");
        a.className = "rank";
        a.innerHTML = '<div class="rank"><p><span>'+ jsonLeft[index].skill +'</span>'
        + '<span class="value">' + jsonLeft[index].Rating + '%</span></p></div>';
        var b = document.createElement("div")
        b.className = "level";
        var c = document.createElement("div")
        c.className = "ranklevel";
        c.style.width = jsonLeft[index].Rating + "%";
        b.appendChild(c)
    
        myhtml.appendChild(a);
        myhtml.appendChild(b);        
    }

    for (let index = 0; index < jsonRight.length; index++) {
        var a = document.createElement("div");
        a.className = "rank";
        a.innerHTML = '<div class="rank"><p><span>'+ jsonRight[index].skill +'</span>'
        + '<span class="value">' + jsonRight[index].Rating + '%</span></p></div>';

        var b = document.createElement("div")
        b.className = "level";
        var c = document.createElement("div")
        c.className = "ranklevel";
        c.style.width = jsonRight[index].Rating + "%";
        b.appendChild(c)

        
    
        myhtml2.appendChild(a);
        myhtml2.appendChild(b);        
    }
}

/*
var games = [{name: "Vital", Descirption : "This game was created during the LBS Game Awards which took place at my school every year. It was a competetive way of showing us students on what it ment to be a Game Developer. The game we created to participate with was a fighting game similar to Super Smash Bros.", 
                                role: ["Programmer"], 
                                link: "https://www.indiedb.com/games/vitalgame",
                                linkname: "indiedb.com" ,
                                img: "./games/Vital.png"},
            {name: "City of Duelists", Descirption : "Every project forward were made during my time at YRGO Yrkeshögskolan. This was the first project we had. the group consists exclusively of programmers. I jumped in as a 2d artist and Programmer. It was my first project where i had to create 2d sprites and animation",
                                role: ["Programmer ","2D Artist"], 
                                link: "https://yrgo-game-creator.itch.io/agent-gone-fishing", 
                                linkname: "itch.io",
                                img: "./games/cod.png"},
            {name: "Abiela's Journey", Descirption : "This project is one of my favorits. It was created during my time at YRGO Yrkeshögskolan. We were a group of 4 programmers and 6 artist. We had huge success during the development phase with an alpha done in less than 3 week. Unfortunately the only thing thats left of this project is a badly rendered trailer of our alpha.", 
                                role: ["Lead Programmer", "3D Artist"], 
                                link: "https://www.youtube.com/watch?v=d7HEFKSRuX8&ab_channel=PeterI", 
                                linkname: "youtube.com" ,
                                img: "./games/aj.png"},
            {name: "Medival Archer", Descirption : "This was our first VR game we created. We were handed some 3d assets to use. My role in this whole project was to create the function for the players bow with modelling and rigging plus writing the script for it.", 
                                role: ["Programmer", "3D Artist"], 
                                link: "https://yrgo-game-creator.itch.io/medieval-archer", 
                                linkname: "itch.io",
                                img: "./games/ma.png"},
            {name: "Agent Gone Fishing", Descirption : "This game was created by my friends group. I mainly helped them out with moddeling some items that they needed like a fishing rod and so on.",
                                role: ["3D Artist"], 
                                link: "https://yrgo-game-creator.itch.io/agent-gone-fishing", 
                                linkname: "itch.io",
                                img: "./games/agf.png"}];


function loaddata(){

    for (let index = 0; index < games.length; index++) {
        var a = document.createElement("div");
        var img = document.createElement("img");
        var b = document.createElement("div");
        var c = document.createElement("h1");
        var d = document.createElement("p");
        var e = document.createElement("h1");
        var g = document.createElement("a");

        a.width = "60%";
        a.className = "game";
        img.src = games[index].img;
        c.innerHTML = games[index].name;
        d.innerHTML = games[index].Descirption;
        e.className = "role";
        e.innerHTML = "Role"

        g.href = games[index].link;
        g.innerHTML = games[index].linkname;
        g.target = "_blank";

        a.appendChild(img);
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);

        for (let i = 0; i < games[index].role.length; i++) {
            var f = document.createElement("p");
            f.className = "rolename";
            b.appendChild(f);
            f.innerHTML = games[index].role[i];
        }
        

        b.appendChild(g);
        a.appendChild(b);
        projects.appendChild(a);
    }
}*/
