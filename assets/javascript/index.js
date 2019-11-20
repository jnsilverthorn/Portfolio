var config = {
    apiKey: "AIzaSyAoAjOxjSWNgNXPdgsk3qXGogv7-WV4ESo",
    authDomain: "portfolio-d2735.firebaseapp.com",
    databaseURL: "https://portfolio-d2735.firebaseio.com",
    projectId: "portfolio-d2735",
    storageBucket: "portfolio-d2735.appspot.com",
    messagingSenderId: "1089230156015",
    appId: "1:1089230156015:web:432cab140bbe0b12376b1a"
}

firebase.initializeApp(config);

var db = firebase.firestore();

const aboutGrab = $("#aboutNav");
const portfolioGrab = $("#portfolioNav");
const contactGrab = $("#contactNav");
const resumeGrab = $("#resumeInfo");

$(".container1").css("display", "block");

aboutGrab.on("click", function () {
    $(".container1").css("display", "block");
    $(".container2").css("display", "none");
    $(".container3").css("display", "none");
    $(".container4").css("display", "none");
})

portfolioGrab.on("click", function () {
    $(".container2").css("display", "block");
    $(".container1").css("display", "none");
    $(".container3").css("display", "none");
    $(".container4").css("display", "none");
})

contactGrab.on("click", function () {
    $(".container3").css("display", "block");
    $(".container2").css("display", "none");
    $(".container1").css("display", "none");
    $(".container4").css("display", "none");
})

resumeGrab.on("click", function () {
    $(".container3").css("display", "none");
    $(".container2").css("display", "none");
    $(".container1").css("display", "none");
    $(".container4").css("display", "block");
})

$("#headerName").mouseenter(function () {
    $("#headerName").text("").append(
        "<a href='https://github.com/jnsilverthorn' target='_blank'><img class='iconImg' alt='github' src='assets/images/GitHub.png' width=35px height=35px></a>" +
        "<a href='https://www.linkedin.com/in/james-silverthorn-104b01192/' target='_blank'><img class='iconImg' alt='linkedIN' src='assets/images/linked.png' width=35px height=35px></a>" +
        "<a href='https://www.facebook.com/james.silverthorn.5' target='_blank'><img class='iconImg' alt='facebook' src='assets/images/fb.png' width=35px height=35px></a>" +
        "<a href='https://www.instagram.com/jnsilverthorn/' target='_blank'><img class='iconImg' alt='insta' src='assets/images/instagram.jpg' width=35px height=35px></a>"
    )
}).mouseleave(function () {
    $("#headerName").text("James Silverthorn")
})