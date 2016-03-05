var allLinks;
var links;
$(document).ready(function(){
    // $("p").load("stories/Deathbed.html");
    function readTextFile(file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    allLinks = allText;
                }
            }
        }
        rawFile.send(null);
    }
    readTextFile(ind);
    // $("p").click(function() {
    //       $("p").text(allLinks);
    // });
    function changeToArray(stuff) {
        links = stuff.split('\n');
    }
    changeToArray(allLinks);
    // $("h1").click(function() {
    //     $("h1").text(links[0]);
    // });
    //$(".sidebar").write("");
    function getText(links) {
        for(i = 0; i < 10; ++i) {
        links[i] = $("<a></a>").text(links[i]);
        $(".sidebar").append(links[i]);
        }
    }
    getText(links);
    $(".sidebar>a").click(function() {
        var txt = "stories/" + $(this).text();
        txt += ".html";
        $("#content").load(txt, function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("#content").load(nf);
        });
        //alert(txt);

    });
    $(".sidebar>a:first").css("border-top", "none");
    //links[0] = $("<a></a>").text(links[0]);
    //$(".sidebar").append(links[0]);
    //alert(stuff);
});
