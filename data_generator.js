/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = timeAndDate();
  addTweet(tweet);
};


// set time stamp
var timeAndDate = function(){
  var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var date = new Date();
  var hour = date.getHours();
  var minutes = String(date.getMinutes());
  var day = String(date.getDate());
  var month = String(monthName[date.getMonth()]);
   

    if(Number(minutes) < 10){
      minutes = '0' + minutes;
    }    

    if(hour === 12){
      return String(12) + ':' + minutes + 'pm ' + month + ' ' + day;        
    }else if(hour === 24){
      return String(12) + ':' + minutes + 'am ' + month + ' ' + day;
    }else if(hour > 12){
      return String(hour - 12) + ':' + minutes + 'pm ' + month + ' ' + day;
    }else{
      return String(hour) + ':' + minutes + 'am ' + month + ' ' + day;
    }
}


//Load Comments when button is clicked



function loadComments(){
  var $body = $('body');
  var index = streams.home.length - 1;
  var user = streams.users;
  
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="new twits"></div>');
    var link = '<a href=\"#\" class=\"' + tweet.user + ' twits\"></a>'
    var $link = $(link);	    


    $link.text('@' + tweet.user);
    $tweet.text(' (' + tweet.created_at + ') ' + ': ' + tweet.message);

    $link.appendTo($('#loadTweets'));
    $tweet.appendTo($('#loadTweets'));
  
    index -= 1;
  }
  
  
  (function(){
    $('.twits').on('click', function(){
        individualTweets('douglascalhoun');
        $('.twits').remove();
      });
  

  /*  $('.shawndrost').on('click', function(){
      individualTweets('shawndrost');
      $('.twits').remove();
    });
 
    $('mracus').on('click', function(){
      individualTweets('mracus');
      $('.twits').remove();
    });

    $('sharksforcheap').on('click', function(){
      individualTweets('sharksforcheap');
      $('.twits').remove();
    });*/
  })();
}  


function individualTweets(tweeter){
  var user = streams.users;
  var $twit = $('<div class="new"></div>');
  var filtered =[];
  var mapped = [];


  for(var key in user){
    if(tweeter === key){
      filtered.push(user[key]);
    }
  }
  
  var index = filtered.length - 1;

  while(index >= 0){
    var element = filtered[index];
    for(var key in element){
      $twit.text('@' + element[key].user + '(' + element[key].created_at + ')' + ':' + element[key].message);
      $twit.appendTo('#loadTweets');
    }
  index -= 1
  }
return mapped;

/*  for(var x = 0; x < filtered.length; x++){
    var element = filtered[x];
    for(var key in element){
      
      $twit.text('@' + element[key].`user + '(' + element[key].created_at + ')' + ':' + element[key].message);
      $twit.appendTo('#loadTweets');
    };
  };*/
};








for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};


