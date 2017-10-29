$(document).ready(function(){
    $('.collapsed').next('.btn-template').click(function(e){
        e.preventDefault();
        $(this).parent().children('.collapsed').slideToggle();
    })
})