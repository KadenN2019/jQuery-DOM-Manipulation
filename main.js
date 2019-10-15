$(document).ready(function(){
    $("a").on("click", function(e){
        var sec = $(this).attr('href')
        $(".sectext").removeClass('show')
        $(sec).addClass('show')
    })
})