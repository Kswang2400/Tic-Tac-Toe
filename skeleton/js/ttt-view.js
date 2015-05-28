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
      $square.addClass(this.game.currentPlayer);
      $square.removeClass('square-unopened');
      this.game.playMove([x,y]);
    }
    catch (e) {
      alert(e.msg);
    }
    // this.game.swapTurn();
    // $square.addClass(this.game.currentPlayer);
    // $square.removeClass('square-unopened');
    // this.game.swapTurn();

    if (this.game.isOver()) {
      //styling
      $('.square.' + this.game.winner()).addClass("winner");
      $('.square').removeClass('square-unopened');
      $('.square').off('click');

      $('.winning').text(this.game.winner() + " is the winner!").show();
    }
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < 9; i++) {
      this.$el.append($('<div>').addClass('square square-unopened')
        .attr('id', i));  // i from 0-8
    }
  };
})();
