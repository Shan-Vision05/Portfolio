// Navigation scroll functions
$(".home").on("click", function() {
    document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' });
});

$(".about").on("click", function() {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});

$(".skills").on("click", function() {
    document.getElementById('skills-section').scrollIntoView({ behavior: 'smooth' });
});

$(".experience").on("click", function() {
    document.getElementById('timeline-section').scrollIntoView({ behavior: 'smooth' });
});

$(".projects").on("click", function() {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
});

$(".contact").on("click", function() {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});

function ShowTooltip(className) {
    $(className + " > .tool-tip").css("visibility", "visible");
}

function HideTooltip(className) {
    $(className + " > .tool-tip").css("visibility", "hidden");
}

$(".nav-element").mouseenter(function() {
    // Enlarge the hovered element (grows upward since bottom is aligned)
    $(this).animate({
        width: "55px",
        height: "55px",
        marginLeft: "6px",
        marginRight: "6px"
    }, 300, "swing");
    
    // Expand the background bar
    $(".nav-bar").animate({
        width: "330px"
    }, 300, "swing");

    var clsName = "." + $(this).attr("class").split(" ")[1];
    ShowTooltip(clsName);
});

$(".nav-element").mouseleave(function() {
    var clsName = "." + $(this).attr("class").split(" ")[1];
    HideTooltip(clsName);
    
    $(this).stop(true);
    $(this).animate({
        width: "40px",
        height: "40px",
        marginLeft: "0px",
        marginRight: "0px"
    }, 300, "swing");

    $(".nav-bar").stop(true);
    $(".nav-bar").animate({
        width: "300px"
    }, 300, "swing");
});

$(document).ready(function() {
    // Initialize navbar
});
