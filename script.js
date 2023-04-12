let pic = document.getElementById("me");
let projects = document.querySelector(".projects")
let projectLink = document.getElementById("project-link");
let close = document.getElementById("close");
let aboutLink = document.getElementById("about-link");
let middlePanel = document.getElementById("middle");
let aboutMe = document.getElementById("about-me");
let contactLink = document.getElementById("contact-link");
let rightPanel = document.getElementById("right");
let contactPanel = document.getElementById("contact")



function swapPic() {
    pic.src = "./imgs/purpleme.png";
    pic.classList.add("half-fade")
};

function swapBack() {
    pic.src = "./imgs/mervmd.png";
};

projectLink.addEventListener("click", () => {
    projects.classList.add("appear");
});

projects.addEventListener("mouseleave", () => {
    projects.classList.remove("appear");
});

close.addEventListener("click", () => {
    projects.classList.remove("appear");
});

aboutLink.addEventListener("click", () => {
    middlePanel.classList.add("move-down");
    setTimeout(function () {
        aboutMe.classList.add("slide-right");
    }, 300);
    setTimeout(function () {
        projectLink.classList.add("shift-right");
        contactLink.classList.add("shift-right");
    }, 750);
});

aboutLink.addEventListener("mouseleave", () => {
    aboutMe.classList.remove("slide-right");
    projectLink.classList.remove("shift-right");
    contactLink.classList.remove("shift-right");
    setTimeout(function () {
        middlePanel.classList.remove("move-down");
    }, 300);
});

contactLink.addEventListener("click", () => {
    rightPanel.classList.add("squash");
    contactPanel.classList.add("slide-up");
});

contactPanel.addEventListener("mouseleave", () => {
    rightPanel.classList.remove("squash");
    contactPanel.classList.remove("slide-up");
});

function toDiscord() {
    window.open("https://www.discordapp.com/users/834471173076418560");
}

function sendEmail() {
    var email = 'joelemay06@gmail.com';
    var subject = 'Lets Collaborate';
    var emailBody = 'Hello Joe, Lets start something exciting!';
    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody
}

function linkedIn(){
    window.open("https://www.linkedin.com/in/jlemay3/");
}

function gitHub(){
    window.open("https://github.com/joelemm17");
}

