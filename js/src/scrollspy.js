var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof2(t)};!function(n){"use strict";function i(t,o){this.$body=n(document.body),this.$scrollElement=n(t).is(document.body)?n(window):n(t),this.options=n.extend({},i.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",n.proxy(this.process,this)),this.refresh(),this.process()}function o(e){return this.each(function(){var t=n(this),o=t.data("bs.scrollspy"),s="object"==(void 0===e?"undefined":_typeof(e))&&e;o||t.data("bs.scrollspy",o=new i(this,s)),"string"==typeof e&&o[e]()})}i.VERSION="3.3.2",i.DEFAULTS={offset:10},i.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},i.prototype.refresh=function(){var t=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),n.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=n(this),o=t.data("target")||t.attr("href"),s=/^#./.test(o)&&n(NexT.utils.escapeSelector(o));return s&&s.length&&s.is(":visible")&&[[s[e]().top+i,o]]||null}).sort(function(t,o){return t[0]-o[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},i.prototype.process=function(){var t,o=this.$scrollElement.scrollTop()+this.options.offset,s=this.getScrollHeight(),e=this.options.offset+s-this.$scrollElement.height(),i=this.offsets,r=this.targets,l=this.activeTarget;if(this.scrollHeight!=s&&this.refresh(),e<=o)return l!=(t=r[r.length-1])&&this.activate(t);if(l&&o<i[0])return n(this.selector).trigger("clear.bs.scrollspy"),this.activeTarget=null,this.clear();for(t=i.length;t--;)l!=r[t]&&o>=i[t]&&(!i[t+1]||o<=i[t+1])&&this.activate(r[t])},i.prototype.activate=function(t){this.activeTarget=t,this.clear();var o=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',s=n(o).parents("li").addClass("active");s.parent(".dropdown-menu").length&&(s=s.closest("li.dropdown").addClass("active")),s.trigger("activate.bs.scrollspy")},i.prototype.clear=function(){n(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=n.fn.scrollspy;n.fn.scrollspy=o,n.fn.scrollspy.Constructor=i,n.fn.scrollspy.noConflict=function(){return n.fn.scrollspy=t,this},n(window).on("load.bs.scrollspy.data-api",function(){n('[data-spy="scroll"]').each(function(){var t=n(this);o.call(t,t.data())})})}(jQuery);