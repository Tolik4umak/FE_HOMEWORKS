let navbar = document.getElementById("navbar");

window.onscroll = function navBarColorChange() {
    if (document.documentElement.clientWidth > 615) {
        if (document.documentElement.scrollTop > 500) {
            navbar.style.backgroundColor = "var(--textcolorblue)"
        } else {
            navbar.style.backgroundColor = "#0000"
        }
    } else {
        if (document.documentElement.scrollTop > 300) {
            navbar.style.backgroundColor = "var(--textcolorblue)"
        } else {
            navbar.style.backgroundColor = "#0000"
        }

    }


};



let arrowRight = document.getElementById("arrow_right");
let arrowLeft = document.getElementById("arrow_left");
let photos = document.getElementById("photos");

let position = 0;



let room = document.getElementById("room");
let roomDeg = 0;


arrowRight.onclick = function () {
    roomDeg -= 60;
    room.style.transform  = `rotateY(${roomDeg}deg)`;

    console.log(position);
    position -= 100;
    console.log(position);
    if (position<-300){
        photos.style.transform  = `translate(${0}%)`;
        position = 0;
    } else{
        photos.style.transform  = `translate(${position}%)`;
    }
   

}
arrowLeft.onclick = function () {
    roomDeg += 60;
    room.style.transform  = `rotateY(${roomDeg}deg)`;


    console.log(position);
    position += 100;
    console.log(position);

    if (position>0){
        photos.style.transform  = `translate(${-300}%)`;
        position = -300;
    } else{
        photos.style.transform  = `translate(${position}%)`;
    }
   
    
}

