/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _controller = __webpack_require__(5);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	    particlesJS.load('particles', 'config/particles.json');
	    var controller = new _controller2.default();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* $main-color: #446f9f; */\n/* $sec-color: #2080B8; */\n* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  color: black;\n  padding: 0 30px 0 270px;\n  border-top: 5px solid #ffa773;\n  font-family: \"Avenir Next\", Helvetica, Arial, \"Lantinghei SC\", \"Microsoft YaHei\", sans-serif;\n  background-color: #fff; }\n  body:active, body:focus {\n    color: #fff;\n    background-color: #fff;\n    cursor: pointer; }\n\nul {\n  list-style: none; }\n\na {\n  text-decoration: none; }\n\n#top-fixed {\n  position: fixed;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 5px;\n  background-color: #ffa773; }\n\n#particles {\n  position: fixed;\n  top: 0;\n  left: 262px;\n  z-index: -1;\n  width: 100%;\n  height: 100%; }\n\n#ecnu-logo {\n  position: absolute;\n  top: 703px;\n  left: 18px;\n  width: 100px; }\n\n#xiaoi-logo {\n  position: absolute;\n  top: 692px;\n  left: 119px;\n  width: 103px; }\n\n#aside-nav {\n  transform: translateZ(0);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 240px;\n  box-shadow: 0px 0px 44px 5px rgba(98, 98, 98, 0.86);\n  background: #565656;\n  z-index: 999; }\n\n.logo {\n  font-size: 90px;\n  font-weight: 900;\n  text-align: center;\n  margin: 30px 0;\n  color: #ffa773; }\n  .logo:active, .logo:focus {\n    color: #ffa773; }\n\n.nav {\n  line-height: 40px;\n  width: 100%;\n  /* margin: 0 10px; */\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n  color: #ffa773;\n  transition: 0.3s all; }\n\n.nav-parent {\n  background-color: #ffa773;\n  color: #ffa773; }\n  .nav-parent:hover {\n    background-color: #ffa773;\n    color: #fff;\n    cursor: pointer; }\n\n.nav-child {\n  margin-bottom: 20px;\n  border-bottom: 4px solid #6C6C6C;\n  border-top: 4px solid #6C6C6C; }\n  .nav-child a {\n    color: #ffa773; }\n    .nav-child a:active, .nav-child a:focus, .nav-child a:hover {\n      color: #ffa773; }\n  .nav-child li {\n    transition: 0.3s all;\n    /* margin-bottom: 10px; */\n    /* background-color: #fff; */\n    /* border-radius: 3px; */ }\n    .nav-child li.active:hover {\n      color: #ffa773; }\n    .nav-child li:hover {\n      background-color: #ffa773;\n      color: #fff;\n      text-indent: 10px;\n      cursor: pointer; }\n    .nav-child li.active {\n      border-left: 5px solid #ffa773;\n      background-color: #494949; }\n\n.desc-container {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #4a4a4a;\n  padding: 30px 0; }\n\n.desc {\n  color: #818181;\n  font-size: 14px;\n  text-align: center;\n  font-weight: 500; }\n\n.content {\n  width: 1200px;\n  color: #666;\n  display: none; }\n  .content h1 {\n    color: #ffa773;\n    margin: 46px 0 20px 0;\n    font-size: 35px; }\n  .content h4 {\n    font-weight: 500;\n    margin: 10px 0;\n    font-size: 30px; }\n  .content p {\n    font-size: 16px;\n    text-indent: 2em;\n    line-height: 30px;\n    margin-bottom: 5px; }\n  .content .block {\n    border-left: 4px solid #ddd;\n    padding: 0 15px;\n    color: #777;\n    text-indent: 0;\n    margin-left: 2em; }\n  .content.active {\n    display: block; }\n\n.card-container {\n  display: -webkit-flex;\n  -webkit-flex-flow: row;\n  margin-bottom: 50px; }\n\n.card {\n  width: 180px;\n  min-height: 0;\n  max-width: 100%;\n  background: #FFF;\n  margin-right: 100px;\n  padding: 0;\n  border: none;\n  border-radius: .28571429rem;\n  box-shadow: 0 1px 3px 0 #D4D4D5,0 0 0 1px #D4D4D5; }\n  .card img {\n    width: 180px; }\n  .card .avatar {\n    display: inline-block;\n    width: 180px;\n    height: 180px;\n    background-repeat: no-repeat;\n    background-size: cover; }\n\n.card-content {\n  padding: 5px 10px; }\n  .card-content .name {\n    font-size: 14px;\n    font-weight: 500;\n    display: block;\n    text-align: right; }\n\n.research-container {\n  border: 1px solid #E5E5E5;\n  border-radius: 4px;\n  padding: 30px;\n  margin-bottom: 30px; }\n  .research-container ol {\n    padding-left: 20px; }\n  .research-container .title {\n    text-indent: 0;\n    font-size: 35px;\n    font-weight: 600;\n    margin-bottom: 20px; }\n    .research-container .title a {\n      color: #666; }\n      .research-container .title a:active, .research-container .title a:focus, .research-container .title a:hover {\n        color: #666; }\n  .research-container .author {\n    font-size: 20px;\n    text-indent: 0; }\n  .research-container .screenshot img {\n    width: 100%; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = (function () {
	    function Controller() {
	        var _this = this;

	        _classCallCheck(this, Controller);

	        this._router = {
	            intro: function intro() {
	                _this.unsetActiveNav();
	                _this.unsetActiveTab();
	                $('.nav').find('li').eq(0).addClass('active');
	                $('.content').eq(0).addClass('active');
	            },
	            people: function people() {
	                _this.unsetActiveNav();
	                _this.unsetActiveTab();
	                $('.nav').find('li').eq(1).addClass('active');
	                $('.content').eq(1).addClass('active');
	            },
	            // paper: () => {
	            //     this.unsetActiveNav();
	            //     this.unsetActiveTab();
	            //     $('.nav').find('li').eq(2).addClass('active');
	            //     $('.content').eq(2).addClass('active');
	            // },
	            research: function research() {
	                _this.unsetActiveNav();
	                _this.unsetActiveTab();
	                $('.nav').find('li').eq(2).addClass('active');
	                $('.content').eq(2).addClass('active');
	            },
	            hot: function hot() {
	                _this.unsetActiveNav();
	                _this.unsetActiveTab();
	                $('.nav').find('li').eq(3).addClass('active');
	                $('.content').eq(3).addClass('active');
	            }
	        };

	        this.bindEvents();
	        this.route();
	    }

	    /**
	     * 路由
	     *
	     */

	    _createClass(Controller, [{
	        key: 'unsetActiveNav',
	        // about: () => {
	        //     this.unsetActiveNav();
	        //     this.unsetActiveTab();
	        //     $('.nav').find('li').eq(3).addClass('active');
	        //     $('.content').eq(3).addClass('active');
	        // },
	        value: function unsetActiveNav() {
	            $('.nav').find('li').removeClass('active');
	        }
	    }, {
	        key: 'unsetActiveTab',
	        value: function unsetActiveTab() {
	            $('.content').removeClass('active');
	        }
	    }, {
	        key: 'getHash',
	        value: function getHash() {
	            return window.location.hash.slice(1) || 'intro';
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents() {
	            $(window).on('hashchange', this.route.bind(this));
	        }
	    }, {
	        key: 'route',
	        value: function route(e) {
	            var hash = this.getHash();

	            if (this._router[hash] && typeof this._router[hash] === 'function') {
	                this._router[hash]();
	            }
	        }
	    }]);

	    return Controller;
	})();

	exports.default = Controller;

/***/ }
/******/ ]);