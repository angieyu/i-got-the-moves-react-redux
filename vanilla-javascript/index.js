// middleware begin


// middleware end


var store = Redux.createStore(combineReducer);

function render() {
    var state = store.getState();
    document.getElementById('display').innerHTML = state.move;
}

store.subscribe(render);
render();



