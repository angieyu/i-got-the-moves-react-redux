var groove = function () {
    return {type: 'GROOVE'};
};

var move = function () {
    return {type: 'MOVE'};
};

// Async

var asyncMove = function () {
    _fakeServerApi.getMove(store.getState().count.result,
        function (data) {
            store.dispatch({type: 'INCREMENT'});
        }
    );
};