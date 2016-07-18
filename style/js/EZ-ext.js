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