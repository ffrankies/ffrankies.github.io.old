/* All the li from the index file */
var allli;
/* Working versions of the li */
var li;

$(document).ready(function(){
    //Takes content of index file and pastes it into allli
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", ind, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            var allText = rawFile.responseText;
            allli = allText;
        }
    }
    rawFile.send(null);

    li = allli.split('\n');
    var str = start + li[0];
    var i = 0;
    var len = li.length;

    //Sets default/first slideshow image
    $("#slides").html('<img id="slide" src="'+str+'"></img>');

    //Force all li into strings if for some reason they're not
    for(i = 0; i < len - 1; ++i) {
        li[i] = '' + li[i];
    }

    var cw = $("#slides").width();
    var ch = $("#slides").height();
    $("#slide").css("max-width",cw);
    $("#slide").css("max-height",ch);
    $("#slide").css("vertical-align","center");

    //Changes images every 10000 milliseconds
    var k = 0;
    setInterval(function() {
        k++;
        if (k == len - 1)//because imageindex has an empty line at end
            k = 0;

        str = start.concat(li[k]);


        $("#slides").html('<img id="slide" src="'+str+'"></img>');
        $("#slide").hide();
        $("#slide").fadeIn(7000);
        $("#slide").height(ch);
        $("#slide").width("auto");
        var w = $("#slide").width();
        var h = $("#slide").height();
        if ( w > cw ) {
            $("#slide").width(cw);
        }
        $("#slide").css("max-width",cw);
        $("#slide").css("max-height",ch);
    }, 10 * 1000);

});
