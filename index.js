var button = document.querySelectorAll(".drum");
var n = button.length;

for (var i = 0; i < n; i++)
    button[i].addEventListener("click", handleClick);

function handleClick() {
    var x = this.innerHTML;

    makeSound(x);

    makeAnimation(x);

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


document.addEventListener("keypress", function (event) {
    // console.log(eFvent.code);
    var x = event.key;

    x = x.toLowerCase();

    makeSound(x);
    makeAnimation(x);

});

function makeSound(x) {
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


function makeAnimation(x) {
    var button = document.querySelector("." + x);

    button.classList.add("pressed");

    setTimeout(function()
    {
        button.classList.remove("pressed");
    },100);
}