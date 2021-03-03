this.foe = this.foe || {};

(function () {
    'use strict';
    function CORSTest() {}
    CORSTest.prototype.validResponse = function () {
        var content = 'CORSTest: Valid response';
        console.log(content);
        return content;
        $.cookie(cookieName, instanceId, {path: '/game/'});

        var interval = window.setInterval(function() {
            var storedInstance = $.cookie(cookieName);

            if (storedInstance && storedInstance != instanceId) {
                window.clearInterval(interval);
                terminate();
            }
        }, cookiePollInterval);
    };

    CORSTest.prototype.invalidResponse = function () {
        console.log('CORSTest: Will trigger reference error!');
        window.setInterval(function () {
            console.log('CORSTest: Triggering reference error!');
            thisFunctionDoesNotExist();
        }, 3000);
    };

    foe.corsTest = new CORSTest();
})();
