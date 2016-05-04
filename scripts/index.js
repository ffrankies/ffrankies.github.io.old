$(document).ready(function(){

    //Creates the 7 animated circles
    for(i = 1; i < 7; ++i) {
        //Circles increase in size
        var circlesize = 200 * i;
        //var fullHeight = $(document).height()*0.5;
        var posh = $(document).height()*0.5 - ( circlesize / 2 );
        var posw = $(document).width()*0.5 - ( ( circlesize + i * 10 ) / 2 );

        //alert(pos);

        //Circle color alternates
        var color;
        if ( i % 2 == 0 ) {
            color = "#9e0000";
        } else {
            color = "black";
        }

        $(".orbits").children().eq(i).css({
            "width": circlesize + i * 10,
            "height": circlesize,
            "top": posh,
            "left": posw,
            "background": color,
            "z-index": 0 - i,
            "animation-delay": i * 100
        });
    }

    //alert($(window).width());

    var reposition = function() {
        //Vertically centers header text
        var h1height = $("h1").height();
        var headerHeight = $("#header").innerHeight();
        var  pos = ( headerHeight - h1height ) / 2;
        $("h1").css( "top", pos );

        //Vertically centers footer text
        var footerTextHeight = $("#name").height();
        var pos = $("#footer").innerHeight() - footerTextHeight;
        pos = pos / 2;
        $("#name").css("top",pos);

        //Vertically centers links in #right
        var rightTextHeight = $("#right").innerHeight();
        pos = $("#footer").innerHeight() - rightTextHeight;
        pos = pos / 2;
        pos = pos - ( $("#prolink").position().top ) / 2;
        $("#right").css("top",pos);


        //Centers welcome message
        var height = $(window).height();
        var width = $(window).width();
        height = height - $("#welcome").height();
        width = width - $("#welcome").width();
        width = width / 2;
        height = height / 2;

        $("#welcome").css({
            "top":height,
            "left":width
        });//Vertically centers right links
        // var footerTextHeight = $("#prolink").height();
        // var pos = $("#right").innerHeight() - footerTextHeight;
        // pos = pos / 2;
        // $("#prolink").css("top",pos);
    }

    reposition();

    $(window).on("orientationchange",function(){
        if(window.orientation == 0) // Portrait
        {
            reposition();
        }
        else // Landscape
        {
            reposition();
        }
    });

    $(window).on('resize', function(){
        reposition();
    });

    //hides links until needed
    $(".body").hide();

    $("#welcome").one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
    //Your css
        $('#welcome').remove();
    });

    //centers footer content
    // var footerHeight = $("#footer").height()*0.5;
    // var pos = $("#footer").innerHeight() - footerHeight;
    // pos = pos / 2;
    // $("#name, #right").css({
    //     "font-size":footerHeight,
    //     "position":"absolute",
    //     "top":pos
    // });
    // $("#prolink").css("font-size",footerHeight);


});
