var blownUp = false;
$.easing.bounce = function(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
var defaultW = "310px";
var defaultH = "65px";

var defaultLW = "305px";
var defaultLH = "60px";

var enlargedW = "590px";
var enlargedH = "500px";

var enlargedMW = "595px";
var enlargedMH = "505px";

var easingEffect = "swing";
var blowUpDuration = 400;

function TileImagesBlowUp(tile)
{
    $(tile).animate({
        width: enlargedMW,
        height: enlargedMH,
         } ,
         {
            duration: blowUpDuration,
            easing : easingEffect,
            complete : function(){
                $(this).animate({
                    width: enlargedW,
                    height: enlargedH
                },blowUpDuration/2,easingEffect)
            }
         }
            );
}

function TileImagesBlowDown(tile)
{
    $(tile).animate({
        width: defaultLW,
        height: defaultLH,
         } , 
         {
            duration : blowUpDuration,
            easing: easingEffect,
            complete : function(){
                $(this).animate({
                    width: defaultW,
                    height : defaultH
                },blowUpDuration,easingEffect)
            }
         });    
}

function AnimateImg1()
{
    $(".img1").animate({
        left : "300px",
        top: "-50px",
        opacity:"1"
    })
}

$(".project-floating-tile").on("click",function(){
    $(this).removeClass("highlight");
    if(blownUp)
    {
        TileImagesBlowDown(this);
        $(this).removeClass("dim-background");
        blownUp = false;
    }
    else
    {
        TileImagesBlowUp(this);
        // AnimateImg1();
        $(this).addClass("dim-background");
        blownUp = true;
    }       
});

$(".content").on("click",function(){
    if(blownUp)
    {
        TileImagesBlowDown(".project-floating-tile");
        $(".project-floating-tile").removeClass("dim-background");
        blownUp = false;
    }
});

$(".project-floating-tile").mouseenter(function () { 
    if(!blownUp)
        $(this).addClass("highlight");
});

$(".project-floating-tile").mouseleave(function () {
    if(!blownUp)
        $(this).removeClass("highlight");
});