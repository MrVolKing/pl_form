document.addEventListener('DOMContentLoaded', function(){
  
    // наведение на карточку    
    $(document).on('mouseover', '.itemwrap', function(){
        $('.blockcardsitem').removeClass('itemactive');
        $(this).find('.blockcardsitem').addClass('itemactive');
    });
    

    // inputs
    var text_box = $( "#current" );
    
    var inp1 = $( "#inp_1" );
    var inp2 = $( "#inp_2" );
    var inp3 = $( "#inp_3" );
    
    var label1 = $('.label_name');
    var label2 = $('.label_email');
    var label3 = $('.label_phone');
    
    
    
    inp1.focus(function() {
        
        text_box.html('1 ');
        label1.addClass('visible');
        label2.removeClass('visible');
        label3.removeClass('visible');

        if ($(window).width() <= 1200){
            inp1.addClass('marg_bot');
            inp2.removeClass('marg_bot');
            inp3.removeClass('marg_bot');
        }
           
    });
    
    
    var val_name = inp1.val().length;
    inp2.focus(function() {
    
        var val_name = inp1.val().length;
    
        if(val_name !== 0) {
            text_box.html('2 ');
            label1.removeClass('visible');
            label3.removeClass('visible');
            label2.addClass('visible');

            if ($(window).width() <= 1200){
                inp2.addClass('marg_bot');
                inp1.removeClass('marg_bot');
                inp3.removeClass('marg_bot');
            }
    
        }
    
    });
    
    
    inp3.focus(function() {
    
        var val_email = inp2.val().length;
    
        if(val_email !== 0) {
            text_box.html('3 ');
            label2.removeClass('visible');
            label3.addClass('visible');

            if ($(window).width() <= 1200){
                inp3.addClass('marg_bot');
                inp1.removeClass('marg_bot');
                inp2.removeClass('marg_bot');
            }
        }
    
    
    });
    
});