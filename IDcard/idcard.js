// plugin.js
// plugin.js
;(function(undefined) {
    "use strict"
    var _global;
 
    function result(args,type){
        var argsArr = Array.prototype.slice.call(args);
        if(argsArr.length == 0) return 0;
        switch(type) {
            case 1: return argsArr[0].replace(/^\d{18}$/,"test")
            default: return 0;
        }
    }
 
    function Calculate(){}
    Calculate.prototype.reverse = function(){console.log(result(arguments,1));return this;}
    
 
    // 最后将插件对象暴露给全局对象
    _global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Calculate;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return Calculate;});
    } else {
        !('Calculate' in _global) && (_global.Calculate = Calculate);
    }
}());