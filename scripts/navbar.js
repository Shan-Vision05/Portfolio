// Navigation scroll functions with active state
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

// Update active nav element based on scroll position
function updateActiveNav() {
    const sections = [
        { id: 'home-section', nav: '.home' },
        { id: 'about-section', nav: '.about' },
        { id: 'skills-section', nav: '.skills' },
        { id: 'timeline-section', nav: '.experience' },
        { id: 'projects-section', nav: '.projects' },
        { id: 'contact-section', nav: '.contact' }
    ];

    const scrollPosition = $(window).scrollTop() + 100;

    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            const offsetTop = $(element).offset().top;
            const offsetBottom = offsetTop + $(element).outerHeight();

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                $('.nav-element').removeClass('active');
                $(section.nav).addClass('active');
            }
        }
    });
}

// Throttle function to limit scroll event calls
function throttle(func, wait) {
    let timeout;
    return function() {
        if (!timeout) {
            timeout = setTimeout(() => {
                func();
                timeout = null;
            }, wait);
        }
    };
}

function ShowTooltip(className) {
    $(className + " > .tool-tip").css("visibility", "visible");
}

function HideTooltip(className) {
    $(className + " > .tool-tip").css("visibility", "hidden");
}

$(".nav-element").mouseenter(function() {
    // Enlarge the hovered element (grows to the left since right is aligned)
    $(this).animate({
        width: "55px",
        height: "55px",
        marginTop: "6px",
        marginBottom: "6px"
    }, 300, "swing");
    
    // Expand the background bar vertically
    $(".nav-bar").animate({
        height: "330px"
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
        marginTop: "0px",
        marginBottom: "0px"
    }, 300, "swing");

    $(".nav-bar").stop(true);
    $(".nav-bar").animate({
        height: "300px"
    }, 300, "swing");
});

$(document).ready(function() {
    // Initialize navbar
    updateActiveNav();
    
    // Update active state on scroll (throttled to improve performance)
    $(window).on('scroll', throttle(updateActiveNav, 100));
    
    // Show navbar after loader is hidden
    setTimeout(function() {
        $('.nav-bar').addClass('show');
        $('.nav-main').addClass('show');
    }, 2000);
});
