$(document).ready(function($){
    //open popup
    $('.button').on('click', function(event){
        event.preventDefault();
        // $('.overlay').addClass('visible');
        let item = $(this).data("item");
        $(`.show--${item}`).addClass('visible').siblings().removeClass("visible");
    });
    
    //close popup
    $('.overlay').on('click', function(event){
        if( $(event.target).is('.close') || $(event.target).is('.overlay') ) {
            event.preventDefault();
            $(this).removeClass('visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.overlay').removeClass('visible');
        }
    });
})