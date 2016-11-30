import $ from 'jquery';
import Backbone from 'backbone';


var PageView = Backbone.View.extend({
  initialize: function() {
    this.counter = 0;
  },

  render: function() {
    // this.$el.empty();
    // Make a place for the header banner
    var headerTag = $('<header>');
    this.$el.append(headerTag);

    // Render the header banner
    var header = new HeaderView({
      //unlike button below
      el: headerTag
    });
    header.render();

    // Setup a Cage
    var cage = $('<img>');
    cage.attr('src', 'https://www.placecage.com/200/300');
    this.$el.append(cage);

    //set up click counter
    var counterHTML = '<section>Times Clicked: ' + this.counter + '</section>';
    // append to page.
    this.$el.append(counterHTML);

    // set up our buttons. not telling it wht do, implicitly makes a div tag.
    var button1 = new ButtonView();
    var button2 = new ButtonView();

    // render the buttons
    button1.render();
    button2.render();

    // put buttons on page.
    this.$el.append(button1.$el);
    this.$el.append(button2.$el);

    //listen to the buttons, thing werre listening to, listening for, function to run.
    this.listenTo(button1, 'no-suggestions', this.onClick);
    this.listenTo(button2, 'no-suggestions', this.onClick);


  },
// value side needs to be object
  events:  {
    // right: name of function that insides page view.
    'click img' : 'onClick'
  },


  onClick: function() {
    //increment the counterHTML console.log("you clicked nick");
    this.counter +=1;
    // this.render();
    // dont have to do this:   var counterHTML = '<section>Times Clicked: ' + this.counter + '</section>';
    this.$('section').html('Times Clicked Yo: '+ this.counter);
  }
});

var HeaderView = Backbone.View.extend({
  render: function() {
    this.$el.attr('id', 'yaels-header');
    this.$el.html('<h1>THIS IS A WEBPAGE</h1>');
  }
});

var ButtonView = Backbone.View.extend({
  render: function(){
    var buttonHTML = '<button> CLICK ME </button>';
    this.$el.html(buttonHTML);
  },
  events: {
    'click button' : 'onClickButton'
  },
  onClickButton: function() {
    this.$('button').css('background-color', 'yellow');
    this.trigger('no-suggestions');
  }

});

$(document).ready(function() {
  var page = new PageView({
    el: $('body')
  });
  page.render();
  $('body').append('<h1>Hello Ada</h1>');
});
