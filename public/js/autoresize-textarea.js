!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery,a)}(this,function(a,b){"use strict";var c,d,e=window,f=document,g=navigator.userAgent;/msie|trident/i.test(g)&&(d=g.match(/(?:msie |rv:)(\d+(\.\d+)?)/i),c=d&&d.length>1&&d[1]||"");var h=function(a,b,c){a[b+c]=function(b){c.call(a,b)},a.attachEvent("on"+b,a[b+c])},i=function(a,b,c){a.detachEvent("on"+b,a[b+c])},j=function(a,b){return e.getComputedStyle?e.getComputedStyle(a)[b]:a.currentStyle?a.currentStyle[b]:void 0},k=function(b,d){null==d?d={}:"function"==typeof d&&(d={onresizeheight:d});var e=b.value;b.value="";var g=parseFloat(j(b,"paddingTop"))+parseFloat(j(b,"paddingBottom")),k=b.scrollHeight-(b.clientHeight-g);b.value=e;var l,m;9>c&&(l=function(){b.scrollTop=0},h(b,"scroll",l),m=b.value,b.value="aa",b.value=m,f.execCommand("Undo"),f.execCommand("Undo"),f.execCommand("Undo"),f.execCommand("Undo"));var n,o=!0,p=function(){if(b.value!==e||o){e=b.value;var f=b.style.height;b.style.height="";var g=function(){var c=b.scrollHeight-k;d.maxHeight&&c>d.maxHeight?(b.style.height=d.maxHeight+"px",b.style.overflowY="auto",b.detachEvent&&i(b,"scroll",l)):b.style.height=c+"px";var e=parseFloat(b.style.height);n!==e&&(n=e,a&&a.fn&&a(b).trigger("autoresize:height",e),d.onresizeheight&&d.onresizeheight.call(b,e))};9>c?(setTimeout(g,0),b.style.height=f):g()}};if(b.addEventListener&&(!c||c>9))b.addEventListener("input",p,!1);else{var q=function(a){"value"===a.propertyName&&p()};h(b,"propertychange",q);var r=function(a){"focus"===a.type?h(f,"selectionchange",p):i(f,"selectionchange",p)};h(b,"focus",r),h(b,"blur",r),h(b,"keyup",p)}return p(),o=!1,{reset:function(){b.style.height="",b.removeEventListener&&(!c||c>9)?b.removeEventListener("input",p,!1):(b.style.overflowY="",i(b,"propertychange",q),i(f,"selectionchange",p),i(b,"focus",r),i(b,"blur",r),i(b,"keyup",p),i(b,"scroll",l))}}};return a&&a.fn?a.fn.autoResize=function(b){var c=[];return this.each(function(a,d){c.push(k(d,b))}),{reset:function(){a.each(c,function(a,b){b.reset()})}}}:b&&(b.autoResize=k),k});
