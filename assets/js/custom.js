var gleit=function(){"use strict";
function n(r,n){if(!r&&n&&void 0!==n[1])
    return function(t){return n[1]};if(!n&&r&&void 0!==r[1])
    return function(t){return r[1]};if(!r||void 0===r[0]||void 0===r[1]||!n||void 0===n[0]||void 0===n[1])
    throw new 
Error("bad input: "+r+" , "+n);
return r[0]==n[0]?function(t){return r[1]}:function(t){return t<=r[0]?r[1]:t>=n[0]?n[1]:(t-r[0])/(n[0]-r[0])*(n[1]-r[1])+r[1]}}
Array.prototype.filter||(Array.prototype.filter=function(t,r)
{if("Function"!=typeof t&&"function"!=typeof t||!this)
throw new TypeError;var n=this.length>>>0,e=new Array(n),o=this,i=0,a=-1;
if(void 0===r)
for(;++a!==n;)a in this&&t(o[a],a,o)&&(e[i++]=o[a]);
else for(;++a!==n;)a in this&&t.call(r,o[a],a,o)&&(e[i++]=o[a]);
return e.length=i,e});
var s={single:n,multi:function(r){return function(t){return n(function(t,r){var n=t.filter(function(t){return t[0]<=r});if(0<n.length)
return n[n.length-1]}(r,t),function(t,r){var n=t.filter(function(t){return t[0]>=r});if(0<n.length)
return n[0]}(r,t))(t)}}};
var f={decompose:function(t){var r=t.split(/(\-?(?:(?:\d+(?:\.\d+)?)|(?:\.\d+)))([^(\d|\s)][^\s]*)?/);
if(r&&4==r.length){var n=1*r[1],e=r[2];
    return e&&(e=e.toLowerCase()),[n,e]}
    throw new Error("improper input: "+t)},position:function(t,r,n){if(n||(n={current:"current",total:"total",window:"window"}),!("current"in n))
    throw new Error('transform missing "current" key: '+n);
    if(!("total"in n))
    throw new Error('transform missing "total" key: '+n);
if(!("window"in n))
throw new Error('transform missing "window" key: '+n);
if(!(n.current in t))
throw new Error('ref missing "'+n.current+'" key: '+t);
if(!(n.total in t))
throw new Error('ref missing "'+n.total+'" key: '+t);
var e=t[n.current],o=t[n.total],i=o;
if(n.window in t&&(i=t[n.window]),"px"==r||""==r||"ms"==r||!r)return e;
if("s"==r)
return e/1e3;
if("m"==r)return e/6e4;
if("%"==r)return e/o*100;
if("vh"==r||"vw"==r)return e/i*100;if("w"==r)return e/i;
throw new Error("Improper unit: "+r)}};
var t=function(t){var a=void 0,c={},r={};
for(var n in t){var e=n;if("string"==typeof n){var o=f.decompose(n);
    a||(a=o[1]),e=o[0]}var i=t[n];for(var u in i){u in r||(r[u]=[]);
        var l=i[u];"string"==typeof l&&(l=(o=f.decompose(l))[0],c[u]||(c[u]=o[1])),r[u].push([e,l])}}var d={};
        for(var u in r)r[u].sort(function(t,r){return t[0]-r[0]}),d[u]=s.multi(r[u]);
        return function(i){return function(t){var r=f.position(t,a,i),n={};
        for(var e in d){var o=d[e](r);c[e]&&(o+=c[e]),n[e]=o}
        return n}}};var r=function(t){var r="",n="";
        return void 0!==t.translateX&&(n+=" translateX("+t.translateX+")"),void 0!==t.translateY&&(n+=" translateY("+t.translateY+")"),void 0!==t.scale?n+=" scale("+t.scale+")":(void 0!==t.scaleX&&(n+=" scaleX("+t.scaleX+")"),void 0!==t.scaleY&&(n+=" scaleY("+t.scaleY+")")),void 0!==t.rotate?n+=" rotate("+t.rotate+")":(void 0!==t.rotateX&&(n+=" rotateX("+t.rotateX+")"),void 0!==t.rotateY&&(n+=" rotateY("+t.rotateY+")"),void 0!==t.rotateZ&&(n+=" rotateZ("+t.rotateZ+")")),void 0!==t.opacity&&(r+="opacity: "+t.opacity+";"),0<n.length&&(r="transform:"+n+";"+r),function(t){t.setAttribute("style",r)}};var e=function(t){var e=t,o=t;return t&&t!==document&&t!==document.documentElement&&t!==document.body&&t!==window||(e=window,o=void 0),function(t){var r=t({current:"scrollTop",total:"scrollHeight",window:"clientHeight"}),n={scrollTop:document.body.scrollTop||document.documentElement.scrollTop,clientHeight:window.innerHeight,scrollHeight:document.body.scrollHeight};e.addEventListener("scroll",function(){var t={scrollTop:document.body.scrollTop||document.documentElement.scrollTop,clientHeight:window.innerHeight,scrollHeight:document.body.scrollHeight};r(o||t)}),r(o||n)}};
        var o=function(t){var e=t,o=t;
    return t&&t!==document&&t!==document.documentElement&&t!==document.body&&t!==window||(e=window,o=void 0),function(t){var r=t({current:"scrollLeft",total:"scrollWidth",window:"clientWidth"}),n={scrollLeft:document.body.scrollLeft||document.documentElement.scrollLeft,clientWidth:window.innerWidth,scrollWidth:document.body.scrollWidth};e.addEventListener("scroll",function(){var t={scrollLeft:document.body.scrollLeft||document.documentElement.scrollLeft,clientWidth:window.innerWidth,scrollWidth:document.body.scrollWidth};r(o||t)}),r(o||n)}},i={client:{x:function(t){var r=t();window.addEventListener("mousemove",function(t){r({current:t.clientX,total:window.innerWidth})})},y:
function(t){var r=t();window.addEventListener("mousemove",function(t){r({current:t.clientY,total:window.innerHeight})})}},page:{x:function(t){var r=t();window.addEventListener("mousemove",function(t){r({current:t.pageX,window:window.innerWidth,total:document.body.scrollWidth})})},y:function(t){var r=t();window.addEventListener("mousemove",function(t){r({current:t.pageY,window:window.innerHeight,total:document.body.scrollHeight})})}}};
var a=function(e,t){var o=0,i=1;
    if("string"==typeof e){var r=f.decompose(e);if("ms"===r[1])e=r[0];
    else if("s"===r[1])e=1e3*r[0];
    else{if("m"!==r[1])throw new Error("unrecognized time unit: "+r[1]);
    e=6e4*r[1]}}t&&t.loop&&(o=1),t&&t.bounce&&(o=2);var a=0;
    return function(t){var r,n=t();(r=function(){if(n({current:a,total:e}),e<(a+=i*(1e3/60))){if(0==o)return;1==o&&(a=0),2==o&&(i=-1,a=e)}if(a<0){if(0==o)return;1==o&&(a=e),2==o&&(i=1,a=0)}setTimeout(r,1e3/60)})()}};function c(){}return Array.prototype.map||(Array.prototype.map=function(t){var r,n,e;if(null==this)
        throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;
        if("function"!=typeof t)
        throw new TypeError(t+" is not a function");
        for(1<arguments.length&&(r=arguments[1]),n=new Array(i),e=0;e<i;){var a,c;e in o&&(a=o[e],c=t.call(r,a,e,o),n[e]=c),e++}return n}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,r){if(null==t)
            throw new TypeError("Cannot convert undefined or null to object");
            for(var n=Object(t),e=1;e<arguments.length;e++){var o=arguments[e];
                if(null!=o)
                for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},writable:!0,configurable:!0}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}),c.prototype.animateProp=t,c.prototype.renderStyles=r,c.prototype.verticalScroll=e,c.prototype.horizontalScroll=o,c.prototype.mouseMove=i,c.prototype.timeline=a,c.prototype.animate=function(t,r){if(!t&&document.querySelectorAll)return this.animate(document.querySelectorAll("[data-gleit]"),r);if(!Array.isArray(t)&&(!t.constructor||!t.constructor.name||"HTMLCollection"!==t.constructor.name&&"NodeList"!==t.constructor.name))return this.animate([t],r);var n=[],e=void 0;r&&(e=this.animateProp(r));
                for(var o=0;o<t.length;o++){var i=e,a=t[o];if(!i&&a.hasAttribute("data-gleit"))try{var c=JSON.parse(a.getAttribute("data-gleit"));i=this.animateProp(c)}catch(t){}i&&n.push([a,i])}var u=this;function l(r){var a=n.map(function(t){return[t[0],t[1](r)]});
                return function(i){window.requestAnimationFrame(function(){for(var t in a){var r=a[t],n=r[1](i),e=r[0],o=e.getAttribute("data-gleit-computed");o&&(n=Object.assign({},JSON.parse(o),n)),e.setAttribute("data-gleit-computed",JSON.stringify(n)),u.renderStyles(n)(r[0])}})}}return{on:function(t){t(l)}}},new c}();
