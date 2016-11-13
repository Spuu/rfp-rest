var _ = require('lodash');

var TestManager = function(){

    var idContainer = {};

    /**
     * Keep id of data
     * @param key Unique key being transformed to lower-case and with space replaced by underscore
     * @param value
     */
    var setId = function(key, value) {
        key = key.replace(/ /g, '_').toLowerCase();
        idContainer[key] = value;
    };

    var getId = function(key) {
        return idContainer[key];
    };

    var show = function() {
        console.log(idContainer);
    };

    var findKey = function(value) {
        return _.findKey(idContainer, (v) => v === value);
    };

    return {
        setId: setId,
        getId: getId,
        show: show,
        findKey: findKey
    }
};

module.exports = TestManager();