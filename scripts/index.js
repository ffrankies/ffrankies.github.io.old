$(document).ready(function(){

    //$(".body").hide();
    // alert("hello");


    var anim = function() {
        $("#bars").empty();

        //Creates the 15 animated circles
        var limit = 50;

        if($(window).width() < 800) {
            limit = 20;
        }

        if($(window).width() < 480) {
            limit = 0;
        }

        for(i = 0; i < limit; ++i) {

            $("#bars").append("<div></div>");

            var x = i + 1;
            var height = "25%";
            var color = "#FFF68F";
            var dur = "12s";
            if( x == 2 || x == 12 || x == 22 || x == 32 || x == 42 ) {
            color = "#c00000";
            height = "38%";
            dur = "15s";
            }
            if( x == 3 || x == 13 || x == 23 || x == 33 || x == 43 ) {
            color = "#FF7F00";
            height = "46%";
            dur = "9s";
            }
            if( x == 4 || x == 14 || x == 24 || x == 34 || x == 44 ) {
            color = "#AF4035";
            height = "36%";
            dur = "20s";
            }
            if( x == 5 || x == 15 || x == 25 || x == 35 || x == 45 ) {
            color = "#FF3300";
            height = "24%";
            dur = "17s";
            }
            if( x == 6 || x == 16 || x == 26 || x == 36 || x == 46 ) {
            color = "#EECBAD";
            height = "22%";
            dur = "10s";
            }
            if( x == 7 || x == 17 || x == 27 || x == 37 || x == 47 ) {
            color = "#EE0000";
            height = "34%";
            dur = "22s";
            }
            if( x == 8 || x == 18 || x == 28 || x == 38 || x == 48 ) {
            color = "#FFEC8B";
            height = "47%";
            dur = "11s";
            }
            if( x == 9 || x == 19 || x == 29 || x == 39 || x == 49 ) {
            color = "#B22222";
            height = "35%";
            dur = "18s";
            }
            if( x % 10 == 0 ) {
            color = "#FFD39B";
            height = "24%";
            dur = "7s";
            }
            $("#bars").children().eq(i).css({
            "height": height,
            "left": i*2 + "%",
            "background-color": color,
            "animation-duration": dur
            });

            if($(window).width() < 800) {
                $("#bars").children().eq(i).css({
                    "width": "3.5%",
                    "left": i*5 + "%",
                    "margin": "0% 0.75% 0% 0.75%"
                });
            }

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
