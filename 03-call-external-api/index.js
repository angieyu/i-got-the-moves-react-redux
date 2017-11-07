
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));

function render() {
    var state = store.getState();
    document.getElementById('display').innerHTML = state.move.displayMove;

    if (state.move.loading) {
        document.getElementById('status').innerHTML = "Is loading...";
    } else {
        document.getElementById('status').innerHTML = "Loaded";
    }
}

store.subscribe(render);
render();



