(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("rondaUI", ["angular", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["rondaUI"] = factory(require("angular"), require("jQuery"));
	else
		root["rondaUI"] = factory(root["angular"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _config = __webpack_require__(2);

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

var _navbar = __webpack_require__(5);

var _navbar2 = _interopRequireDefault(_navbar);

var _navbarItem = __webpack_require__(8);

var _navbarItem2 = _interopRequireDefault(_navbarItem);

var _waterfall = __webpack_require__(10);

var _waterfall2 = _interopRequireDefault(_waterfall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
var includes = ['ngMaterial', _container2.default, _navbar2.default, _navbarItem2.default, _waterfall2.default];

// configs
exports.default = _angular2.default.module('ronda-ui', includes).config(_config.rondaConfig).name;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
rondaConfig.$inject = ['$mdThemingProvider'];
exports.rondaConfig = rondaConfig;

var _theming = __webpack_require__(3);

var _theming2 = _interopRequireDefault(_theming);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// configs
function rondaConfig($mdThemingProvider) {
  'ngInject';

  // create theming

  (0, _theming2.default)($mdThemingProvider);

  $mdThemingProvider.theme('rdPropuestas').primaryPalette('propuestas');
  $mdThemingProvider.theme('rdActividades').primaryPalette('actividades');
  $mdThemingProvider.theme('rdHerramientas').primaryPalette('herramientas');
  $mdThemingProvider.theme('rdOrientaciones').primaryPalette('orientaciones');
  $mdThemingProvider.theme('rdMediateca').primaryPalette('mediateca');

  $mdThemingProvider.theme('default').primaryPalette('ronda');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($mdThemingProvider) {

  $mdThemingProvider.definePalette('propuestas', {
    '50': 'fee8e7',
    '100': 'fcc7c3',
    '200': 'faa19b',
    '300': 'f77b72',
    '400': 'f65f54',
    '500': 'f44336',
    '600': 'f33d30',
    '700': 'f13429',
    '800': 'ef2c22',
    '900': 'ec1e16',
    'A100': 'ffffff',
    'A200': 'ffe9e9',
    'A400': 'ffb8b6',
    'A700': 'ff9f9c',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400', 'A700'],
    'contrastLightColors': ['500', '600', '700', '800', '900']
  });
  $mdThemingProvider.definePalette('actividades', {
    '50': 'f0ebf8',
    '100': 'd8cded',
    '200': 'bfabe1',
    '300': 'a589d4',
    '400': '9170cb',
    '500': '7e57c2',
    '600': '764fbc',
    '700': '6b46b4',
    '800': '613cac',
    '900': '4e2c9f',
    'A100': 'eae2ff',
    'A200': 'c5afff',
    'A400': 'a17cff',
    'A700': '8e63ff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400', 'A700'],
    'contrastLightColors': ['500', '600', '700', '800', '900']
  });
  $mdThemingProvider.definePalette('herramientas', {
    '50': 'e5f8fb',
    '100': 'beeef4',
    '200': '93e3ed',
    '300': '67d7e5',
    '400': '47cfe0',
    '500': '26c6da',
    '600': '22c0d6',
    '700': '1cb9d0',
    '800': '17b1cb',
    '900': '0da4c2',
    'A100': 'effcff',
    'A200': 'bcf3ff',
    'A400': '89e9ff',
    'A700': '6fe5ff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', '500', '600', '700', '800', 'A100', 'A200', 'A400', 'A700'],
    'contrastLightColors': ['900']
  });
  $mdThemingProvider.definePalette('orientaciones', {
    '50': 'f3f9ed',
    '100': 'e1f0d1',
    '200': 'cee6b2',
    '300': 'badb93',
    '400': 'abd47c',
    '500': '9ccc65',
    '600': '94c75d',
    '700': '8ac053',
    '800': '80b949',
    '900': '6ead37',
    'A100': 'fcfff9',
    'A200': 'e0ffc6',
    'A400': 'c3ff93',
    'A700': 'b5ff7a',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'],
    'contrastLightColors': []
  });
  $mdThemingProvider.definePalette('mediateca', {
    '50': 'fef5e5',
    '100': 'fde5be',
    '200': 'fcd492',
    '300': 'fbc266',
    '400': 'fab546',
    '500': 'f9a825',
    '600': 'f8a021',
    '700': 'f7971b',
    '800': 'f68d16',
    '900': 'f57d0d',
    'A100': 'ffffff',
    'A200': 'fff5ec',
    'A400': 'ffd8b9',
    'A700': 'ffcaa0',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'],
    'contrastLightColors': []
  });
  $mdThemingProvider.definePalette('ronda', {
    '50': 'fce7e7',
    '100': 'f7c4c2',
    '200': 'f29c9a',
    '300': 'ed7472',
    '400': 'e95753',
    '500': 'e53935',
    '600': 'e23330',
    '700': 'de2c28',
    '800': 'da2422',
    '900': 'd31716',
    'A100': 'ffffff',
    'A200': 'ffd1d1',
    'A400': 'ff9f9e',
    'A700': 'ff8585',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400', 'A700'],
    'contrastLightColors': ['500', '600', '700', '800', '900']
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = angular.module('ronda-ui.components.container', []).directive('rdContainer', RdContainer).name;

var RdContentController =
/*@ngInject*/
function RdContentController($scope, $element) {
	_classCallCheck(this, RdContentController);

	this.$scope = $scope;
	this.$element = $element;

	var fluid = this.$scope.containerFluid || '';
	var isFluid = this.$scope.containerFluid !== undefined;

	var cls = 'rd-container';

	if (isFluid) {
		fluid = fluid.trim();
		cls = 'rd-container-fluid';
		if (typeof fluid === 'string' && fluid !== '') {
			cls = '';
			var fuilds = fluid.split(/\s+/);
			fuilds.forEach(function (t) {
				cls += 'rd-container-fluid-' + t + ' ';
			});
		}
	}

	this.$element.addClass(cls);
};

RdContentController.$inject = ['$scope', '$element'];
RdContentController.$inject = ['$scope', '$element'];


function RdContainer() {
	'ngInject';

	return {
		restrict: 'E',
		controller: RdContentController,
		transclude: true,
		scope: {
			containerFluid: '@containerFluid'
		},
		template: '<div class="rd-container__content" ng-transclude></div>'
	};
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

RdNavbar.$inject = ['$window'];

var _jquery = __webpack_require__(6);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HIEGHT_BREACKPOINT = 100;

exports.default = angular.module('ronda-ui.components.navbar', []).directive('rdNavbar', RdNavbar).name;

var RdNavbarController = function () {
	RdNavbarController.$inject = ['$scope', '$element', '$window', '$mdMedia', '$timeout'];

	/*@ngInject*/
	function RdNavbarController($scope, $element, $window, $mdMedia, $timeout) {
		var _this = this;

		_classCallCheck(this, RdNavbarController);

		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;

		this.logo = $scope.logo;
		this.logoScrolled = $scope.logoScrolled;

		this.$element.addClass('rd-navbar md-whiteframe-4dp');

		this.$scope.$watch(function () {
			return $mdMedia('xs') || $mdMedia('sm');
		}, function (mobile) {
			_this.isMobile = mobile === true;
		});

		var clsScrolled = 'rd-navbar--scrolled';

		(0, _jquery2.default)(document).ready(function () {
			var scrollTop = 0;
			(0, _jquery2.default)(window).scroll(function () {
				scrollTop = (0, _jquery2.default)(window).scrollTop();
				if (scrollTop >= HIEGHT_BREACKPOINT) {
					_this.$element.addClass(clsScrolled);
				} else if (scrollTop < HIEGHT_BREACKPOINT) {
					_this.$element.removeClass(clsScrolled);
				}

				_this.removeDropdown();
			});

			(0, _jquery2.default)(document).click(function () {
				_this.removeDropdown();
			});
		});

		// the dropdown
		this.dropdownOpened = false;
		this.toggleDropdown = function ($event) {
			_this.dropdownOpened = !_this.dropdownOpened;
			$event.stopPropagation();
		};
	}

	_createClass(RdNavbarController, [{
		key: 'removeDropdown',
		value: function removeDropdown() {
			var _this2 = this;

			// remove the dropdown
			if (this.dropdownOpened) {
				this.dropdownOpened = false;
				this.$timeout(function () {
					_this2.$apply();
				});
			}
		}
	}]);

	return RdNavbarController;
}();

function RdNavbar($window) {
	'ngInject';

	return {
		restrict: 'E',
		controller: RdNavbarController,
		controllerAs: '$rdNavbarController',
		scope: {
			logo: '@logo',
			logoScrolled: '@logoScrolled'
		},
		transclude: {
			'items': 'rdNavbarNavigation',
			'tools': 'rdNavbarTools',
			'body': '?rdNavbarBody'
		},
		template: __webpack_require__(7)
	};
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=\"rd-navbar__content\"\n\t\t layout=\"row\"\n\t\t ng-class=\"{ 'rd-navbar--mobile': $rdNavbarController.isMobile }\">\n\t\n\t<!-- MENU BUTTON -->\n\t<md-button class=\"rd-navbar__menu-button\" aria-label=\"Menu\" ng-click=\"$rdNavbarController.toggleDropdown($event)\">\n\t\t<span class=\"rd-navbar__menu-button--bars\"></span>\n\t</md-button>\n\n\t<!-- BRAND-->\n\t<a href=\"#\" class=\"rd-navbar__brand\" aria-label=\"Ir al home\">\n\t\t<img class=\"rd-navbar__logo\" ng-src=\"{{$rdNavbarController.logo}}\" alt=\"Logo\">\n\t\t<img class=\"rd-navbar__logo--scrolled\" ng-src=\"{{$rdNavbarController.logoScrolled}}\" alt=\"Logo\">\n\t</a>\n\t\n\t<!-- HORIZONTAL NAVIGATION -->\n\t<nav class=\"rd-navbar__nav--navigation\" ng-transclude=\"items\" role=\"navigation\">\n\t</nav>\n\n\t<!-- TOOLS -->\n\t<div class=\"rd-navbar__tools\" ng-transclude=\"tools\"></div>\n</div>"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = angular.module('ronda-ui.components.navbarItem', []).directive('rdNavbarItem', RdContainer).name;

var RdNavbarItemController =
/*@ngInject*/
function RdNavbarItemController($scope, $element) {
	var _this = this;

	_classCallCheck(this, RdNavbarItemController);

	this.$scope = $scope;
	this.$element = $element;
	// has a model?
	var m = this.$scope.ngModel;
	if (m && (typeof m === 'undefined' ? 'undefined' : _typeof(m)) === 'object') {
		//replace the scope;
		this.icon = m.icon;
		this.caption = m.caption;
		this.section = m.section;
	} else {
		this.icon = this.$scope.icon;
		this.caption = this.$scope.caption;
	}

	this.$element.addClass('rd-navbar__item');
	this.$element.attr('data-rd-section', this.section);

	this.$element.attr('role', 'menuitem');

	this.$scope.$watch(function () {
		return _this.$scope.selected;
	}, function (value) {
		if (value) {
			_this.$element.addClass('rd-navbar__item--selected');
		} else {
			_this.$element.removeClass('rd-navbar__item--selected');
		}
	});
};

RdNavbarItemController.$inject = ['$scope', '$element'];
RdNavbarItemController.$inject = ['$scope', '$element'];


function RdContainer() {
	'ngInject';

	return {
		restrict: 'E',
		controller: RdNavbarItemController,
		controllerAs: '$rdNavbarItemCtrl',
		scope: {
			icon: '@navbarItemIcon',
			caption: '@navbarItemCaption',
			section: '@navbarItemSection',
			ngModel: '=',
			selected: '=navbarItemSelected'
		},
		template: __webpack_require__(9)
	};
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<span class=\"rd-navbar__item--icon\" ng-class=\"$rdNavbarItemCtrl.icon\"></span>\n<span class=\"rd-navbar__item--caption rd__text--caption\">{{$rdNavbarItemCtrl.caption}}</span>"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = angular.module('ronda-ui.components.waterfall', []).directive('rdWaterfall', rdWaterfall).name;


var DEFAULT_COLUMNS_SIZE = 5;

var RdWaterfallController = function () {
	RdWaterfallController.$inject = ['$scope', '$element', '$timeout', '$compile', '$attrs', '$transclude', '$mdMedia', '$window'];

	/*@ngInject*/
	function RdWaterfallController($scope, $element, $timeout, $compile, $attrs, $transclude, $mdMedia, $window) {
		_classCallCheck(this, RdWaterfallController);

		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;
		this.$attrs = $attrs;
		this.$compile = $compile;
		this.$transclude = $transclude;
		this.$window = $window;
		this.$mdMedia = $mdMedia;
		this.$wrapperElement = this.$element.find('.rd-waterfall-wrapper');
		this.$columns = [];
		this.$templ = angular.element(this.$attrs.itemTemplate);
		this.columnsSizes = {};
		this.lastColumn_ = null;
		this.items = [];

		this.$element.addClass('rd-waterfall');
		this.initColumnsSizes_();

		// init
		for (var i = 0; i < 15; i++) {
			this.items.push({ id: i, color: this.randomColor() });
		}
		var counter = this.items.length;
		//setInterval(() => {
		//	this.items.push(counter++);
		//	this.$scope.$apply();
		//}, 3000);
	}

	_createClass(RdWaterfallController, [{
		key: 'initColumnsSizes_',
		value: function initColumnsSizes_() {
			var _this = this;

			// init breakpoints
			var abks = {};
			for (var aname in this.$attrs.$attr) {
				var htag = this.$attrs.$attr[aname];
				if (/^columns\-?/i.test(htag)) {
					abks[htag] = this.$attrs[aname];
				}
			}
			this.columnsSizes['columns'] = parseInt(abks['columns']) || DEFAULT_COLUMNS_SIZE;
			var bks = ["xs", "sm", "md", "lg", "xl"];

			bks.forEach(function (b) {
				if (abks['columns-' + b]) {
					_this.columnsSizes[b] = parseInt(abks['columns-' + b]) || _this.columnsSizes['columns'];
				}
				if (abks['columns-gt-' + b]) {
					_this.columnsSizes['gt-' + b] = parseInt(abks['columns-gt-' + b]) || _this.columnsSizes['columns'];
				}
			});
		}
	}, {
		key: 'columnSize_',
		value: function columnSize_() {
			for (var media in this.columnsSizes) {
				if (this.$mdMedia(media)) return this.columnsSizes[media];
			}
			return this.columnsSizes['columns'];
		}
	}, {
		key: 'render_',
		value: function render_(force) {
			var csize = this.columnSize_();
			if (this.lastColumn_ === csize || this.rendering_ && !force) return;

			console.log('rendering...');

			this.rendering_ = true;
			this.lastColumn_ = csize;
			this.$wrapperElement.empty();
			// create the columns
			var flex = Math.floor(100 / csize);
			for (var c = 0; c < this.columnSize_(); c++) {
				this.$columns[c] = this.$compile(angular.element('<div layout="column" layout-align="start stretch" flex="' + flex + '"></div>'))(this.$scope);
				this.$columns[c].$colIndex = c;
				this.$wrapperElement.append(this.$columns[c]);
			}

			for (var i = 0; i < this.items.length; i++) {
				var item = this.items[i];
				item.$index = i;
				item.$colIndex = i % this.columnSize_();
				var childScope = this.$scope.$new(false);
				childScope.item = item;
				var clone = this.$templ.clone();
				//
				var h = Math.floor(Math.random() * 200 + 30);
				//let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
				//clone.append(`${lorem}`);
				if (this.$templ[0].srcHTML) {
					clone[0].innerHTML = this.$templ[0].srcHTML;
				}
				var el = this.$compile(clone)(childScope);
				this.$columns[item.$colIndex].append(el);
			}

			this.rendering_ = false;
		}
	}, {
		key: '$onInit',
		value: function $onInit() {
			var _this2 = this;

			this.render_();

			$(this.$window).resize(function () {
				_this2.render_();
			});
		}
	}, {
		key: 'loadingIsVisible',
		value: function loadingIsVisible() {
			return this.rendering_;
		}
	}, {
		key: 'randomColor',
		value: function randomColor() {
			return ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
		}
	}]);

	return RdWaterfallController;
}();

function rdWaterfall() {
	'ngInject';

	return {
		restrict: 'E',
		controllerAs: '$rdWaterfallCtrl',
		controller: RdWaterfallController,
		template: function template(element, attr) {
			attr.itemTemplate = getItemTemplate();
			return '\n\t\t\t\t<md-progress-linear class="\'md-inline\'" ng-if="$rdWaterfallCtrl.loadingIsVisible()" md-mode="indeterminate"></md-progress-linear>\n\t\t\t\t<div class="rd-waterfall-wrapper" layout="row" layout-padding></div>';

			// helpers
			function getItemTemplate() {
				var templateTag = element.find('rd-item-template').detach(),
				    html = templateTag.length ? templateTag.html() : element.html();
				var $templ = angular.element('<div class="rd-waterfall-item">' + html + '</rd-waterfall-item>');
				// copy attributes
				if (templateTag.length) {
					var $templOne = templateTag[0];

					for (var i = 0; i < $templOne.attributes.length; i++) {
						var a = $templOne.attributes[i];
						if (/class/i.test(a.name)) {
							$templ.addClass(a.value);
						} else {
							$templ.attr(a.name, a.value);
						}
					}
				}

				if (!templateTag.length) element.empty();
				return $templ;
			}
		}
	};
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=ronda-ui.js.map