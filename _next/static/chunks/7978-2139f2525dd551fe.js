(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7978],{8273:function(c,a,b){"use strict";b.r(a),b.d(a,{CountUp:function(){return e}});var d=function(){return(d=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},e=function(){function a(a,b,c){var e=this;this.endVal=b,this.options=c,this.version="2.3.1",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(b){e.startTime||(e.startTime=b);var a=b-e.startTime;e.remaining=e.duration-a,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(a,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(a,e.startVal,e.endVal-e.startVal,e.duration):e.countDown?e.frameVal=e.startVal-(e.startVal-e.endVal)*(a/e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(a/e.duration),e.countDown?e.frameVal=e.frameVal<e.endVal?e.endVal:e.frameVal:e.frameVal=e.frameVal>e.endVal?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),a<e.duration?e.rAF=requestAnimationFrame(e.count):null!==e.finalEndVal?e.update(e.finalEndVal):e.callback&&e.callback()},this.formatNumber=function(g){i=Math.abs(g).toFixed(e.options.decimalPlaces);var i,a,d,b,f=(i+="").split(".");if(a=f[0],d=f.length>1?e.options.decimal+f[1]:"",e.options.useGrouping){b="";for(var c=0,h=a.length;c<h;++c)0!==c&&c%3==0&&(b=e.options.separator+b),b=a[h-c-1]+b;a=b}return e.options.numerals&&e.options.numerals.length&&(a=a.replace(/[0-9]/g,function(a){return e.options.numerals[+a]}),d=d.replace(/[0-9]/g,function(a){return e.options.numerals[+a]})),(g<0?"-":"")+e.options.prefix+a+d+e.options.suffix},this.easeOutExpo=function(a,b,c,d){return c*(1-Math.pow(2,-10*a/d))*1024/1023+b},this.options=d(d({},this.defaults),c),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(b),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof a?document.getElementById(a):a,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,a):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return e.handleScroll(e)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return a.prototype.handleScroll=function(a){if(a&&window&&!a.once){var d=window.innerHeight+window.scrollY,c=a.el.getBoundingClientRect(),b=c.top+c.height+window.pageYOffset;b<d&&b>window.scrollY&&a.paused?(a.paused=!1,setTimeout(function(){return a.start()},a.options.scrollSpyDelay),a.options.scrollSpyOnce&&(a.once=!0)):window.scrollY>b&&!a.paused&&a.reset()}},a.prototype.determineDirectionAndSmartEasing=function(){var a=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>a,Math.abs(a-this.startVal)>this.options.smartEasingThreshold){this.finalEndVal=a;var b=this.countDown?1:-1;this.endVal=a+b*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=a,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},a.prototype.start=function(a){this.error||(this.callback=a,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},a.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},a.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},a.prototype.update=function(a){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(a),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},a.prototype.printValue=function(b){var a=this.formattingFn(b);"INPUT"===this.el.tagName?this.el.value=a:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=a:this.el.innerHTML=a},a.prototype.ensureNumber=function(a){return"number"==typeof a&&!isNaN(a)},a.prototype.validateValue=function(a){var b=Number(a);return this.ensureNumber(b)?b:(this.error="[CountUp] invalid start or end value: ".concat(a),null)},a.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},a}()},35077:function(j,d,e){"use strict";e.d(d,{Z:function(){return o}});var k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function c(a){return function(){var b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},c=b.width?String(b.width):a.defaultWidth,d=a.formats[c]||a.formats[a.defaultWidth];return d}}var f={date:c({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:c({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:c({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function a(a){return function(d,f){var c,b=f||{};if("formatting"===(b.context?String(b.context):"standalone")&&a.formattingValues){var e=a.defaultFormattingWidth||a.defaultWidth,g=b.width?String(b.width):e;c=a.formattingValues[g]||a.formattingValues[e]}else{var h=a.defaultWidth,i=b.width?String(b.width):a.defaultWidth;c=a.values[i]||a.values[h]}return c[a.argumentCallback?a.argumentCallback(d):d]}}var g={ordinalNumber:function(c,d){var a=Number(c),b=a%100;if(b>20||b<10)switch(b%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:a({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:a({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:a({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:a({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:a({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function b(a){return function(f){var b,d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=d.width,i=c&&a.matchPatterns[c]||a.matchPatterns[a.defaultMatchWidth],g=f.match(i);if(!g)return null;var j=g[0],e=c&&a.parsePatterns[c]||a.parsePatterns[a.defaultParseWidth],h=Array.isArray(e)?n(e,function(a){return a.test(j)}):m(e,function(a){return a.test(j)});return b=a.valueCallback?a.valueCallback(h):h,{value:b=d.valueCallback?d.valueCallback(b):b,rest:f.slice(j.length)}}}function m(a,c){for(var b in a)if(a.hasOwnProperty(b)&&c(a[b]))return b}function n(b,c){for(var a=0;a<b.length;a++)if(c(b[a]))return a}var h,i={ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},e=a.match(h.matchPattern);if(!e)return null;var f=e[0],b=a.match(h.parsePattern);if(!b)return null;var c=h.valueCallback?h.valueCallback(b[0]):b[0];return{value:c=d.valueCallback?d.valueCallback(c):c,rest:a.slice(f.length)}}),era:b({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},o={code:"en-US",formatDistance:function(e,d,a){var b,c=k[e];return(b="string"==typeof c?c:1===d?c.one:c.other.replace("{{count}}",d.toString()),null!=a&&a.addSuffix)?a.comparison&&a.comparison>0?"in "+b:b+" ago":b},formatLong:f,formatRelative:function(a,b,c,d){return l[a]},localize:g,match:i,options:{weekStartsOn:0,firstWeekContainsDate:1}}},7654:function(a,c,b){var d=b(81763);a.exports=function(a){return d(a)&&a!= +a}},81763:function(b,c,a){var d=a(44239),e=a(37005);b.exports=function(a){return"number"==typeof a||e(a)&&"[object Number]"==d(a)}},13880:function(a,c,b){var d=b(79833);a.exports=function(){var a=arguments,b=d(a[0]);return a.length<3?b:b.replace(a[1],a[2])}},73955:function(a,c,b){var d=b(79833),e=0;a.exports=function(a){var b=++e;return d(a)+b}},17857:function(e,d,c){"use strict";var a,b=c(67294),f=c(8273),g=(a=b)&&"object"==typeof a&&"default"in a?a:{default:a};function h(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function i(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?h(Object(b),!0).forEach(function(a){j(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):h(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(){return(k=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function l(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}var m="undefined"!=typeof window&& void 0!==window.document&& void 0!==window.document.createElement?b.useLayoutEffect:b.useEffect;function n(a){var c=b.useRef(a);return m(function(){c.current=a}),b.useCallback(function(){for(var b=arguments.length,d=Array(b),a=0;a<b;a++)d[a]=arguments[a];return c.current.apply(void 0,d)},[])}var o=function(c,a){var d=a.decimal,e=a.decimals,g=a.duration,h=a.easingFn,i=a.end,j=a.formattingFn,k=a.numerals,l=a.prefix,b=a.separator,m=a.start,n=a.suffix,o=a.useEasing,p=a.enableScrollSpy,q=a.scrollSpyDelay;return new f.CountUp(c,i,{startVal:m,duration:g,decimal:d,decimalPlaces:e,easingFn:h,formattingFn:j,numerals:k,separator:b,prefix:l,suffix:n,useEasing:o,useGrouping:!!b,enableScrollSpy:p,scrollSpyDelay:q})},p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],q={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},r=function(c){var a=b.useMemo(function(){return i(i({},q),c)},[c]),s=a.ref,t=a.startOnMount,e=a.enableReinitialize,f=a.delay,u=a.onEnd,v=a.onStart,w=a.onPauseResume,x=a.onReset,y=a.onUpdate,z=l(a,p),A=b.useRef(),B=b.useRef(),g=b.useRef(!1),C=n(function(){return o("string"==typeof s?s:s.current,z)}),h=n(function(c){var a=A.current;if(a&&!c)return a;var b=C();return A.current=b,b}),D=n(function(){var a=function(){return h(!0).start(function(){null==u||u({pauseResume:j,reset:d,start:m,update:k})})};f&&f>0?B.current=setTimeout(a,1e3*f):a(),null==v||v({pauseResume:j,reset:d,update:k})}),j=n(function(){h().pauseResume(),null==w||w({reset:d,start:m,update:k})}),d=n(function(){B.current&&clearTimeout(B.current),h().reset(),null==x||x({pauseResume:j,start:m,update:k})}),k=n(function(a){h().update(a),null==y||y({pauseResume:j,reset:d,start:m})}),m=n(function(){d(),D()}),r=n(function(a){t&&(a&&d(),D())});return b.useEffect(function(){g.current?e&&r(!0):(g.current=!0,r())},[e,g,r,f,c.start,c.suffix,c.prefix,c.duration,c.separator,c.decimals,c.decimal,c.formattingFn]),b.useEffect(function(){return function(){d()}},[d]),{start:m,pauseResume:j,reset:d,update:k,getCountUp:h}},s=["className","redraw","containerProps","children","style"];d.ZP=function(a){var m=a.className,d=a.redraw,o=a.containerProps,e=a.children,p=a.style,q=l(a,s),f=g.default.useRef(null),z=g.default.useRef(!1),c=r(i(i({},q),{},{ref:f,startOnMount:"function"!=typeof e||0===a.delay,enableReinitialize:!1})),t=c.start,u=c.reset,v=c.update,w=c.pauseResume,h=c.getCountUp,j=n(function(){t()}),x=n(function(b){a.preserveValue||u(),v(b)}),y=n(function(){if("function"==typeof a.children&&!(f.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}h()});return(b.useEffect(function(){y()},[y]),b.useEffect(function(){z.current&&x(a.end)},[a.end,x]),b.useEffect(function(){d&&z.current&&j()},[j,d,d&&a]),b.useEffect(function(){!d&&z.current&&j()},[j,d,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.className,a.formattingFn]),b.useEffect(function(){z.current=!0},[]),"function"==typeof e)?e({countUpRef:f,start:t,reset:u,update:v,pauseResume:w,getCountUp:h}):g.default.createElement("span",k({className:m,ref:f,style:p},o),a.start?h().formattingFn(a.start):"")}}}])
//# sourceMappingURL=7978-2139f2525dd551fe.js.map