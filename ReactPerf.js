var ReactPerf = require("react/lib/ReactDefaultPerf");


if ( typeof module !== "undefined" && module.exports ) {
    module.exports = ReactPerf;
}

if ( typeof define === "function" && define.amd ) {
    define( function () {
        return ReactPerf;
    });
}