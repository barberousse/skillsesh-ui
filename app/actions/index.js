var Dispatcher = require('../dispatcher');

module.exports = {
    readAbout(obj) {
        Dispatcher.dispatch({type:'READ_ABOUT', data: obj});
    }
};