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

$(document).ready(function(){
    //Takes content of index file and pastes it into allli
    makeLinks();
    //Sets default/first slideshow image

    var cw = $("#slide").width();
    cw = cw * 0.96;
    var ch = $("#slideshow").height();
    ch -= 13;

    $("#slide").html('<img id="current" src="'+links[0]+'"/>');
    $("#current").hide();
    $("#current").css("max-width", cw);
    $("#current").css("max-height", ch);
    $("#current").css("vertical-align", "center"); //doesn't really work
    $("#current").show();
    $("#current").height(ch);
    $("#current").width("auto");
    var w = $("#current").width();
    var h = $("#current").height();
    if ( w > cw ) {
        $("#current").width(cw);
    }

    //Changes images every 10000 milliseconds
    var k = 0;
    var show = setInterval(function() {
            nextImage();
        }, 10 * 1000);

    /*
     * Fades out current image, fades in next image from links array
     */
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

    };

    /*
     * Resizes image inside #slide
     */
    function changeSize() {

        $("#current").hide();
        cw = $("#slide").width();
        cw = cw * 0.96;
        ch = $("#slideshow").height();
        ch -= 13;
        $("#current").css("max-width", cw);
        $("#current").css("max-height", ch);
        $("#current").show();
        $("#current").height(ch);
        $("#current").width("auto");
        var w = $("#current").width();
        var h = $("#current").height();
        if ( w > cw ) {
            $("#current").width(cw);
        }

    };

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

    /*
     * Changes size of picture when screen size changes
     */
     $(window).resize(changeSize);
     $(window).on("orientationchange", changeSize);

});
