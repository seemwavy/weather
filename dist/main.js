/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clouds.png":
/*!************************!*\
  !*** ./src/clouds.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41fc7cf96621cb95ea04.png";

/***/ }),

/***/ "./src/rain.jpg":
/*!**********************!*\
  !*** ./src/rain.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47e4269beda78a79883c.jpg";

/***/ }),

/***/ "./src/snow.png":
/*!**********************!*\
  !*** ./src/snow.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "265987629c8455d5513e.png";

/***/ }),

/***/ "./src/sun.jpg":
/*!*********************!*\
  !*** ./src/sun.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05534cdaa53fe996032c.jpg";

/***/ }),

/***/ "./src/thunderstorm.jpg":
/*!******************************!*\
  !*** ./src/thunderstorm.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a650d87f129458ba615c.jpg";

/***/ }),

/***/ "./src/tornado.jpg":
/*!*************************!*\
  !*** ./src/tornado.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7503feea8ae1dbf7473.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sun_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sun.jpg */ "./src/sun.jpg");
/* harmony import */ var _clouds_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clouds.png */ "./src/clouds.png");
/* harmony import */ var _rain_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rain.jpg */ "./src/rain.jpg");
/* harmony import */ var _snow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snow.png */ "./src/snow.png");
/* harmony import */ var _thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thunderstorm.jpg */ "./src/thunderstorm.jpg");
/* harmony import */ var _tornado_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tornado.jpg */ "./src/tornado.jpg");







const api = { 
    key: "b3ff6cab5334264ebf3515ac12ae43a0",
    base: "https://api.openweathermap.org/data/2.5/"
}
const contentBox = document.querySelector('.contentBox');
async function weatherReport(city) { 
    contentBox.innerHTML = '';
    try {
        let response = await fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`); 
        let data = await response.json()
        let weatherIcon = document.createElement('img');
        let cityHeader = document.createElement('h1');
        let weather = document.createElement('h2');
        cityHeader.innerHTML = "Your Weather Report for: " + data.name + " , " + data.sys.country;
        contentBox.appendChild(cityHeader);
        weather.innerHTML = `${data.weather[0].main}`;
        let lineBreak = document.createElement('br');
        contentBox.appendChild(lineBreak);
        contentBox.appendChild(weather);
        if (weather.innerHTML === 'Clouds') {
            weather.innerHTML = 'Cloudy';
            weatherIcon.src = _clouds_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        else if (weather.innerHTML === 'Clear') {
            weather.innerHTML = 'Clear';
            weatherIcon.src = _sun_jpg__WEBPACK_IMPORTED_MODULE_0__;
        }
        else if (weather.innerHTML === 'Rain') {
            weather.innerHTML = 'Rainy';
            weatherIcon.src = _rain_jpg__WEBPACK_IMPORTED_MODULE_2__;
        }
        else if (weather.innerHTML === 'Snow') {
            weather.innerHTML = 'Snowy';
            weatherIcon.src = _snow_png__WEBPACK_IMPORTED_MODULE_3__;
        }
        else if (weather.innerHTML === 'Thunderstorm') {
            weather.innerHTML = 'Thunderstorm';
            weatherIcon.src = _thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_4__;
        }
        else if (weather.innerHTML === 'Drizzle') {
            weather.innerHTML = 'Drizzle';
            weatherIcon.src = _rain_jpg__WEBPACK_IMPORTED_MODULE_2__;
        }
        else if (weather.innerHTML === 'Mist') {
            weather.innerHTML = 'Mist';
            weatherIcon.src = _clouds_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        else if (weather.innerHTML === 'Smoke') {
            weather.innerHTML = 'Smoke';
            weatherIcon.src = _clouds_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        else if (weather.innerHTML === 'Haze') {
            weather.innerHTML = 'Haze';
            weatherIcon.src = _clouds_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        else if (weather.innerHTML === 'Dust') {
            weather.innerHTML = 'Dust';
            weatherIcon.src = _clouds_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        else if (weather.innerHTML === 'Fog') {
            weather.innerHTML = 'Fog';
            weatherIcon.src = "clouds.png";
        }
        else if (weather.innerHTML === 'Sand') {
            weather.innerHTML = 'Sand';
            weatherIcon.src = 'clouds.png';
        }
        else if (weather.innerHTML === 'Ash') {
            weather.innerHTML = 'Ash';
            weatherIcon.src = 'clouds.png';
        }
        else if (weather.innerHTML === 'Squall') {
            weather.innerHTML = 'Squall';
            weatherIcon.src = _clouds_png__WEBPACK_IMPORTED_MODULE_1__;
        }
        else if (weather.innerHTML === 'Tornado') {
            weather.innerHTML = 'Tornado';
            weatherIcon.src = _tornado_jpg__WEBPACK_IMPORTED_MODULE_5__;
        }
        let temp = document.createElement('h2');
        let tempCelsius = Math.round(data.main.temp);
        let tempFahrenheit = (tempCelsius * 9/5) - 32;
        temp.innerHTML = `${tempFahrenheit}°F`;
        contentBox.appendChild(temp); 
        contentBox.appendChild(weatherIcon);
    }
    catch (error) {
        alert('Please enter a valid city name');
    }   
}
document.getElementById("weatherForm").addEventListener('submit', event => {
    event.preventDefault();
    let cityInput = document.getElementById('city');
    let city = cityInput.value;
    weatherReport(city);
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ007QUFDSjtBQUNBO0FBQ2dCO0FBQ1Y7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFNBQVMsWUFBWSxLQUFLLHNCQUFzQixRQUFRO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUNBQUc7QUFDakM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQ0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOENBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlDQUFPO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdW4gZnJvbSAnLi9zdW4uanBnJztcclxuaW1wb3J0IGNsb3VkcyBmcm9tICcuL2Nsb3Vkcy5wbmcnO1xyXG5pbXBvcnQgcmFpbiBmcm9tICcuL3JhaW4uanBnJztcclxuaW1wb3J0IHNub3cgZnJvbSAnLi9zbm93LnBuZyc7XHJcbmltcG9ydCB0aHVuZGVyc3Rvcm0gZnJvbSAnLi90aHVuZGVyc3Rvcm0uanBnJztcclxuaW1wb3J0IHRvcm5hZG8gZnJvbSAnLi90b3JuYWRvLmpwZyc7XHJcblxyXG5jb25zdCBhcGkgPSB7IFxyXG4gICAga2V5OiBcImIzZmY2Y2FiNTMzNDI2NGViZjM1MTVhYzEyYWU0M2EwXCIsXHJcbiAgICBiYXNlOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9cIlxyXG59XHJcbmNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudEJveCcpO1xyXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyUmVwb3J0KGNpdHkpIHsgXHJcbiAgICBjb250ZW50Qm94LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGkuYmFzZX13ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHthcGkua2V5fWApOyBcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGxldCBjaXR5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBsZXQgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY2l0eUhlYWRlci5pbm5lckhUTUwgPSBcIllvdXIgV2VhdGhlciBSZXBvcnQgZm9yOiBcIiArIGRhdGEubmFtZSArIFwiICwgXCIgKyBkYXRhLnN5cy5jb3VudHJ5O1xyXG4gICAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY2l0eUhlYWRlcik7XHJcbiAgICAgICAgd2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhLndlYXRoZXJbMF0ubWFpbn1gO1xyXG4gICAgICAgIGxldCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xyXG4gICAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQobGluZUJyZWFrKTtcclxuICAgICAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHdlYXRoZXIpO1xyXG4gICAgICAgIGlmICh3ZWF0aGVyLmlubmVySFRNTCA9PT0gJ0Nsb3VkcycpIHtcclxuICAgICAgICAgICAgd2VhdGhlci5pbm5lckhUTUwgPSAnQ2xvdWR5JztcclxuICAgICAgICAgICAgd2VhdGhlckljb24uc3JjID0gY2xvdWRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLmlubmVySFRNTCA9PT0gJ0NsZWFyJykge1xyXG4gICAgICAgICAgICB3ZWF0aGVyLmlubmVySFRNTCA9ICdDbGVhcic7XHJcbiAgICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IHN1bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod2VhdGhlci5pbm5lckhUTUwgPT09ICdSYWluJykge1xyXG4gICAgICAgICAgICB3ZWF0aGVyLmlubmVySFRNTCA9ICdSYWlueSc7XHJcbiAgICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IHJhaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5uZXJIVE1MID09PSAnU25vdycpIHtcclxuICAgICAgICAgICAgd2VhdGhlci5pbm5lckhUTUwgPSAnU25vd3knO1xyXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBzbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLmlubmVySFRNTCA9PT0gJ1RodW5kZXJzdG9ybScpIHtcclxuICAgICAgICAgICAgd2VhdGhlci5pbm5lckhUTUwgPSAnVGh1bmRlcnN0b3JtJztcclxuICAgICAgICAgICAgd2VhdGhlckljb24uc3JjID0gdGh1bmRlcnN0b3JtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLmlubmVySFRNTCA9PT0gJ0RyaXp6bGUnKSB7XHJcbiAgICAgICAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gJ0RyaXp6bGUnO1xyXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSByYWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLmlubmVySFRNTCA9PT0gJ01pc3QnKSB7XHJcbiAgICAgICAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gJ01pc3QnO1xyXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBjbG91ZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5uZXJIVE1MID09PSAnU21va2UnKSB7XHJcbiAgICAgICAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gJ1Ntb2tlJztcclxuICAgICAgICAgICAgd2VhdGhlckljb24uc3JjID0gY2xvdWRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLmlubmVySFRNTCA9PT0gJ0hhemUnKSB7XHJcbiAgICAgICAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gJ0hhemUnO1xyXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBjbG91ZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5uZXJIVE1MID09PSAnRHVzdCcpIHtcclxuICAgICAgICAgICAgd2VhdGhlci5pbm5lckhUTUwgPSAnRHVzdCc7XHJcbiAgICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGNsb3VkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod2VhdGhlci5pbm5lckhUTUwgPT09ICdGb2cnKSB7XHJcbiAgICAgICAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gJ0ZvZyc7XHJcbiAgICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwiY2xvdWRzLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLmlubmVySFRNTCA9PT0gJ1NhbmQnKSB7XHJcbiAgICAgICAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gJ1NhbmQnO1xyXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSAnY2xvdWRzLnBuZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5uZXJIVE1MID09PSAnQXNoJykge1xyXG4gICAgICAgICAgICB3ZWF0aGVyLmlubmVySFRNTCA9ICdBc2gnO1xyXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSAnY2xvdWRzLnBuZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5uZXJIVE1MID09PSAnU3F1YWxsJykge1xyXG4gICAgICAgICAgICB3ZWF0aGVyLmlubmVySFRNTCA9ICdTcXVhbGwnO1xyXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBjbG91ZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5uZXJIVE1MID09PSAnVG9ybmFkbycpIHtcclxuICAgICAgICAgICAgd2VhdGhlci5pbm5lckhUTUwgPSAnVG9ybmFkbyc7XHJcbiAgICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IHRvcm5hZG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBsZXQgdGVtcENlbHNpdXMgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKTtcclxuICAgICAgICBsZXQgdGVtcEZhaHJlbmhlaXQgPSAodGVtcENlbHNpdXMgKiA5LzUpIC0gMzI7XHJcbiAgICAgICAgdGVtcC5pbm5lckhUTUwgPSBgJHt0ZW1wRmFocmVuaGVpdH3CsEZgO1xyXG4gICAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQodGVtcCk7IFxyXG4gICAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGNpdHkgbmFtZScpO1xyXG4gICAgfSAgIFxyXG59XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xyXG4gICAgbGV0IGNpdHkgPSBjaXR5SW5wdXQudmFsdWU7XHJcbiAgICB3ZWF0aGVyUmVwb3J0KGNpdHkpO1xyXG4gIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==