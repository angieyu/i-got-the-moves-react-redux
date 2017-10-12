var myMoves = ['Firefly', 'Ballerina', 'Snake', 'Archangel'];
var grooves = ['Cat cow rolls', 'Fiddle'];

function getRandomMove(array) {
    var randMove = array[Math.floor(Math.random() * array.length)];
    return randMove;
}

function getNextMove(currentState, action) {
    var DEFAULT_STATE = "???";

    if (currentState == undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type) {
        case 'GROOVE':
            nextState = getRandomMove(grooves);
            funcWithError();
            return nextState;
        case 'MOVE':
            nextState = getRandomMove(myMoves);
            return nextState;
        default:
            return nextState;
    }
}

function combineReducer(currentState, action) {
    var DEFAULT_STATE = {move: 'Go ahead and click..'};
    var nextState = Object.assign({}, currentState);

    nextState = {
        move: getNextMove(nextState.move, action)
    };
    return nextState;
}

function funcWithError() {
    throw Error('an error is thrown');
}
