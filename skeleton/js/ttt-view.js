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
    var that = this;
    $('.square').on('click', function (event) {
      that.makeMove($(event.currentTarget));
    });
  };

  View.prototype.makeMove = function ($square) {
    var id = $square.attr('id');
    var x  = Math.floor(id / 3);
    var y  = id % 3;

    try {
      this.game.playMove([x,y]);
    }
    catch (e) {
      alert(e.msg);
    }

    $square.addClass(this.game.currentPlayer);
    $square.removeClass('square-unopened');

    if (this.game.isOver()) {
      //styling
      console.log("win")
      $('.square.o').css('background', 'blue');
      $('.square').removeClass('square-unopened');
      $('.square').off('click');
    }
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < 9; i++) {
      this.$el.append($('<div>').addClass('square square-unopened')
        .attr('id', i));  // i from 0-8
    }
  };
})();
