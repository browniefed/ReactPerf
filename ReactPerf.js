var Reactperf = require("react/lib/ReactDefaultPerf");


if ( typeof module !== "undefined" && module.exports ) {
    module.exports = ReactPerf;
}

// ... or as AMD module
else if ( typeof define === "function" && define.amd ) {
    define( function () {
        return ReactPerf;
    });
}