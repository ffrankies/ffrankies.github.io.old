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

    //Centers header text
    var headerHeight = $("#header").height()*0.8;
    var pos = $("#header").innerHeight() - headerHeight;
    pos = pos / 2;
    $("h1").css({
        "font-size":headerHeight,
        "position":"absolute",
        "top":pos,
        "margin-top":0,
        "padding-top":0
    });

    //hides links until needed
    $(".body").hide();

    //centers footer content
    var footerHeight = $("#footer").height()*0.5;
    var pos = $("#footer").innerHeight() - footerHeight;
    pos = pos / 2;
    $("#name, #right").css({
        "font-size":footerHeight,
        "position":"absolute",
        "top":pos
    });
    $("#prolink").css("font-size",footerHeight);

    //Centers welcome message
    var texth = $(window).height();
    texth = texth - $("#footer").outerHeight();
    texth = texth - $("#header").outerHeight();
    texth = texth*0.15;
    $("#first").css("font-size",texth);

    var height = $(window).height();
    var width = $(window).width();
    height = height - $("#first").height();
    width = width - $("#first").width();
    width = width / 2;
    height = height / 2;

    $("#first").css({
        "top":height,
        "left":width
    });

});
