$(document).ready(function(){

    var anim = function() {
        $(".orbits").empty();

        //Creates the 15 animated circles
        var limit = 15;

        if($(window).width() < 800) {
            limit = 8;
        }
        if($(window).width() < 480 || $(window).height() < 480) {
            limit = 0;
        }
        for(i = 0; i < limit; ++i) {
            $(".orbits").append("<div></div>");
            //Circles increase in size
            var usableHeight = $(window).height() - $("#header").height() - $("#footer").height();
            var circlesize = Math.random() * usableHeight * 0.7;
            //var fullHeight = $(document).height()*0.5;
            var posw = $(document).width()*0.5 - ( ( circlesize ) / 2 );
            var translate = ( ( Math.random() * 0.5 ) + 0.5 ) * -100;
            var x = $(document).width() * 0.75 * ( Math.random() - 0.5 );

            //alert(pos);

            //Circle color alternates
            var color;
            if( i % 4 == 0 ) {
                color = "#FFE32D";
            }
            else if( i % 3 == 0 ) {
                color = "#FF781D";
            }
            else if ( i % 2 == 0 ) {
                color = "#9e0000";
            } else {
                color = "#cccccc";
            }
            $(".orbits").children().eq(i).css({
                "width": circlesize,
                "height": circlesize,
                // "top": posh,
                "left": posw + x,
                "background": color,
                "z-index": 0 - i,
                "animation-delay": i * 100,
                "transform": "translateY("+translate+"%)"
            });
        }

    };

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

    //reposition();

    anim();

    $(window).on("orientationchange",function(){
        if(window.orientation == 0) // Portrait
        {
            anim();
        }
        else // Landscape
        {
            anim();
        }
    });

    $(window).on('resize', function(){
        anim();
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
