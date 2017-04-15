
$(function() {
    var pull    = $('.menu-icon'),
        menu    = $('nav ul');

    $(pull).click(function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    resize();

});

var resize = function(){

    var w = $(window).width(),
        menu    = $('nav ul');
    if(w > 1023 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    else if($(window).width()<1024){
        menu.hide();
    }

};

$(window).resize(function(){
    resize();
});
