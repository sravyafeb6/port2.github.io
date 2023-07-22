$(document).ready(function() {
    $('.dropbtn').click(function() {
      $('.dropdown-content').toggleClass('show');
    });
  
    $(document).click(function(event) {
      if (!$(event.target).closest('.dropdown').length) {
        $('.dropdown-content').removeClass('show');
      }
    });
  });
  