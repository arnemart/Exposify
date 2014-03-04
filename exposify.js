(function(root) {
    function init(Dep1, Dep2) {
        Dep1 = Dep1 || root.Dep1;
        Dep2 = Dep2 || root.Dep2;

        // TODO: Write MyFancyLib
        var MyFancyLib = {};

        return MyFancyLib;
    }

    // Exposify
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = init(require('dep1'), require('dep2'));
    } else if (typeof define === 'function' && define.amd) {
        define(['dep1', 'dep2'], function(Dep1, Dep2) {
            return init(Dep1, Dep2);
        });
    } else {
        root.MyFancyLib = init();
    }
})(this);
