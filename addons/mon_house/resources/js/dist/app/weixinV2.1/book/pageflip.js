!function(a){if("function"==typeof define&&define.cmd)define("app/weixinV2.1/book/pageflip",["gallery/zepto/1.1.3/zepto","app/weixinV2.1/book/utilities"],function(b){var c=b("gallery/zepto/1.1.3/zepto"),d=b("app/weixinV2.1/book/utilities");a(c,d)});else{var b=window.jQuery?jQuery:Zepto;a(b)}}(function(a,b){function c(){var a,b,c=document.createElement("div"),d={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in d)if(d.hasOwnProperty(a)&&c.style[a]!==b)return d[a];return null}function d(){return!!c()}var e=d(),f=c()||"noNativeTranstionEnd",g=function(c,d){function g(){c.addClass("pageFlipWrapper"),B=c.children(),C=B.length,t(),u(),s(),v(),w(),A.dataPageUrlList&&a.isArray(A.dataPageUrlList)&&A.dataPageUrlList.length>0&&h(A.dataPageUrlList),k(),r()}function h(b){{var c=C;b.length}a.each(b,function(a,b){var d=a+1,e=c+d,f=location.origin;0===b.url.indexOf("http")&&-1===b.url.indexOf(f)||(C++,i(b,e),j(b,e))})}function i(b,c){var d=a("<div data-pageId='"+c+"' data-moduleId='"+b.module_id+"'></div>").addClass("page"),e=A.loadingDomString;d.append(e),D.prepend(d)}function j(d,e){a.ajax({type:"GET",url:d.url,dataType:"text",context:a("body"),success:function(f){var g=b.getDomBody(f);a("div[data-pageId='"+e+"']").html(g),c.trigger({type:"pageDomLoaded",detail:{url:d.url,module_id:d.module_id,pageId:e}})},error:function(){}})}function k(){if(G.on("click",n),H.on("click",m),A.touchGesture&&A.touchPlugin){var b=A.touchPlugin;switch(b){case"zepto":var d=D.children();d.on("swipeLeft",m),d.on("swipeRight",n);break;default:a("div.page").on("swipeLeftMy",function(a){return m(a),!1}),a("div.page").on("swipeRightMy",function(a){return n(a),!1})}}D.on("transition_start",function(a,b){var d=F;return"next"===b.slideType?F++:F--,I.slideType=b.slideType,I.element=b.element,r(),e||I.element.trigger(f),c.trigger({type:"pageselected",detail:{oldPageIndex:d,currentPageIndex:F,element:I.element}}),!1}),D.children().on(f,function(b){I.element&&"next"===I.slideType&&D.prepend(I.element);var c=a(b.target)||I.element;return c&&(c.removeClass("transition").removeClass("slideRight"),c.css({"-webkit-transform":"",transform:""})),l(),!1})}function l(){I={slideType:null,element:null}}function m(a){if(a&&a.preventDefault(),F===C-1)return!1;if(!p()){if(!A.quickFlip)return!1;o()}var b=c.find('div[data-pageId="'+(F+1)+'"]');return q(b,"next"),!1}function n(a){if(a&&a.preventDefault(),0===F)return!1;if(!p()){if(!A.quickFlip)return!1;o()}var b=c.find('div[data-pageId="'+F+'"]');return D.append(b),q(b,"previous"),!1}function o(){return p()?!1:(I.element.trigger(f),!1)}function p(){return null===I.element}function q(b,c){var d=a(window).width();"next"==c?(b.addClass("transition"),b.css({"-webkit-transform":"translateX(-"+d+"px)",transform:"translateX(-"+d+"px)"}),D.trigger("transition_start",{slideType:c,element:b})):(D.trigger("transition_start",{slideType:c,element:b}),b.css({"-webkit-transform":"translateX(-"+d+"px)",transform:"translateX(-"+d+"px)"}),setTimeout(function(){b.addClass("transition slideRight")},100))}function r(){0>=F?G.addClass("disabledButton"):G.removeClass("disabledButton"),F>=C-1?H.addClass("disabledButton"):H.removeClass("disabledButton")}function s(){D=a("<div class='displayContainer'></div>"),c.append(D)}function t(){E=a("<div class='originalPagesContainer'></div>"),c.append(E)}function u(){E.append(B)}function v(){a.each(B,function(b,c){var d=a(c).attr("data-pageId",b+1).addClass("page");D.prepend(d)})}function w(){var b=a("<div class='pagerContainer'></div>");G=a("<a href='#' class='prevBtn'>Previous Button</a>"),H=a("<a href='#' class='nextBtn'>Next Button</a>"),b.append(G),b.append(H),c.append(b)}function x(b,d){var e=d+1,f=D.children(),g=y(e);f.sort(function(b,c){var d=a.inArray(parseInt(a(b).attr("data-pageId")),g),e=a.inArray(parseInt(a(c).attr("data-pageId")),g);return d-e}),o(),D.append(f),r(),c.trigger({type:"pageselected",detail:{oldPageIndex:b,currentPageIndex:d,element:c.find("div[data-pageId='"+e+"']")}})}function y(b){for(var c=[],d=C;d>0;d--)c.push(d);var e=a.inArray(b,c);if(-1===e)return c;var f=c.splice(e+1);return c.unshift(f),c}this.element=c;var z={keyboardShortCuts:!1,loadingDomString:"<div>Loading....</div>",quickFlip:!1,touchGesture:!1,touchPlugin:null,dataPageUrlList:null},A=a.extend({},z,d),B=null,C=0,D=null,E=null,F=0,G=null,H=null,I={slideType:null,element:null};this.next=function(){m()},this.previous=function(){n()},this.count=function(){return C},this.getCurrentPage=function(){return F+1},this.setCurrentPage=function(a){var b=F;a>0&&C>=a&&a!==b+1&&(F=a-1,x(b,F))},g()};g.prototype.addEventListener=function(a,b){return this.element.on(a,b)},g.prototype.dispatchEvent=function(a,b){return this.element.trigger(a,b)},g.prototype.removeEventListener=function(a,b){return this.element.off(a,b)},window.PageFlip=g});