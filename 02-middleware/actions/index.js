var groove = function () {
    return {type: 'GROOVE'};
};

var move = function () {
    return {type: 'MOVE'};
};

// Async

var asyncMove = function (dispatch, state) {
    dispatch({type: "MOVE_LOADING"});
    _fakeServerApi.getMove(
        function (data) {
            dispatch({type: 'MOVE'});
        }
    );
};