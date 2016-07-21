$(function(){
  $('.EZsugt_i_r').mouseover(function(){
    $(this).siblings('.EZsugt_i_d').css('display','block');
  });
  $('.EZsugt_i_r').mouseout(function(){
    $(this).siblings('.EZsugt_i_d').css('display','');
  });

  $('.EZcpr_coupon_link').hover(function(){
    $(this).parent().prev().toggleClass('_focus');
  });

  $('.EZcpr_tx').tinyscrollbar();

})

$(document).ready(function() {
  $('.submit-btns > a').click(function(event) {
    event.preventDefault();
    $(this).parent('.submit-btns').css('display', 'none');
    $('.complete').css('display', 'inline-block');
    $('.close-btn').css('display', 'none');
    
  });
  $('.close-btn').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.plugin-feedback').hide(400);
  });
});
