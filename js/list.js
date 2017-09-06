/*$('ul').click(function(e){
	$('.submit').append('<li></li>');
});*/
/*
$(document).ready(function(){
    $("ul").click(function(){
        $('.submit')append('<li>input </li>');
    });
});*/
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
});



/*$(document).ready(function(){
    $("#submit").click(function(){
        $("ul").append('<li>').append("input:text");
    });

    $("#delete").click(function(){
        $("li").append("<li>Appended item</li>");
    });
});*/
$('#list').focus();
$('#submit').click(function(){
	$('ul').append('<li>' + $('#list').val() + '<button >! X</button></li>');
	$('button').last().addClass()('delete');
	/*	text: $('#list').val() */
	});

$("ul").on("mouseup", "button", function(e) {
  // 'this' referrs to the thing that was clicked (i.e. the button)
  $(this).parent().remove(e.target.id);
});



$('#list').focus(
	function(){
		$(this).val('');
	});
$(document).on('click', '.delete',function(){
  $(this).parent().remove();
  $(list).focus();
});
/*$('#myImg').on('click' function(){
    var src = $(this).attr('src');
    $(this.).attr('src', src);// = "img/buff.webp"
});*/
/*function myFunction() {
    document.getElementById("myImg").src = "img/buff.webp";
}*/

/*$('li').unbind('click');*/
/*$('li').unbind('dblclick');
$('li').dblclick(function(e){
    e.stopPropagation();
    e.preventDefault();
    return false;
});*/
/*$("li").mouseover(function(){
        $("li").css("background-color", "yellow");
    });*/
/*(document).ready(function(){
    $("li").mouseover(function(){
        $("li").css("background-color", "yellow");
    });
    $('li').unbind('dblclick');
    $("li").mouseout(function(){
        $("li").css("background-color", "lightgray");
    });
});*///