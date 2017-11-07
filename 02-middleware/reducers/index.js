var myMoves = ['Firefly', 'Ballerina', 'Snake', 'Archangel'];
var grooves = ['Cat cow rolls', 'Fiddle'];

function getRandomMove(array) {
    var randMove = array[Math.floor(Math.random() * array.length)];
    return randMove;
}

function getNextMove(currentState, action) {
    var DEFAULT_STATE = {displayMove: "???", loading: false};
    var nextState = Object.assign({}, currentState);
    if (currentState == undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type) {
        case 'GROOVE':
            nextState.displayMove = getRandomMove(grooves);
            // funcWithError();
            return nextState;
        case 'MOVE':
            nextState.displayMove = getRandomMove(myMoves);
            nextState.loading = false;
            return nextState;
        case 'MOVE_LOADING':
            nextState.loading = true;
            return nextState;
        default:
            nextState = currentState;
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

