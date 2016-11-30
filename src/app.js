import $ from 'jquery';
import Backbone from 'backbone';


var PageView = Backbone.View.extend({
  render: function() {
    var cage = $('<img>');
    cage.attr('src', 'https://www.placecage.com/200/300');
    this.$el.append(cage);
  }
});

$(document).ready(function() {
  var page = new PageView({
    el: $('body')
  });
  page.render();
  $('body').append('<h1>Hello Ada</h1>');
});
