require.config({
    baseUrl: 'scripts',//定义模块跟路径
    paths: {
        jquery: 'vendor/jquery-3.0.0',
        lan: "deps/lan",
        calc: "deps/calc",
        color:"deps/color"
    }
});

// Start the main app logic.
require(['jquery', "lan", "calc","color"], function ($, lan, calc,color) {
    console.log(color)
});