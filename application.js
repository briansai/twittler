$(document).ready(function(){
  $('.comments').on('click', function(){
    $(this).append(loadComments());    
  });
});

$(document).ready(function(){
  $('.username').on('click', function(){
    $(this).append(userName());
  });
});
