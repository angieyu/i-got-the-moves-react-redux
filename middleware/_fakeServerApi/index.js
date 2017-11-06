var _fakeServerApi = {
    // imitate the server API
    getMove: function (currentCount, cb) {
        setTimeout(function () {
            cb(currentCount + 1);
        }, 2000)
    }
};