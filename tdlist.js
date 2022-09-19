$(function(){
    $("#btn").click(function(){
        var valAdd =$('input[name=items]').val();
        $('ul').append('<li>'+valAdd+'</li>');
        $('input[name=items').val("");
    });

    $(document).on('dblclick', 'li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
    });

    $('ul').sortable();
});