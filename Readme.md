# Exposify

Write a Javascript module and expose it through whatever method is available.

Works with CommonJS, AMD, and plain JS.

```javascript
(function(root) {

    // The "init" function takes its dependencies as arguments, and returns the module.
    function init(Dep1, Dep2) {
        Dep1 = Dep1 || root.Dep1; // If dependencies are not passed in, find them on the root object.
        Dep2 = Dep2 || root.Dep2;

        // TODO: Write MyFancyLib here
        var MyFancyLib = {};

        return MyFancyLib;
    }

    // Exposify
    if (typeof module === 'object' && typeof module.exports === 'object') {
        // If using commonJS (e.g. node or browserify), use "require" to get dependencies.
        module.exports = init(require('dep1'), require('dep2'));
    } else if (typeof define === 'function' && define.amd) {
        // If using AMD, define a new module with dependencies.
        define(['dep1', 'dep2'], function(Dep1, Dep2) {
            return init(Dep1, Dep2);
        });
    } else {
        // Otherwise, expose module on the root object.
        root.MyFancyLib = init();
    }

})(this); // Pass in the root object ("window" if in a browser) to our IIFE

```
