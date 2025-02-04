$(".linkedin").on("click",function(){
    window.open("https://www.linkedin.com/in/k-shanmukha-vamshi-92b7161a9/")
});

$(".resume").on("click",function(){
    window.open("https://drive.google.com/file/d/18LJERH-CQdjI8Al5EqwGQpicBttzfq2K/view?usp=sharing")
});

function ShowTooltip(className)
{
    $(className+" > .tool-tip").css("visibility","visible")
}

function HideTooltip(className)
{
    $(className+" > .tool-tip").css("visibility","hidden")
}

$(".nav-element").mouseenter(function () { 
    
    // $(".nav-main").css("width","270px")
    $(this).animate({
        width: "60px",
        height: "60px",
        left: "35px", //"25px"
        top: "10px",
         } ,400,"swing");

    
    $(".nav-bar").animate({
        width : "270px"
    },400, "swing");

    var clsName = "."+$(this).attr("class").split(" ")[1];
    ShowTooltip(clsName);
});

$(".nav-element").mouseleave(function () { 
    var clsName = "."+$(this).attr("class").split(" ")[1];
    HideTooltip(clsName);
    $(this).stop(false);
    $(this).animate({
       width: "40px",
       height: "40px",
       top: "25px",
    left: "25px" // "25px"
        }, 400 ,"swing");
    
    $(".nav-bar").stop(true);
    $(".nav-bar").animate({
        width : "250px"
    },400, "swing");

    
});

$( document ).ready(function() {
    
});