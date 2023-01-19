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
function mobileNavbar () {

    const navToggle = document.querySelector('.nav-toggle'); // Otetaan hampulais nappi omaan muuttujaan
    const links = document.querySelector('.links'); // Otetaan linkit omaan muuttujaan
    const navCenter = document.querySelector('.nav-center');
    

    navToggle.addEventListener('click', function() {
        links.classList.toggle('show-links');
    })

}

function welcomePageTransition () {

    
    
    setInterval(function() {
        
        window.location = "http://127.0.0.1:5500/welcome.html"
        
         
    },10000)
    
};