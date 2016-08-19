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
  $('.submit-btns > a.yes').click(function(event) {
    event.preventDefault();
    $(this).parent('.submit-btns').hide();
    $('.complete').css('display', 'inline-block');
    $('.close-btn').hide();
    
  });
  $('.close-btn').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.plugin-feedback').hide(400);
  });
  $('.submit-btns > a.no').click(function(event) {
    event.preventDefault();
    $('#Suggest-form1').show();
    $('.submit-btns,.q-text,a.close-btn').hide();
  });
  $('#Suggest-form1 > .next-btn').click(function(event) {
    event.preventDefault();
    $(this).parent('#Suggest-form1').hide();
    $('#Suggest-form2').show();
  });
  $('#Suggest-form2 > button').click(function(event) {
    event.preventDefault();
    $(this).parent('#Suggest-form2').hide();
    $('.q-text,.complete').css('display', 'inline-block');
  });
});
