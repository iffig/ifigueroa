(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n\n  <h1 class=\"display-5\"> About Me </h1>\n  <p>\n    Hello lovely reader. My name is Bella. I am a recent graduate from the University\n    of Colorado Boulder, with a degree in Computer Science. I am passionate about\n    software development and love working on web applications. I like developing applications\n    related to organization, math, and data analytics. One of my great quests is to get more\n    people involved in and excited about STEM education (specifically computer science).\n    I've done work with some awesome organizations (<a href=\"http://wic.cs.colorado.edu\">CUWIC</a>\n    and <a href=\"https://www.colorado.edu/bold/\">BOLD</a>) through my\n    university that you should definitely check out. If you're interested please also\n    take a look at my computer science blog, figCS. Outside of school and work, I am\n    a dog enthusiast, avid true crime podcast listener, and a beginner level adult.\n  </p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\n  padding:0.5em;\n}\n.container{\n  width:100%;\n  padding: 1em;\n  overflow: scroll;\n}\n.wrap{\n  overflow: auto;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-top navbar-toggleable-sm\" id='topnav'>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarinfo\">\n    <span class=\"fa fa-bars main-txt-black\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarinfo\">\n      <a class=\"navbar-brand main-txt-black\" href=\"#\">ifigueroa</a>\n      <ul class='nav navbar-nav ml-auto text-center'>\n        <li class='nav-item'><a routerLink=\"/home\">Home</a></li>\n        <li class='nav-item'><a routerLink=\"/about\">About</a></li>\n        <li class='nav-item'><a routerLink=\"/portfolio\">Portfolio</a></li>\n      </ul>\n  </div>\n</nav>\n\n<div class='container'>\n  <router-outlet></router-outlet>\n</div>\n\n\n<nav class=\"navbar navbar-toggleable\">\n\n\n  <button *ngIf=!symbolToggled (click)=toggleSymbol() class=\"navbar-toggler fa fa-chevron-circle-down main-txt-black\" type=\"button\" data-toggle=\"collapse\" data-target=\"#footer\" ></button>\n  <button *ngIf=symbolToggled (click)=toggleSymbol() class=\"navbar-toggler fa fa-chevron-circle-up main-txt-black\" type=\"button\" data-toggle=\"collapse\" data-target=\"#footer\" ></button>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"footer\">\n    <div class='mx-auto'>\n      <ul class='nav navbar-nav'>\n        <li class='nav-item'><a href=\"https://github.com/iffig\"> <i class=\"fa fa-github fa-lg main-txt-dark\"></i></a></li>\n        <li class='nav-item'><a href=\"http://www.linkedin.com/in/isabella-figueroa\"> <i class=\"fa fa-linkedin fa-lg main-txt-dark\"></i></a></li>\n        <li class='nav-item'><a href=\"mailto:isabella.figueroa012@gmail.com\"> <i class=\"fa fa-envelope fa-lg main-txt-dark\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ifigueroa';
        this.symbolToggled = false;
    }
    AppComponent.prototype.toggleSymbol = function () {
        if (this.symbolToggled == false) {
            this.symbolToggled = true;
        }
        else {
            this.symbolToggled = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-item/portfolio-item.component */ "./src/app/portfolio-item/portfolio-item.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioItemComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 100%;\n    height:100vh;\n    position: relative;\n}\n.bg {\n  background-image: url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa21066bea145bff86d1cf16b652d97c&auto=format&fit=crop&w=1355&q=80');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.overlay {\n  background-color:rgba(88, 188, 130,0.1);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class=\"jumbotron bg\">\n    <h1 class=\"display-1\">Hi, I'm Bella.</h1>\n    <hr class=\"my-4\">\n    <p class=\"lead\">I am a designer and developer. This is my website.</p>\n  </div>\n\n  <div class=\"overlay\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.backgroundUrl = 'https://images.unsplash.com/photo-1518600654093-2a24cddafa38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96238af4ac6e58d17d362d5b8b846eb4&auto=format&fit=crop&w=2017&q=80';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-data.ts":
/*!***********************************!*\
  !*** ./src/app/portfolio-data.ts ***!
  \***********************************/
/*! exports provided: PORTFOLIOITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIOITEMS", function() { return PORTFOLIOITEMS; });
var PORTFOLIOITEMS = [
    {
        type: 'cs',
        name: 'Building Recognition - Senior Capstone',
        date: 'Fall 2017 - Spring 2018',
        description: 'description',
        codeLink: 'https://github.com/trimble-osm-capstone',
        demoLink: '',
        moreInfo: '',
        imagePath: 'https://images.unsplash.com/photo-1521661488642-d86e85a90de2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7339eec338baac7df606de3d5b21440&auto=format&fit=crop&w=668&q=80'
    },
    {
        type: 'cs',
        name: 'Colorado Biking Game',
        date: 'Fall 2016',
        description: 'description',
        codeLink: 'https://github.com/iffig/Biking_Game',
        demoLink: '',
        moreInfo: '',
        imagePath: 'https://images.unsplash.com/photo-1520159807603-eb1c9969a60a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99f16bf57997bd92e17d670195db0942&auto=format&fit=crop&w=1350&q=80'
    },
    {
        type: 'cs',
        name: 'Star Traders',
        date: 'Spring 2016',
        description: 'description',
        codeLink: '',
        demoLink: '',
        moreInfo: '',
        imagePath: 'https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=310f7bfbbc76086f8259a5d197fcffb4&auto=format&fit=crop&w=1348&q=80'
    },
    {
        type: 'engineering',
        name: 'BVSD Assistive Equipment',
        date: 'Spring 2015',
        description: 'description',
        codeLink: '',
        demoLink: '',
        moreInfo: '',
        imagePath: 'https://images.unsplash.com/photo-1497939902741-848a16f92f9e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13fd261f792f0093ab005a71ba0d7576&auto=format&fit=crop&w=2089&q=80'
    },
    {
        type: 'engineering',
        name: 'Mexico City Medical Clinic',
        date: 'Spring 2014',
        description: 'description',
        codeLink: '',
        demoLink: '',
        moreInfo: '',
        imagePath: 'https://images.unsplash.com/photo-1500313749317-0105e4b72ec1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e08e19c1a7256d7a76fe335839172849&auto=format&fit=crop&w=1267&q=80'
    }
];


/***/ }),

/***/ "./src/app/portfolio-item.ts":
/*!***********************************!*\
  !*** ./src/app/portfolio-item.ts ***!
  \***********************************/
/*! exports provided: portfolioItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioItem", function() { return portfolioItem; });
var portfolioItem = /** @class */ (function () {
    function portfolioItem() {
    }
    return portfolioItem;
}());



/***/ }),

/***/ "./src/app/portfolio-item/portfolio-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/portfolio-item/portfolio-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  width: 18em;\n  height: 18em;\n  margin: 1em;\n}\n.card-img-overlay{\n  width: 18em;\n  height: 18em;\n  word-wrap: break-word;\n}\n.detail-overlay{\n  background-color: rgba(250,201,184,0.5);\n}\n.card-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n}\n.card-text{\n  color: #f4f4f4\n}\na{\n  color: #f4f4f4;\n}\na:hover{\n  color: #f4f4f4;\n}\n"

/***/ }),

/***/ "./src/app/portfolio-item/portfolio-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/portfolio-item/portfolio-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"toggleDetail()\" >\n  <img class=\"card-img\" [src]=\"item.imagePath\" alt=\"Card image\">\n\n  <div class=\"card-img-overlay\" [hidden]=show>\n    <div id='center-content'>\n      <h2 class=\"card-text\">{{item.name}}</h2>\n\n    </div>\n  </div>\n\n  <div class=\"card-img-overlay detail-overlay\" [hidden]=!show >\n    <div id='center-content'>\n      <h6 class=\"card-text\">{{item.date}}</h6>\n      <p class=\"card-text\">{{item.description}}</p>\n      <button *ngIf=item.codeLink.length type=\"button\" class=\"btn btn-sm\">\n        <a href={{item.codeLink}}>Code</a>\n      </button>\n      <button *ngIf=item.demoLink.length type=\"button\" class=\"btn btn-sm\">\n        <a href={{item.demoLink}}>Demo</a>\n      </button>\n      <button *ngIf=item.moreInfo.length type=\"button\" class=\"btn btn-sm\">\n        <a href={{item.moreInfo}}>More Info</a>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio-item/portfolio-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio-item/portfolio-item.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItemComponent", function() { return PortfolioItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portfolio-item */ "./src/app/portfolio-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioItemComponent = /** @class */ (function () {
    function PortfolioItemComponent() {
        this.show = false;
    }
    PortfolioItemComponent.prototype.ngOnInit = function () {
    };
    PortfolioItemComponent.prototype.hideDetails = function () {
        this.show = false;
    };
    PortfolioItemComponent.prototype.showDetails = function () {
        this.show = true;
    };
    PortfolioItemComponent.prototype.toggleDetail = function () {
        if (this.show == false) {
            this.show = true;
        }
        else if (this.show == true) {
            this.show = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _portfolio_item__WEBPACK_IMPORTED_MODULE_1__["portfolioItem"])
    ], PortfolioItemComponent.prototype, "item", void 0);
    PortfolioItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-item',
            template: __webpack_require__(/*! ./portfolio-item.component.html */ "./src/app/portfolio-item/portfolio-item.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-item.component.css */ "./src/app/portfolio-item/portfolio-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioItemComponent);
    return PortfolioItemComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  width: 18em;\n  height: 18em;\n}\n.card-img-overlay{\n  width: 18em;\n  height: 18em;\n  word-wrap: break-word;\n}\n.detail-overlay{\n  background-color: rgba(250,201,184,0.5);\n}\nimg{\n  width: 18em;\n  height: 18em;\n}\n.btn{\n  background-color: #E88873;\n  color: #f4f4f4;\n  margin:0.5em;\n}\n.btn:hover{\n  background-color: #e26a50;\n}\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class='display-4'>Portfolio</h1>\n<hr>\n<div class=\"card-deck\">\n  <div *ngFor='let item of items'>\n    <app-portfolio-item [item]=\"item\"></app-portfolio-item >\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portfolio-data */ "./src/app/portfolio-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.items = _portfolio_data__WEBPACK_IMPORTED_MODULE_1__["PORTFOLIOITEMS"];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Bella/Desktop/ifigueroa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map