var button = document.querySelectorAll(".drum");
var n = button.length;

for (var i = 0; i < n; i++)
    button[i].addEventListener("click", handleClick);

function handleClick() {
    var x = this.innerHTML;

    switch (x) {
        case "w":
            var audio = new Audio('sounds/w.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/a.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/s.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/d.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/j.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/k.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/l.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


document.addEventListener("keypress", function(event){
    // console.log(eFvent.code);
    var x = event.code;
    switch (x) {
        case "KeyW":
            var audio = new Audio('sounds/w.mp3');
            audio.play();
            break;

        case "KeyA":
            var audio = new Audio('sounds/a.mp3');
            audio.play();
            break;

        case "KeyS":
            var audio = new Audio('sounds/s.mp3');
            audio.play();
            break;
        case "KeyD":
            var audio = new Audio('sounds/d.mp3');
            audio.play();
            break;
        case "KeyJ":
            var audio = new Audio('sounds/j.mp3');
            audio.play();
            break;
        case "KeyK":
            var audio = new Audio('sounds/k.mp3');
            audio.play();
            break;
        case "KeyL":
            var audio = new Audio('sounds/l.mp3');
            audio.play();
            break;
        default:
            break;
    }
});
