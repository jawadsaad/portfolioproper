var originalBG = $(".portfoliocontent").css("background-color");

$('.portfoliocontent:not(".active")')
.mousemove(function(e) {

    x  = e.pageX - this.offsetLeft;
    y  = e.pageY - this.offsetTop;
    xy = x + " " + y;

    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 50, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0.0))), " + originalBG;
//    bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, rgba(255,255,255,1)" + " 0%, " + originalBG + " " + 10 + "px)";

    $(this)
      .css({ background: bgWebKit });
//      .css({ background: bgMoz });

}).mouseleave(function() {
        $(this).css({ background: originalBG });
});

//PORTFOLIO
var portfolio = document.getElementById('portfolio');

var portfoliobtn = document.getElementById('portfoliolink');
portfoliobtn.addEventListener('click', displayPortfolioLanding, false);

var project1btn = document.getElementById('project1link');
project1btn.addEventListener('click', displayProjectOne, false);

var portfoliolanding = document.getElementById('portfoliolanding');

var project1 = document.getElementById('project1');

var project1desc = document.getElementById('project1desc');
var project1img = document.getElementById('project1img');

function displayPortfolioLanding() {
    portfolio.classList.remove('portfoliobp');
    
    fadeOut(project1);
    
    fadeOut(project1desc);
    
    fadeOut(project1img);
    
    setTimeout(removeDisplay, 700, project1);
    
    setTimeout(display, 700, portfoliolanding);
    
    setTimeout(fadeIn, 750, portfoliolanding);
}

function displayProjectOne() {
    portfolio.classList.add('portfoliobp');
    
    fadeOut(portfoliolanding);
    
    setTimeout(removeDisplay, 700, portfoliolanding);
    
    setTimeout(display, 750, project1);
    
    setTimeout(fadeIn, 750, project1);
    
    setTimeout(fadeIn, 900, project1desc);
    
    setTimeout(fadeIn, 900, project1img);
}

function removeDisplay(Element) {
    Element.classList.add('nodisplay');
}

function display(Element) {
    Element.classList.remove('nodisplay');
}

function fadeIn(Element) {
    Element.classList.remove('hideitem');
}

function fadeOut(Element) {
    Element.classList.add('hideitem');
}