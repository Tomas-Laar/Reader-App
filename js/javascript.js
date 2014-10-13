$( window ).ready(function(){
console.log($(".columns").width());
$(".columns").css("height",$(window).height());

});

$( window ).resize(function(){
    console.log( $(".columns").width() );
    $(".columns").css("height",$(window).height()-120);
});

$('#right').click(function(e) {
	e.preventDefault();
    scrollamount = $(window).scrollLeft() + $( ".columns" ).width()+100;
    console.log(scrollamount);
	console.log('clicked! right! ' + scrollamount);
    $(window).scrollLeft(parseInt(scrollamount));
});

$('#left').click(function(e) {
	e.preventDefault();
    scrollamount = $(window).scrollRight() + $( ".columns" ).width()-100;
    console.log(scrollamount);
	console.log('clicked! left! ' + scrollamount);
    $(window).scrollRight(parseInt(scrollamount));
});