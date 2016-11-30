//app.js
// this is where your code starts running.
// only what we say will happen to run the rest of the files.

//like require statement.
import $ from 'jquery';
import Backbone from 'backbone';

// we got a view! (its going to own entire page. PageView is the 'class'. )
var PageView = Backbone.View.extend({
  // we can tell them to initialize & render.//render tells what its going to look like.
  render: function(){
    var cage = $('<img>');
    // 2nd parameter.
    cage.attr('src', 'https://www.placecage.com/200/300');
    this.$el.append(cage);
  }
});

$(document).ready(function() {

  //making an instance of PageView
  var page = new PageView({
    // tells page what it owns.
    el: $('body')

  });
  // creating a new instance of pageview
  var header = new PageView({
    el: $('header')

  });


  $('header').append('<h1>I\'m a fancy page Header</h1>');
  header.render();

  $('body').append('<h1>Hey Girl, Hey!</h1>');
  // making cage render.
  page.render();



});
