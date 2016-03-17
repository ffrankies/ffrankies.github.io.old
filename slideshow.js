/* All the links from the index file */
var allLinks;
/* Working versions of the links */
var links;



$(document).ready(function(){
    //Takes content of index file and pastes it into allLinks
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", ind, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            var allText = rawFile.responseText;
            allLinks = allText;
        }
    }
    rawFile.send(null);

    links = allLinks.split('\n');
    // var len = links.length;
    // for(i = 0; i < len; ++i) {
    //     // var scr = start + links[i];
    //     var img = $('<img><img/>', {
    //         src: "images/arya.jpeg";
    //     });
    // }
    // alert("hello");

    var str = start + links[0];
    var i = 0;

    //Sets default/first slideshow image
    $("#slides").html('<img id="slide" src="'+str+'"></img>');

    //Changes images every 5000 milliseconds
    setInterval(function() {
        i++;
        if (i == links.length) --i;
        str = start + links[i];
        $("#slide").fadeOut("slow"); //trying to make element fade in
        $("#slides").html('<img id="slide" src="'+str+'"></img>');
    }, 5 * 1000);

    //$("#slides").html('<img src="'+str+'"></img>');
    //alert("Image created");

    //
    // links = allLinks.split('\n');
    // var len = links.length;
    //
    // for(i = 0; i < len; ++i) {
    // //     // var img = $('<img />', {
    // //     //     id: 'Myid',
    // //     //     src: 'MySrc.gif',
    // //     //     alt: 'MyAlt'
    // //     // });
    //      links[i] = $("<img></img>", {
    //          src: start + links[i];
    //      });
    // }
    //
    // $("#slides").html(""+links[i]);

    // $("h1").click(function() {
    //     $("h1").text(links[0]);
    // });
    //$(".sidebar").write("");
    // function getText(links) {
    //     for(i = 0; i < 10; ++i) {
    //     links[i] = $("<a></a>").text(links[i]);
    //     $(".sidebar").append(links[i]);
    //     }
    // }
    // getText(links);
    // $(".sidebar>a").click(function() {
    //     var txt = start + $(this).text();
    //     txt += ".html";
    //     txt = txt.replace(/ /g, "_");
    //     $("#content").load(txt, function(responseTxt, statusTxt, xhr){
    //         if(statusTxt == "error")
    //             $("#content").load(nf);
    //     });
    //     //alert(txt);
    //
    // });
    // $(".sidebar>a:first").css("border-top", "none");
    // function readTextFile(file)
    // {
    //     var rawFile = new XMLHttpRequest();
    //     rawFile.open("GET", file, false);
    //     rawFile.onreadystatechange = function ()
    //     {
    //         if(rawFile.readyState === 4)
    //         {
    //             if(rawFile.status === 200 || rawFile.status == 0)
    //             {
    //                 var allText = rawFile.responseText;
    //                 allLinks = allText;
    //             }
    //         }
    //     }
    //     rawFile.send(null);
    // }
    // readTextFile(ind);

    // $("p").click(function() {
    //       $("p").text(allLinks);
    // });
    // function changeToArray(stuff) {
    //     links = stuff.split('\n');
    // }
    // changeToArray(allLinks);
});
