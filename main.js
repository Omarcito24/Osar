function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.card');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}







function menu_o() {
   document.getElementById("form-container").classList.add ("see")
   document.getElementById("carousel").classList.add ("caarousel")
   document.getElementById("carousel").classList.remove ("Carousel")
   document.getElementById("bg-img").classList.add ("none")
   document.getElementById("nav-list").classList.add("none")
   document.getElementById("login").classList.add("none")
}

function menu_c() {
    document.getElementById("form-container").classList.remove ("see")
   document.getElementById("carousel").classList.add ("Carousel")
   document.getElementById("carousel").classList.remove ("caarousel")
    document.getElementById("bg-img").classList.remove ("none")
    document.getElementById("nav-list").classList.remove("none")
    document.getElementById("login").classList.remove("none")
 }


function login_o() {
    document.getElementById("login-form").classList.add("see")
}

function login_c() {
    document.getElementById("login-form").classList.remove("see")
    document.getElementById("nav-list").classList.remove("none")
    document.getElementById("login").classList.remove("none")
}

function registrar_c() {
    document.getElementById("registrate-form").classList.remove("see")
    document.getElementById("nav-list").classList.remove("none")
    document.getElementById("login").classList.remove("none")
}

function registrar_o() {
    document.getElementById("registrate-form").classList.add("see")
    document.getElementById("nav-list").classList.add("none")
    document.getElementById("login").classList.add("none")
}

function login_registrar() {
    document.getElementById("login-form").classList.remove("see")
    document.getElementById("registrate-form").classList.add("see")

}

function registrar_login() {
    document.getElementById("registrate-form").classList.remove("see")
    document.getElementById("login-form").classList.add("see")

}

function search() {
    alert("Esta funcionalidad no esta en funcion ahora mismo.")
}

function menu_login() {
    document.getElementById("nav-list").classList.add("none")
}

function login_op() {
    document.getElementById("login-form").classList.add("see")
    document.getElementById("nav-list").classList.add("none")
    document.getElementById("login").classList.add("none")

}

function body_menu() {
    document.getElementById("nav-list").classList.add("none")
    document.getElementById("login").classList.add("none")
}


