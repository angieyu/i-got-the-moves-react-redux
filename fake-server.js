import myMoves from 'all-my-moves';

var _fakeServerAPI = {
    getMove: function () {
        setTimeout(function () {
            var rand = myMoves[Math.floor(Math.random() * myMoves.length)];
        }, 2000)
    }
}