function starField (getSpeed, height,width) {


let canvas = document.getElementById('stars');
canvas.width = width;
canvas.height = height;

let c = canvas.getContext("2d");
let numStars = 150;
let stars = [];
let size  = 1;
let fl = canvas.width;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let speed = getSpeed;
for (let i = 0; i < numStars; i++) {
    stars[i] = new Star();
}


function Star () {
    this.x = Math.random() * canvas.width;
    this.y = Math.random () * canvas.height;
    this.z = Math.random () * canvas.width;


    this.move = function () {
        this.z = this.z-speed;
        if (this.z <= 0) {
            this.z = canvas.width;
        }
    }
    this.show = function () {

        let x,y,s;

        x = (this.x - centerX) * (fl/this.z);
        x = x + centerX;

        y = (this.y - centerY) * (fl/this.z);
        y = y+centerY

        s = size * (fl/this.z);

        c.beginPath();
        c.fillStyle = "white";
        c.arc(x,y,s,0,Math.PI*2);
        c.fill();
    }

};


function draw () {

    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < numStars; i++) {
    stars[i].show();
    stars[i].move();
}
    



}

function update () {
    draw();
    window.requestAnimationFrame(update);
}

update();
}

// Navigaatio palkin toiminta mobiili laitteella



///////////////////////////////////////
//////// Index page transition////////
/////////////////////////////////////

function welcomePageTransition () {

    
    
    setInterval(function() {
        
        window.location = "http://127.0.0.1:5500/welcome.html"
        
         
    },10000)
    
};

// function joka alkaa index sivulla, 
function startCountdown() {
    let welcomeText = document.querySelector('.fade-h2'); // Otetaan welcome teksti talteen omaan muuttujaan
    let height = window.innerHeight;
    let width = window.innerWidth
    let speed = 10; // asetetaan starFiel functiolle nopeus 10
    starField(speed,height,width);

    let counter = 10; // Tehdaan counter muuttuja jota käytetään apuna ennenkuin sivu vaihtuu

    // Tehdään intervalli omaan muuttujaan jotta se voidaan nollata lopuksi
    const interval = setInterval(()=> {
        
        counter--; // Pienennetään laskuria 

        // Kun laskuri on alle 1 niin asetetaan starField functiolle uusi nopeus, vaihdetaan welcome tekstin css tyyli tiedostoja
        if (counter < 1) {
            speed = 300;
            welcomeText.style.color = 'transparent'
            welcomeText.style.textShadow = 'rgb(250, 247, 247) 0 0 40px'
            welcomeText.style.transform = "scale(0)"
            starField(speed,height,width);
        }
        // Kun laskuri on alle 0 niin se ajaa uudelle sivulle meidät.
        if (counter < 0) {
            speed = 300;
            starField(speed,height,width);
            clearInterval(interval); // nollataan interval
            window.location = "http://127.0.0.1:5500/welcome.html"
        }
    },1000)
}

////////////////////////////////////////
///////// Page Transition /////////////
//////////////////////////////////////


// Funktio jolla tulee tekstit näkyviin kun tarpeeksi scrollaa
function scrollAnimation () {
    window.addEventListener('scroll', () => {

        // Otetaan sivusotn row classit omaan muuttujaan
        let contents = document.querySelectorAll('.row');
        //Otetaan windowsin innerheight omaan muuttujaan
        let screenPosition = window.innerHeight;

        // Luupataan row classit läpi forEachloopilla
        contents.forEach((e) => {
            // Otetaan e:n elementteistä tietoa omaan muuttujaan
            let contentPosition = e.getBoundingClientRect().top;

            if(contentPosition < screenPosition) {
                e.classList.add('active');

            } else {
                e.classList.remove('active');
            }
        })
    })
}


// let transition_el = document.querySelector('.transition')
function main () {
    
    
    // Index sivulla ollessa se käynnistää starCountdown function
    if ( window.location.href === "http://127.0.0.1:5500/") {
        

        
        startCountdown();
        
     
    // muilla sivuilla käynnistyy sivunvaihto ja navbar functiot
    } else {
        
        
        
        
        
    }

    scrollAnimation();
    
    

    
}



main();
