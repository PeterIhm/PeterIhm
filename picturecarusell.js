let imageInfo = [
    {title: "Vital",                year: "2015",       link: "https://www.indiedb.com/games/vitalgame",                linkname: "IndieDB",    image: "Vital.png"}, 
    {title: "Abiela's Journey",     year:"2017",        link:"https://www.youtube.com/watch?v=d7HEFKSRuX8",             linkname:"Youtube",     image: "abiela.png"}, 
    {title: "City of Duelists",     year:"2017",        link:"https://yrgo-game-creator.itch.io/city-of-duelist",       linkname:"Itch.io",     image: "cod.png"}, 
    {title: "Medival Archer",       year:"2018",        link:"https://yrgo-game-creator.itch.io/medieval-archer",       linkname:"Itch.io",     image: "ma.png"}, 
    {title: "Volvo 360c",        year:"2017-2018",   link:"https://www.youtube.com/watch?v=H5KNPQT72FA&ab_channel=VolvoCars",    linkname:"Youtube",     image: "360c.png"}, 
]

var selectedpic = 0;

function init(){
    selectedpic = 0;
}

function ImageSelection(){
    const title = document.getElementById("description-title");
    const year = document.getElementById("description-year");
    const link = document.getElementById("description-link");
    const picture = document.getElementById("description-image");
    
    title.innerHTML = imageInfo[selectedpic].title;
    year.innerHTML = imageInfo[selectedpic].year;
    link.href = imageInfo[selectedpic].link;
    link.innerHTML = imageInfo[selectedpic].linkname;
    picture.src = imageInfo[selectedpic].image;
}

function Next(){
    selectedpic ++;
    if(selectedpic > imageInfo.length - 1)
    selectedpic = 0;

    ImageSelection();
}

function Previous(){
    selectedpic --;

    if(selectedpic < 0)
    selectedpic = imageInfo.length - 1;

    ImageSelection();
}

class ImageInfo{
    constructor(title, year, link,linkname, image) {
        this.title = title;
        this.year = year;
        this.link = link;
        this.linkname = linkname;
        this.image = image;
      }
}