// middleware begin
const logger = function (store) {
    return function (next) {
        return function (action) {
            console.group('logger');
            console.log('currentState == ', store.getState());
            console.log('next(action) // action == ', action);
            next(action);
            console.log('currentState == ', store.getState());
            console.groupEnd('logger');
        }
    }
};

// second middleware
const crashReporter = function (store) {
    return function (next) {
        return function (action) {
            try {
                next(action);
            } catch (err) {
                console.group('crashReporter');
                console.error('error happen with action == ', action);
                console.error(err);
                console.groupEnd('crashReporter');
            }
        }
    }
};

var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter));

function render() {
    var state = store.getState();
    document.getElementById('display').innerHTML = state.move;
}

store.subscribe(render);
render();



