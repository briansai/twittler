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

//--------------------------------------------------------Brian's Codes----------------------------------------------------------------------

// Set time stamp
function timeAndDate(){
  var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var date = new Date();
  var hour = date.getHours();
  var minutes = String(date.getMinutes());
  var day = String(date.getDate());
  var month = String(monthName[date.getMonth()]);
  var twelve = String(12); 

    if(Number(minutes) < 10){
      minutes = '0' + minutes;
    }    

    if(hour === 12){
      return twelve + ':' + minutes + 'pm ' + month + ' ' + day;        
    }else if(hour === 24){
      return twelve + ':' + minutes + 'am ' + month + ' ' + day;
    }else if(hour > 12){
      return String(hour - 12) + ':' + minutes + 'pm ' + month + ' ' + day;
    }else{
      return String(hour) + ':' + minutes + 'am ' + month + ' ' + day;
    }
}


//Load tweets when 'VIEW TWEETS' button is clicked
$(document).ready(function(){
  $('.tweets').on('click', function(){
    loadTweets();
  });

});




//Function that loads all tweets when 'VIEW TWEETS' button is clicked
function loadTweets(){
  
  var index = streams.home.length - 1;
  
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="new twits">' + link + '</div>');
    var link = '<a href=\"#\" class=\"' + tweet.user + ' twits\"></a>'
    var $link = $(link);	    
    

    $link.text('@' + tweet.user);
    $tweet.text(' (' + tweet.created_at + ') ' + ': ' + tweet.message);

    $link.appendTo($('.loadTweets'));
    $tweet.appendTo($('.loadTweets'));
    
    index -= 1;
  }
  

//Load tweets that are specific to the person clicked
  (function(){
      
    $('.douglascalhoun').on('click', function(){
       $('.twits').remove();
       $('button').remove();     
       individualTweets('douglascalhoun');
    });

    $('.shawndrost').on('click', function(){
       individualTweets('shawndrost');
       $('.twits').remove();
       $('button').remove();
    });

    $('.mracus').on('click', function(){
       individualTweets('mracus');
       $('.twits').remove();
       $('button').remove();
    });

    $('.sharksforcheap').on('click', function(){
       individualTweets('sharksforcheap');
       $('.twits').remove();
       $('button').remove();
    });
 
  })();
}

//retrieve individual tweets
function individualTweets(tweeter){
  var user = streams.users;
  var filtered =[];
  var index = filtered.length - 1;

  for(var key in user){
    if(tweeter === key){ 
      var element = user[key];
      for(var x = 0; x < element.length; x++){
        filtered.push(element[x]);
      }
    }	
  }

  

  for(var x = filtered.length - 1; x >= 0; x--){
    var userTweets = filtered[x];
    var $twit = $('<div class="new"></div>');
    $twit.text('@' + userTweets.user + '(' + userTweets.created_at + '): ' + userTweets.message);
    $twit.appendTo('.loadTweets');
  }

};








