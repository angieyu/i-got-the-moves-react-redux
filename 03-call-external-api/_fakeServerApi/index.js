var myMoves = ['Firefly', 'Ballerina', 'Snake', 'Archangel'];

function getRandomMove(array) {
    var randMove = array[Math.floor(Math.random() * array.length)];
    return randMove;
}

var _fakeServerApi = {
    // imitate the server API
    getMove: function (cb) {
        setTimeout(function () {
            cb();
        }, 5000)
    }
};