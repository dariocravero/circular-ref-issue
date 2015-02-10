(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/craverod/opensource/circular-ref-issue/src/file-1.js":[function(require,module,exports){
"use strict";

var File2 = require("./file-2");

module.exports = {
  src: "File 1",
  etc: [File2]
};


},{"./file-2":"/Users/craverod/opensource/circular-ref-issue/src/file-2.js"}],"/Users/craverod/opensource/circular-ref-issue/src/file-2.js":[function(require,module,exports){
"use strict";

// NOTE. This is the circular ref. File1 shouldn't be here.
var File1 = require("./file-1");
var File4 = require("./file-4");

module.exports = {
  src: "File 2",
  etc: [File1, File4]
}

// // Removing the circular ref.
// var File4 = require('./file-4')

// module.exports = {
//   src: 'File 2',
//   etc: [File4]
// }
;


},{"./file-1":"/Users/craverod/opensource/circular-ref-issue/src/file-1.js","./file-4":"/Users/craverod/opensource/circular-ref-issue/src/file-4.js"}],"/Users/craverod/opensource/circular-ref-issue/src/file-3.js":[function(require,module,exports){
"use strict";

var File4 = require("./file-4");

module.exports = {
  src: "File 3",
  etc: [File4]
};


},{"./file-4":"/Users/craverod/opensource/circular-ref-issue/src/file-4.js"}],"/Users/craverod/opensource/circular-ref-issue/src/file-4.js":[function(require,module,exports){
"use strict";

module.exports = "File 3";


},{}],"/Users/craverod/opensource/circular-ref-issue/src/index.js":[function(require,module,exports){
"use strict";

var CircularRefIssue = {
  File1: require("./file-1"),
  File2: require("./file-2"),
  File3: require("./file-3")
};

window.CircularRefIssue = module.exports = CircularRefIssue;


},{"./file-1":"/Users/craverod/opensource/circular-ref-issue/src/file-1.js","./file-2":"/Users/craverod/opensource/circular-ref-issue/src/file-2.js","./file-3":"/Users/craverod/opensource/circular-ref-issue/src/file-3.js"}]},{},["/Users/craverod/opensource/circular-ref-issue/src/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9jaXJjdWxhci1yZWYtaXNzdWUvc3JjL2ZpbGUtMS5qcyIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL2NpcmN1bGFyLXJlZi1pc3N1ZS9zcmMvZmlsZS0yLmpzIiwiL1VzZXJzL2NyYXZlcm9kL29wZW5zb3VyY2UvY2lyY3VsYXItcmVmLWlzc3VlL3NyYy9maWxlLTMuanMiLCIvVXNlcnMvY3JhdmVyb2Qvb3BlbnNvdXJjZS9jaXJjdWxhci1yZWYtaXNzdWUvc3JjL2ZpbGUtNC5qcyIsIi9Vc2Vycy9jcmF2ZXJvZC9vcGVuc291cmNlL2NpcmN1bGFyLXJlZi1pc3N1ZS9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVoQyxNQUFNLENBQUMsT0FBTyxHQUFHO0VBQ2YsR0FBRyxFQUFFLFFBQVE7RUFDYixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDYixDQUFDO0FBQ0Y7OztBQ1JBLFlBQVksQ0FBQzs7QUFFYiwyREFBMkQ7QUFDM0QsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFaEMsTUFBTSxDQUFDLE9BQU8sR0FBRztFQUNmLEdBQUcsRUFBRSxRQUFRO0VBQ2IsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUNyQixDQUFDOztBQUVELGdDQUFnQztBQUNoQyxrQ0FBa0M7O0FBRWxDLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLElBQUk7QUFDSixDQUFDO0FBQ0Q7OztBQ25CQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVoQyxNQUFNLENBQUMsT0FBTyxHQUFHO0VBQ2YsR0FBRyxFQUFFLFFBQVE7RUFDYixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDYixDQUFDO0FBQ0Y7OztBQ1JBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUMxQjs7O0FDSEEsWUFBWSxDQUFDOztBQUViLElBQUksZ0JBQWdCLEdBQUc7RUFDckIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7RUFDMUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7RUFDMUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDNUIsQ0FBQyxDQUFDOztBQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO0FBQzVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgRmlsZTIgPSByZXF1aXJlKFwiLi9maWxlLTJcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzcmM6IFwiRmlsZSAxXCIsXG4gIGV0YzogW0ZpbGUyXVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWpjbUYyWlhKdlpDOXZjR1Z1YzI5MWNtTmxMMk5wY21OMWJHRnlMWEpsWmkxcGMzTjFaUzl6Y21NdlptbHNaUzB4TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzU1VGQlNTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGQk96dEJRVVV2UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSE8wRkJRMllzUzBGQlJ5eEZRVUZGTEZGQlFWRTdRVUZEWWl4TFFVRkhMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU03UTBGRFlpeERRVUZCSWl3aVptbHNaU0k2SWk5VmMyVnljeTlqY21GMlpYSnZaQzl2Y0dWdWMyOTFjbU5sTDJOcGNtTjFiR0Z5TFhKbFppMXBjM04xWlM5emNtTXZabWxzWlMweExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpZG1GeUlFWnBiR1V5SUQwZ2NtVnhkV2x5WlNnbkxpOW1hV3hsTFRJbktWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmlBZ2MzSmpPaUFuUm1sc1pTQXhKeXhjYmlBZ1pYUmpPaUJiUm1sc1pUSmRYRzU5WEc0aVhYMD0iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gTk9URS4gVGhpcyBpcyB0aGUgY2lyY3VsYXIgcmVmLiBGaWxlMSBzaG91bGRuJ3QgYmUgaGVyZS5cbnZhciBGaWxlMSA9IHJlcXVpcmUoXCIuL2ZpbGUtMVwiKTtcbnZhciBGaWxlNCA9IHJlcXVpcmUoXCIuL2ZpbGUtNFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNyYzogXCJGaWxlIDJcIixcbiAgZXRjOiBbRmlsZTEsIEZpbGU0XVxufVxuXG4vLyAvLyBSZW1vdmluZyB0aGUgY2lyY3VsYXIgcmVmLlxuLy8gdmFyIEZpbGU0ID0gcmVxdWlyZSgnLi9maWxlLTQnKVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcbi8vICAgc3JjOiAnRmlsZSAyJyxcbi8vICAgZXRjOiBbRmlsZTRdXG4vLyB9XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTlqY21GMlpYSnZaQzl2Y0dWdWMyOTFjbU5sTDJOcGNtTjFiR0Z5TFhKbFppMXBjM04xWlM5emNtTXZabWxzWlMweUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVOQkxFbEJRVWtzUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRVHRCUVVNdlFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVUU3TzBGQlJTOUNMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWM3UVVGRFppeExRVUZITEVWQlFVVXNVVUZCVVR0QlFVTmlMRXRCUVVjc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTTdRMEZEY0VJN096czdPenM3T3p0QlFVRkJMRU5CUVVFaUxDSm1hV3hsSWpvaUwxVnpaWEp6TDJOeVlYWmxjbTlrTDI5d1pXNXpiM1Z5WTJVdlkybHlZM1ZzWVhJdGNtVm1MV2x6YzNWbEwzTnlZeTltYVd4bExUSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5Qk9UMVJGTGlCVWFHbHpJR2x6SUhSb1pTQmphWEpqZFd4aGNpQnlaV1l1SUVacGJHVXhJSE5vYjNWc1pHNG5kQ0JpWlNCb1pYSmxMbHh1ZG1GeUlFWnBiR1V4SUQwZ2NtVnhkV2x5WlNnbkxpOW1hV3hsTFRFbktWeHVkbUZ5SUVacGJHVTBJRDBnY21WeGRXbHlaU2duTGk5bWFXeGxMVFFuS1Z4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdGNiaUFnYzNKak9pQW5SbWxzWlNBeUp5eGNiaUFnWlhSak9pQmJSbWxzWlRFc0lFWnBiR1UwWFZ4dWZWeHVYRzR2THlBdkx5QlNaVzF2ZG1sdVp5QjBhR1VnWTJseVkzVnNZWElnY21WbUxseHVMeThnZG1GeUlFWnBiR1UwSUQwZ2NtVnhkV2x5WlNnbkxpOW1hV3hsTFRRbktWeHVYRzR2THlCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0Y2JpOHZJQ0FnYzNKak9pQW5SbWxzWlNBeUp5eGNiaTh2SUNBZ1pYUmpPaUJiUm1sc1pUUmRYRzR2THlCOVhHNGlYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBGaWxlNCA9IHJlcXVpcmUoXCIuL2ZpbGUtNFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNyYzogXCJGaWxlIDNcIixcbiAgZXRjOiBbRmlsZTRdXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpOVZjMlZ5Y3k5amNtRjJaWEp2WkM5dmNHVnVjMjkxY21ObEwyTnBjbU4xYkdGeUxYSmxaaTFwYzNOMVpTOXpjbU12Wm1sc1pTMHpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNTVUZCU1N4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZCT3p0QlFVVXZRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITzBGQlEyWXNTMEZCUnl4RlFVRkZMRkZCUVZFN1FVRkRZaXhMUVVGSExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTTdRMEZEWWl4RFFVRkJJaXdpWm1sc1pTSTZJaTlWYzJWeWN5OWpjbUYyWlhKdlpDOXZjR1Z1YzI5MWNtTmxMMk5wY21OMWJHRnlMWEpsWmkxcGMzTjFaUzl6Y21NdlptbHNaUzB6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lkbUZ5SUVacGJHVTBJRDBnY21WeGRXbHlaU2duTGk5bWFXeGxMVFFuS1Z4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdGNiaUFnYzNKak9pQW5SbWxzWlNBekp5eGNiaUFnWlhSak9pQmJSbWxzWlRSZFhHNTlYRzRpWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiRmlsZSAzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTlqY21GMlpYSnZaQzl2Y0dWdWMyOTFjbU5sTDJOcGNtTjFiR0Z5TFhKbFppMXBjM04xWlM5emNtTXZabWxzWlMwMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVRWlMQ0ptYVd4bElqb2lMMVZ6WlhKekwyTnlZWFpsY205a0wyOXdaVzV6YjNWeVkyVXZZMmx5WTNWc1lYSXRjbVZtTFdsemMzVmxMM055WXk5bWFXeGxMVFF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnRiMlIxYkdVdVpYaHdiM0owY3lBOUlDZEdhV3hsSURNblhHNGlYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDaXJjdWxhclJlZklzc3VlID0ge1xuICBGaWxlMTogcmVxdWlyZShcIi4vZmlsZS0xXCIpLFxuICBGaWxlMjogcmVxdWlyZShcIi4vZmlsZS0yXCIpLFxuICBGaWxlMzogcmVxdWlyZShcIi4vZmlsZS0zXCIpXG59O1xuXG53aW5kb3cuQ2lyY3VsYXJSZWZJc3N1ZSA9IG1vZHVsZS5leHBvcnRzID0gQ2lyY3VsYXJSZWZJc3N1ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWpjbUYyWlhKdlpDOXZjR1Z1YzI5MWNtTmxMMk5wY21OMWJHRnlMWEpsWmkxcGMzTjFaUzl6Y21NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hKUVVGSkxHZENRVUZuUWl4SFFVRkhPMEZCUTNKQ0xFOUJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRPMEZCUXpGQ0xFOUJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRPMEZCUXpGQ0xFOUJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRPME5CUXpOQ0xFTkJRVUU3TzBGQlJVUXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVRWlMQ0ptYVd4bElqb2lMMVZ6WlhKekwyTnlZWFpsY205a0wyOXdaVzV6YjNWeVkyVXZZMmx5WTNWc1lYSXRjbVZtTFdsemMzVmxMM055WXk5cGJtUmxlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkluWmhjaUJEYVhKamRXeGhjbEpsWmtsemMzVmxJRDBnZTF4dUlDQkdhV3hsTVRvZ2NtVnhkV2x5WlNnbkxpOW1hV3hsTFRFbktTeGNiaUFnUm1sc1pUSTZJSEpsY1hWcGNtVW9KeTR2Wm1sc1pTMHlKeWtzWEc0Z0lFWnBiR1V6T2lCeVpYRjFhWEpsS0NjdUwyWnBiR1V0TXljcFhHNTlYRzVjYm5kcGJtUnZkeTVEYVhKamRXeGhjbEpsWmtsemMzVmxJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JEYVhKamRXeGhjbEpsWmtsemMzVmxYRzRpWFgwPSJdfQ==
