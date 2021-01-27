
$(function() {

  'use strict';

  // add rightpanel for menu wrapper in mobile
  $('body').append('<div class="bb-rightpanel"></div>');

  // show/hide menu for mobile only
  $('#showBbMenu').on('click', function(){
    if($('body').hasClass('show-bb-menu')) {
      $('body').removeClass('show-bb-menu');
    } else {
      $('body').addClass('show-bb-menu');
    }
    return false;
  });

  // function to move menu-right from .headpanel to .rightpanel vice versa
  // fires only when in mobile
  function moveMenuToRight() {
    if($('#showBbMenu').css('display') === 'block') {
      $('.menu-right').appendTo('.bb-rightpanel');
    } else {
      $('.menu-right').appendTo('.bb-headpanel .container');
    }
  }

  // calls a function to move .menu-right from .headpanel to .rightpanel
  moveMenuToRight();
  $(window).resize(function(){
    moveMenuToRight();
  });

  // Select2 without the search
  if($().select2) {
    $('.select2').select2({
      minimumResultsForSearch: Infinity
    });

    // Select2 by showing the search
    $('.select2-show-search').select2({
      minimumResultsForSearch: ''
    });

    // Select2 with tagging support
    $('.select2-tag').select2({
      tags: true,
      tokenSeparators: [',', ' ']
    });
  }

  // Datepicker
  if($().datepicker) {
    $('.form-control-datepicker').datepicker();
  }

  // Rangeslider
  if($().ionRangeSlider) {
    $('#rangeslider1').ionRangeSlider();

    $('#rangeslider2').ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });

    $('#rangeslider3').ionRangeSlider({
        type: 'double',
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: '$'
    });

    $('#rangeslider4').ionRangeSlider({
        type: 'double',
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
        step: 250
    });
  }

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // function to move menu-right from .headpanel to .rightpanel vice versa
  // fires only when in mobile
  // only fires to templates/components-*.html files
  if($('.component-menu').length) {
    function moveComponentsMenuToRight() {
      if($('#showBbMenu').css('display') === 'block') {
        $('.component-menu').appendTo('.component-menu-sidebar-wrapper');
      } else {
        $('.component-menu').appendTo('.component-menu-wrapper');
      }
    }

    // calls a function to move .menu-right from .headpanel to .rightpanel
    moveComponentsMenuToRight();
    $(window).resize(function(){
      moveComponentsMenuToRight();
    });
  }

});
