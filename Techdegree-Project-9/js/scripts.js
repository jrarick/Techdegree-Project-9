$('.close-alert').click(function(){
  $('.alert').slideUp();
});

$('.link').hover(
  function() {
    $(this).addClass('hovered-logo');
  }, function() {
    $(this).removeClass('hovered-logo');
  }
);

$('.message-form').submit(
  function(event) {
    alert('Your message has been sent!');
    event.preventDefault();
    $('.user-search').val('');
    $('.message').val('');
  }
);

$('.settings-form').submit(
  function(event) {
    alert('Your settings have been saved!');
    event.preventDefault();
  }
);
