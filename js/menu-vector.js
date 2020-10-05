"use strict";

// $('.mob-kn').click(function(){
//    $('.menu-sub-vector.do768').addClass('active');
//    return false;
// });
//$('body').on('click','.close-x',function(){
var b = $('.teni-b');
var b1 = $('body');
b.click(function () {
  $('.menu-sub-vector.do768').removeClass('active');
  $('.prop-block.do768').removeClass('active');
  $('.menu-sub-vector').removeClass('active');
  b.removeClass('teni');
  b1.removeClass('teni');
  return false;
});
$('.close-x').click(function () {
  $('.menu-sub-vector.do768').removeClass('active');
  $('.prop-block.do768').removeClass('active');
  $('.menu-sub-vector').removeClass('active');
  b.removeClass('teni');
  b1.removeClass('teni');
  return false;
});

if ($(window).width() < 768) {
  $('.main-menu__a').click(function () {
    var a = $(this).parent('li').find('.menu-sub-vector');
    $('.menu-sub-vector').removeClass('active');

    if (a.hasClass('menu-sub-vector')) {
      a.addClass('active');
      b.addClass('teni');
      b1.addClass('teni');
      return false;
    } else {
      $('.menu-sub-vector').removeClass('active');
      b.removeClass('teni');
      b1.removeClass('teni');
      return true;
    }
  });
} else {
  $('.main-menu__a').hover(function () {
    var a = $(this).parent('li').find('.menu-sub-vector');
    $('.menu-sub-vector').removeClass('active');

    if (a.hasClass('menu-sub-vector')) {
      a.addClass('active');
      b.addClass('teni');
      b1.addClass('teni');
      return false;
    } else {
      $('.menu-sub-vector').removeClass('active');
      b.removeClass('teni');
      b1.removeClass('teni');
      return true;
    }
  });
}

$('.mob-kn').click(function () {
  if (!$('.menu-vector.do768').hasClass('active-m')) {
    $('.menu-vector.do768').addClass('active-m');
    $('.prop-block.do768').addClass('active-m');
  } else {
    $('.menu-vector.do768').removeClass('active-m');
    $('.prop-block.do768').removeClass('active-m');
  }

  if (!$('.menu-vector.ot768').hasClass('active-b')) {
    $('.menu-vector.ot768').addClass('active-b');
    $('.prop-block.ot768').addClass('active-b');
  } else {
    $('.menu-vector.ot768').removeClass('active-b');
    $('.prop-block.ot768').removeClass('active-b');
  }

  return false;
});