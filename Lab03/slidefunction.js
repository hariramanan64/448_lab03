var images = ["slideshow images/college-basketball1.jpg", 
                "slideshow images/college-basketball2.jpg",
                "slideshow images/college-basketball3.jpg",
                "slideshow images/college-basketball4.jpg",
                "slideshow images/college-basketball5.jpg"];
var i = 0;

function slideForward() {
    i++;

    while(i > 4)
        i = i - 5;
    document.getElementById("slideimg").src = images[i];
}

function slideBack() {
    i--;
    
    while(i < 0)
        i = i + 5;
    document.getElementById("slideimg").src = images[i];
}

    
    