(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  };

  View.prototype.bindEvents = function () {
    // on click
    $('square-unopened').on('click', function (event) {
      this.makeMove(event.currentTarget);
    })
  };

  View.prototype.makeMove = function ($square) {
    var id = $square.attr('id');

  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < 9; i++) {
      this.$el.append($('<div>').addClass('square square-unopened')
        .attr('id', i));  // i from 0-8
    }
  };
})();
