var index = "../images/imageindex.txt";
var links = [];
var imageNumber = 0;

/******************************************************************************
 * Loads all image names into an array
 *****************************************************************************/
var makeLinks = function() {

    //Get all image names from index file
    var request = new XMLHttpRequest();
    request.open("GET",index,false);
    request.send();
    var response = request.responseText;

    //Convert the image names into an array of paths
    var names = response.split('\n');

    //Offsetting names by 1 because last line is empty (atom)
    for(var i = 0; i < names.length - 1; ++i) {

        var name = names[i];
        name = name.replace('/ /g', '-');
        name = "../images/" + name;
        links[i] = name;
        console.log(links[i]);

    }

};

// /******************************************************************************
//  * Fades an image out by reducing its opacity over time
//  *****************************************************************************/
// var fadeOut = function(element) {
//
//     var opacity = 1.00;
//     element.style.opacity = opacity;
//
//     var timer = setInterval(function() {
//
//         if(opacity > 0) {
//             opacity -= 0.05;
//             element.style.opacity = opacity;
//         }
//         else
//             clearInterval(timer);
//
//     }, 100); //Should take 2 seconds
//
//     element.style.display = "none";
//
// };
//
// /******************************************************************************
//  * Fades an image in by increasing its opacity over time
//  *****************************************************************************/
// var fadeIn = function(element) {
//
//     var opacity = 0.00;
//     element.style.opacity = opacity;
//     element.style.display = "block";
//     var timer = setInterval(function() {
//
//     if(opacity > 0) {
//         opacity += 0.05;
//         element.style.opacity = opacity;
//     }
//     else
//         clearInterval(timer);
//
//     }, 100); //Should take 2 seconds
//
// };
//
// /******************************************************************************
//  * Switches to next image in slideshow
//  *****************************************************************************/
// var nextImage = function() {
//
//     imageNumber++;
//     if(imageNumber == links.length)
//         imageNumber = 0;
//
//     var slide = document.getElementById("slide");
//     var current = document.getElementById("current");
//     // fadeOut(current);
//     current.style.display = "none";
//     slide.innerHTML = "<img id='current' src='" + links[imageNumber] + "'/>";
//     if(current.style.width > slide.style.width)
//         current.style.width = slide.style.width;
//     if(current.style.height > slide.style.height)
//         current.style.height = slide.style.height;
//     current.style.display = "block";
//     // fadeIn(current);
//     // function fade(element) {
//     // var op = 1;  // initial opacity
//     // var timer = setInterval(function () {
//     //     if (op <= 0.1){
//     //         clearInterval(timer);
//     //         element.style.display = 'none';
//     //     }
//     //     element.style.opacity = op;
//     //     element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//     //     op -= op * 0.1;
//     // }, 50);
// // }
// };
//
// document.addEventListener("readystatechange", function() {
//
//     if(document.readyState === "interactive") {
//
//         console.log("document is interactive");
//         makeLinks();
//         var slide = document.getElementById("slide");
//         slide.innerHTML = "<img id='current' src='" + links[0] + "'/>";
//         var current = document.getElementById("current");
//         // current.style.display = "none";
//         if(current.style.width > slide.style.width)
//             current.style.width = slide.style.width;
//         if(current.style.height > slide.style.height)
//             current.style.height = slide.style.height;
//         current.style.display = "block";
//         // fadeIn(current);
//
//         var timer = setInterval(function() {
//
//             nextImage();
//
//         }, 10 * 1000);
//
//     }
//
// });


$(document).ready(function(){
    //Takes content of index file and pastes it into allli
    makeLinks();
    //Sets default/first slideshow image
    $("#slide").html('<img id="current" src="'+links[0]+'"/>');

    //Force all li into strings if for some reason they're not
    // for(i = 0; i < links.length; ++i) {
    //     links[i] = '' + links[i];
    // }

    var cw = $("#slide").width();
    var ch = $("#slide").height();
    $("#current").css("max-width",cw);
    $("#current").css("max-height",ch);
    $("#current").css("vertical-align","center");

    //Changes images every 10000 milliseconds
    var k = 0;
    var show = setInterval(function() {
            nextImage();
        }, 10 * 1000);

    function nextImage() {
        k++;
        if (k == links.length)
            k = 0;

        $("#slide").html('<img id="current" src="'+links[k]+'"/>');
        $("#current").hide();
        $("#current").fadeIn(7000);
        $("#current").height(ch);
        $("#current").width("auto");
        var w = $("#current").width();
        var h = $("#current").height();
        if ( w > cw ) {
            $("#current").width(cw);
        }
        $("#current").css("max-width",cw);
        $("#current").css("max-height",ch);
    }

    /*
     * Loads next image when slideshow is clicked on
     */
    $("#slide").click(function() {
        $("#current").stop();
        nextImage();
        clearInterval(show);
        show = setInterval(function() {
            nextImage();
        }, 10 * 1000);
    });

});
