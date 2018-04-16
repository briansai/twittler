/*$(document).ready(function(){
  //Event listener for loading tweets
  $('.view').on('click', function(){
    loadComments();
  });	

  
function individualTweets(tweeter){
  var user = streams.users;
  var $twit = $('<div class="new"></div>');
  var filtered =[];


  for(var key in user){
    if(tweeter === key){
      var element = user[key];
      for(var x = 0; x < element.length; x++){
        filtered.push(element[x]);
      }
    }
  }
  console.log(filtered);

  var index = filtered.length - 1;
   console.log(index);

   var sentence = filtered[0];
    $twit.text('@' + sentence.user + '(' + sentence.created_at + '): ' + sentence.message);
     $twit.appendTo($('.loadTweets'));
   sentence = filtered[1];
  $twit.text('@' + sentence.user + '(' + sentence.created_at + '): ' + sentence.message);
     $twit.appendTo($('.loadTweets'));

  while(index >= 0){
    var sentence = filtered[index];
      console.log(sentence);
      //when console.logged, the text below works perfectly, however with twit.text, the output only produces one tweet. 
      //console.log('@' + sentence[key].user + '(' + sentence[key].created_at + ') :' + sentence[key].message);
      $twit.text('@' + sentence.user + '(' + sentence.created_at + '): ' + sentence.message);
      $twit.appendTo($('.loadTweets'));
      $twit.text('@' + sentence.user + '(' + sentence.created_at + '): ' + "potatoes potatoes");
      $twit.appendTo($('.loadTweets'));
  };
};
}); */






