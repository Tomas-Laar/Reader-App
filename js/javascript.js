$( window ).ready(function(){
    console.log($(".columns").width());
    $(".columns").css("height",$(window).height()-((40+20+20)+$("#header").height()));
});

$( window ).resize(function(){
    console.log( $(".columns").width() );
    $(".columns").css("height",$(window).height()-((40+20+20)+$("#header").height()));
});

$('#right').click(function(e) {
	e.preventDefault();
    scrollamount = $(window).scrollLeft() + $( ".columns" ).width()+100;
    //console.log(scrollamount);
	//console.log('clicked! right! ' + scrollamount);
    $(window).scrollLeft(parseInt(scrollamount));
});

$('#left').click(function(e) {
	e.preventDefault();
    scrollamount = $(window).scrollLeft() - $( ".columns" ).width()-100;
    //console.log(scrollamount);
	//console.log('clicked! left! ' - scrollamount);
    $(window).scrollLeft(parseInt(scrollamount));
});