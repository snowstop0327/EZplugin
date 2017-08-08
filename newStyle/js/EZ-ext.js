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
  $('.q_area .btn_yes').click(function(event) {
    event.preventDefault();
    $(this).parent('.q_area').hide();
    $('.yes_area').css('display', 'inline-block');
  });
  $('.q_area .btn_no').click(function(event) {
    event.preventDefault();
    $(this).parent('.q_area').hide();
    $('.no_area_form1').css('display', 'inline-block');
  });
  $('.q_area .link_suggest').click(function(event) {
    event.preventDefault();
    $(this).parent('.q_area').hide();
    $('.no_area_form1').css('display', 'inline-block');
  });
  $('.no_area_form1 .btn_next').click(function(event) {
    event.preventDefault();
    $(this).parent('.no_area_form1').hide();
    $('.no_area_form2').css('display', 'inline-block');
  });
  $('.no_area_form1 .btn_pass').click(function(event) {
    event.preventDefault();
    $(this).parent('.no_area_form1').hide();
    $('.no_area').css('display', 'inline-block');
  });
  $('.no_area_form2 .btn_next').click(function(event) {
    event.preventDefault();
    $(this).parent('.no_area_form2').hide();
    $('.no_area').css('display', 'inline-block');
  });
  $('.no_area_form2 .btn_pass').click(function(event) {
    event.preventDefault();
    $(this).parent('.no_area_form2').hide();
    $('.no_area').css('display', 'inline-block');
  });
  $('.EZcpr_ft').click(function(event) {
    event.preventDefault();
    $('.rec_card_popup').css('display', 'inline-block');
  });
  $('ul.EZcpr_ct li .rec_card').click(function(event) {
    event.preventDefault();
    $('.rec_card_popup').css('display', 'inline-block');
  });
  $('.rec_card_popup .popup_close').click(function(event) {
    event.preventDefault();
    $('.rec_card_popup').css('display', 'none');
  });

  $('.EZcpr_btn .EZcpr_love').click(function(event) {
    event.preventDefault();
    $('.love_popup').css('display', 'inline-block');
  });
  $('.EZcpr_btn .EZcpr_notice .btn_submit').click(function(event) {
    event.preventDefault();
    $('.notice_popup').css('display', 'inline-block');
  });
});

$(document).ready(function() {
  var triggerOpen   = $('.shop_dropdown_area .input_choice');
  var triggerClose  = $('.shop_dropdown_area .dropdown_menu').find('li');
  var marka       = $('.shop_dropdown_area .icon_arrow');

  // set initial Marka icon
  var m = new Marka('.shop_dropdown_area .icon_arrow');
  m.set('triangle').size(10);
  m.rotate('down');

  // trigger dropdown
    triggerOpen.add(marka).on('click', function(e) {
    e.preventDefault();
    $('.shop_dropdown_area .dropdown_menu').add(triggerOpen).toggleClass('open');


    if($('.shop_dropdown_area .icon_arrow').hasClass("marka-icon-times")) {
      m.set('triangle').size(10);
    } else {
      m.set('times').size(15);
    }
  });

  triggerClose.on('click', function() {
    // set new placeholder for demo
    var options = $(this).find('a').html();
    triggerOpen.text(options);

    $('.shop_dropdown_area .dropdown_menu').add(triggerOpen).toggleClass('open');
    m.set('triangle').size(10);
  });

});

$(document).ready(function() {
  var triggerOpen   = $('.bank_dropdown_area .input_choice');
  var triggerClose  = $('.bank_dropdown_area .dropdown_menu').find('li');
  var marka       = $('.bank_dropdown_area .icon_arrow');

  // set initial Marka icon
  var m = new Marka('.bank_dropdown_area .icon_arrow');
  m.set('triangle').size(10);
  m.rotate('down');

  // trigger dropdown
    triggerOpen.add(marka).on('click', function(e) {
    e.preventDefault();
    $('.bank_dropdown_area .dropdown_menu').add(triggerOpen).toggleClass('open');


    if($('.bank_dropdown_area .icon_arrow').hasClass("marka-icon-times")) {
      m.set('triangle').size(10);
    } else {
      m.set('times').size(15);
    }
  });

  triggerClose.on('click', function() {
    // set new placeholder for demo
    var options = $(this).find('a').html();
    triggerOpen.text(options);

    $('.bank_dropdown_area .dropdown_menu').add(triggerOpen).toggleClass('open');
    m.set('triangle').size(10);
  });

});

$(document).ready(function() {
  var triggerOpen   = $('.bank_dropdown_area2 .input_choice');
  var triggerClose  = $('.bank_dropdown_area2 .dropdown_menu').find('li');
  var marka       = $('.bank_dropdown_area2 .icon_arrow');

  // set initial Marka icon
  var m = new Marka('.bank_dropdown_area2 .icon_arrow');
  m.set('triangle').size(10);
  m.rotate('down');

  // trigger dropdown
    triggerOpen.add(marka).on('click', function(e) {
    e.preventDefault();
    $('.bank_dropdown_area2 .dropdown_menu').add(triggerOpen).toggleClass('open');


    if($('.bank_dropdown_area2 .icon_arrow').hasClass("marka-icon-times")) {
      m.set('triangle').size(10);
    } else {
      m.set('times').size(15);
    }
  });

  triggerClose.on('click', function() {
    // set new placeholder for demo
    var options = $(this).find('a').html();
    triggerOpen.text(options);

    $('.bank_dropdown_area2 .dropdown_menu').add(triggerOpen).toggleClass('open');
    m.set('triangle').size(10);
  });

});
$(document).ready(function() {
  var triggerOpen   = $('.bank_dropdown_area3 .input_choice');
  var triggerClose  = $('.bank_dropdown_area3 .dropdown_menu').find('li');
  var marka       = $('.bank_dropdown_area3 .icon_arrow');

  // set initial Marka icon
  var m = new Marka('.bank_dropdown_area3 .icon_arrow');
  m.set('triangle').size(10);
  m.rotate('down');

  // trigger dropdown
    triggerOpen.add(marka).on('click', function(e) {
    e.preventDefault();
    $('.bank_dropdown_area3 .dropdown_menu').add(triggerOpen).toggleClass('open');


    if($('.bank_dropdown_area3 .icon_arrow').hasClass("marka-icon-times")) {
      m.set('triangle').size(10);
    } else {
      m.set('times').size(15);
    }
  });

  triggerClose.on('click', function() {
    // set new placeholder for demo
    var options = $(this).find('a').html();
    triggerOpen.text(options);

    $('.bank_dropdown_area3 .dropdown_menu').add(triggerOpen).toggleClass('open');
    m.set('triangle').size(10);
  });

});

  