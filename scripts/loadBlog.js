var index = "../blogposts/blogindex.txt";
var contents = [];
var links = [];

/******************************************************************************
 * Changes either the first 10 posts from the index file, or all of them if
 * there are less than 10 posts, and converts them to path names/links that
 * can be used to retrieve the blogposts
 *****************************************************************************/
var makeLinks = function() {

    //Obtain the names of the blogposts from the index file
    var request = new XMLHttpRequest();
    request.open("GET", index, false);
    request.send();
    var response = request.responseText;

    //Select all or first ten of the links
    var selectedPosts = [];
    var allPosts = response.split('\n');
    if(allPosts.length < 11)
        selectedPosts = allPosts;
    else
        for(var i = 0; i < 10; ++i)
            selectedPosts[i] = allPosts[i];

    //replace spaces with dashes ("-"), add prefix to each link, store it
    for(var p = 0; p < selectedPosts.length; ++p) {

        var text = selectedPosts[p];
        text = text.replace(/ /g, "_");
        text = "../blogposts/" + text + ".html";
        links[p] = text;

    }

};

/******************************************************************************
 * Function to load the title and content of a single blogpost from file with a
 * specified path
 *****************************************************************************/
var loadFile = function(path) {

    var request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send();
    var newDiv = request.responseText;
    contents[contents.length] = newDiv;
    display(newDiv);

};

/******************************************************************************
 * Displays the abbreviated contents of one blog post in a div with class
 * "post", inside the #container div
 *****************************************************************************/
var display = function(content) {

    //Only for mozilla? Hopefully not
    var contentDiv = document.createElement("div");
    contentDiv.className = "post";
    contentDiv.innerHTML = content;
    var paragraph = content.getElementsByTagName("p")[0];
    var shortText = paragraph.innerHTML.substring(0,1000);
    shortText += "...";
    paragraph.innerHTML = shortText;
    contentDiv.appendChild(paragraph);

    document.getElementById("container").appendChild(contentDiv);

};

/******************************************************************************
 * Shows the full version of the post that was clicked on, and changes the
 * onclick function so that it shows the short version of the post when it is
 * subsequently clicked on
 *****************************************************************************/
var showMore = function(index) {

    return function() {

        var post = document.getElementsByClassName("post")[index];
        post.innerHTML = contents[index];
        post.onclick = showLess(index);

    };

};

/******************************************************************************
 * Shows the short version of the post that was clicked on (1000 characters in
 * the paragraph), and changes the onclick function of this post to showMore()
 *****************************************************************************/
var showLess = function(index) {

    return function() {

        var post = document.getElementsByClassName("post")[index];
        var paragraph = post.getElementsByTagName("p")[0];
        var shortText = paragraph.innerHTML.substring(0,1000);
        shortText += "...";
        paragraph.innerHTML = shortText;
        post.onclick = showMore(index);

    };

};

document.addEventListener("readystatechange", function() {

    if(document.getReadyState === "interactive") {

        print("document is interactive");
        alert("doc is interactive");
        //Remove original "post" div from document - there should be only one
        var originalPost = document.getElementsByClassName("post")[0];
        var container = document.getElementById("container");
        container.removeChild("originalPost");

        print("removed original post");

        makeLinks();

        print("created links");

        //This should display a truncated version of each blogpost on the site
        for(var i = 0; i < links.length; ++i)
            loadFile(links[i]);

        print("displayed short versions of posts");

        //Action listener to display full post instead of the short version
        //upon click
        var posts = document.getElementsByClassName("post");
        for(var p = 0; p < posts.length; ++p) {

            posts[p].onclick = showMore(p);

        }

        print("added action listeners");

    }

});
