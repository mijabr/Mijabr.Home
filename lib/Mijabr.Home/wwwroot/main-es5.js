function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='app'>\n  <app-toolbar [title]='title'></app-toolbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intro-menu/intro-menu.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro-menu/intro-menu.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntroMenuIntroMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='universe'>\n  <div *ngFor='let ship of ships' class='ship-zoom-{{ship.Position}}'>\n    <div class='ship-holding-pattern' ngClass='ship-pos-{{ship.Position}}'>\n      <a class='ship ship-starbug' routerLink='{{ship.Route}}'>\n        <img src='assets/starbug_small.png'>\n        <div class='link-text'>{{ship.Label}}</div>\n      </a>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/button/button.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/button/button.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLibraryComponentButtonButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button type='{{type}}' [ngClass]=\"{'enabled':enabled}\">\n  <div class='text' [ngClass]=\"{'text-enabled':enabled}\">\n    <ng-content></ng-content>\n  </div>\n</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/card/card.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/card/card.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLibraryComponentCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='app-card' [ngStyle]='{\"max-height\": maxHeight, \"transition\": transition}'>\r\n  <div *ngIf='cardHeader' class='app-card-header'>\r\n    <ng-content select='app-card-header'></ng-content>\r\n  </div>\r\n  <div class='app-card-content' [ngStyle]='{\"height\": contentHeight}'>\r\n    <div *ngIf='cardLeft' class='app-card-left'>\r\n      <ng-content select='app-card-left'></ng-content>\r\n    </div>\r\n    <div class='app-card-right'>\r\n      <div *ngIf='cardBodyTitle' class='app-card-body-title'>\r\n        <ng-content select='app-card-body-title'></ng-content>\r\n      </div>\r\n      <ng-content select='app-card-body'></ng-content>\r\n    </div>\r\n  </div>\r\n  <div *ngIf='cardFooter' class='app-card-footer'>\r\n    <ng-content select='app-card-footer'></ng-content>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/expander-button/expander-button/expander-button.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/expander-button/expander-button/expander-button.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLibraryComponentExpanderButtonExpanderButtonExpanderButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (click)='onClick()'>\n  <div class='expand-icon' [ngClass]='{rotated: isExpanded}'>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\"\n    viewBox=\"0 0 24 24\">\n    <path d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\" />\n  </svg>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/link/link.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/link/link.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLibraryComponentLinkLinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<label>\n  <ng-content></ng-content>\n</label>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/modal/modal.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/modal/modal.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLibraryComponentModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf='show' class='modal-backdrop' (click)='onClickBackdrop()'>\n  <div class='modal-content' (click)='onClickContent($event)' [ngStyle]='{\"width\":width,\"height\":height}'>\n    <ng-content></ng-content>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/footer/footer.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/footer/footer.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='footer-spacer'></div>\n<div class='footer'>MIJABR is powered by Raspberry Pi<span class='version'>Version {{version}}</span></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/login/login.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/login/login.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<lib-modal [show]='show' (dismiss)='onDismiss()' width='18em'>\n  <div class='login' *ngIf='!joinMode'>\n    <h1>Log in</h1>\n    <form [formGroup]='loginForm'>\n      <label for='username'>Username\n        <input #username formControlName='username' type='text' id='username' class='form-control'>\n      </label>\n      <label for='password'>Password\n        <input formControlName='password' type='password' id='password' class='form-control' (keyup.enter)='onLogin()'>\n        <div *ngIf='loginForm.controls.password.errors && loginForm.controls.password.errors.required && (loginForm.controls.password.touched || loginFormSubmitted)'\n          class='login-error'>Password is required</div>\n      </label>\n      <lib-button usage='primary' (click)='onLogin()'>Log in</lib-button>\n      <div class='login-error'>{{failReason}}</div>\n      <div class='switch-mode'>\n        <label>\n          Not a user?\n          <lib-link usage='primary' (click)='onSwitchToJoinMode()'>Join now!</lib-link>\n        </label>\n      </div>\n    </form>\n  </div>\n  <div class='login' *ngIf='joinMode'>\n    <h1>Join now!</h1>\n    <form [formGroup]='joinForm'>\n      <label for='username'>User Name\n        <input #usernameJoin formControlName='username' type='text' id='username' class='form-control'>\n      </label>\n      <label for='password'>Password\n        <input formControlName='password' type='password' id='password' class='form-control'>\n        <div *ngIf='joinForm.controls.password.errors && joinForm.controls.password.errors.required && (joinForm.controls.password.touched || joinFormSubmitted)'\n          class='login-error'>Password is required</div>\n      </label>\n      <label for='passwordConfirm'>Confirm Password\n        <input formControlName='passwordConfirm' type='password' id='passwordConfirm' class='form-control' (keyup.enter)='onJoin()'>\n        <div *ngIf='joinForm.controls.passwordConfirm.errors && joinForm.controls.passwordConfirm.errors.required && (joinForm.controls.passwordConfirm.touched || joinFormSubmitted)'\n          class='login-error'>Confirm Password is required</div>\n      </label>\n      <lib-button usage='primary' (click)='onJoin()' type='submit'>Join</lib-button>\n      <div class='login-error'>{{failReason}}</div>\n      <div class='switch-mode'>\n        <label>\n          Already a user?\n          <lib-link usage='primary' (click)='onSwitchToLoginMode()'>Log in</lib-link>\n        </label>\n      </div>\n    </form>\n  </div>\n</lib-modal>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/toolbar/toolbar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/toolbar/toolbar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentToolbarToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-login #login></app-login>\n<div class='toolbar-wrap'>\n  <div class='toolbar'>\n    <div class='home'>\n      <a routerLink='intro-menu'>\n        <lib-icon-home background='black' fill='white' size='24'></lib-icon-home>\n      </a>\n    </div>\n    <div class='title'>{{title}}</div>\n    <div class='account' (click)='onClickAccount()'>\n      <lib-icon-account background='black' fill='white' size='24'></lib-icon-account>\n    </div>\n    <div class='username'>{{username}}</div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _intro_menu_intro_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./intro-menu/intro-menu.component */
    "./src/app/intro-menu/intro-menu.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/intro-menu',
      pathMatch: 'full'
    }, {
      path: 'intro-menu',
      component: _intro_menu_intro_menu_component__WEBPACK_IMPORTED_MODULE_3__["IntroMenuComponent"]
    } //,
    // {
    //   path: 'about',
    //   loadChildren: 'app/about/module/about.module#AboutModule'
    // },
    // {
    //   path: 'recipes',
    //   loadChildren: 'app/recipe/module/recipe.module#RecipeModule'
    // },
    // {
    //   path: 'scrabble',
    //   loadChildren: 'app/scrabble/module/scrabble.module#ScrabbleModule'
    // },
    // {
    //   path: 'words',
    //   loadChildren: 'app/words/module/words.module#WordsModule'
    // },
    // {
    //   path: 'animatus',
    //   loadChildren: 'app/animatus/module/animatus.module#AnimatusModule'
    // },
    // {
    //   path: 'racing',
    //   loadChildren: 'app/racing/module/racing.module#RacingModule'
    // },
    // {
    //   path: '**',
    //   redirectTo: '/links'
    // }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.less":
  /*!************************************!*\
    !*** ./src/app/app.component.less ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'MIJABR';
        this.isMenuOpen = true;
        this.closeOnSelect = false;
      }

      _createClass(AppComponent, [{
        key: "onClickBurgerMenu",
        value: function onClickBurgerMenu() {
          this.isMenuOpen = !this.isMenuOpen;
        }
      }, {
        key: "onClickMiniMenu",
        value: function onClickMiniMenu() {
          this.isMenuOpen = !this.isMenuOpen;
          this.closeOnSelect = this.isMenuOpen;
        }
      }, {
        key: "onMenuItemSelected",
        value: function onMenuItemSelected() {
          if (this.closeOnSelect) {
            this.closeOnSelect = false;
            this.isMenuOpen = false;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.less */
      "./src/app/app.component.less")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _intro_menu_intro_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./intro-menu/intro-menu.component */
    "./src/app/intro-menu/intro-menu.component.ts");
    /* harmony import */


    var _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/component/footer/footer.component */
    "./src/app/shared/component/footer/footer.component.ts");
    /* harmony import */


    var _shared_component_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/component/login/login.component */
    "./src/app/shared/component/login/login.component.ts");
    /* harmony import */


    var _shared_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/component/toolbar/toolbar.component */
    "./src/app/shared/component/toolbar/toolbar.component.ts");
    /* harmony import */


    var _library_module_library_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./library/module/library.module */
    "./src/app/library/module/library.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/service/user.service */
    "./src/app/shared/service/user.service.ts");
    /* harmony import */


    var _shared_service_version_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/service/version.service */
    "./src/app/shared/service/version.service.ts");
    /* harmony import */


    var _shared_service_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/service/api.service */
    "./src/app/shared/service/api.service.ts");
    /* harmony import */


    var _shared_service_environment_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/service/environment.service */
    "./src/app/shared/service/environment.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _intro_menu_intro_menu_component__WEBPACK_IMPORTED_MODULE_7__["IntroMenuComponent"], _shared_component_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _shared_component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _library_module_library_module__WEBPACK_IMPORTED_MODULE_11__["LibraryModule"]],
      providers: [_shared_service_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"], _shared_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _shared_service_version_service__WEBPACK_IMPORTED_MODULE_14__["VersionService"], _shared_service_environment_service__WEBPACK_IMPORTED_MODULE_16__["EnvironmentService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/intro-menu/intro-menu.component.less":
  /*!******************************************************!*\
    !*** ./src/app/intro-menu/intro-menu.component.less ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntroMenuIntroMenuComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".universe {\n  background-color: #000;\n  height: 95vh;\n}\n@-webkit-keyframes ship-fly-in-1 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 500, 0);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@keyframes ship-fly-in-1 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 500, 0);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@-webkit-keyframes ship-fly-in-2 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, -500, 0);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@keyframes ship-fly-in-2 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, -500, 0);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@-webkit-keyframes ship-fly-in-3 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 0, 250);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@keyframes ship-fly-in-3 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 0, 250);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@-webkit-keyframes ship-fly-in-4 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 0, 500);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@keyframes ship-fly-in-4 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 0, 500);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@-webkit-keyframes ship-fly-in-5 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, -250, 250);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@keyframes ship-fly-in-5 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, -250, 250);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@-webkit-keyframes ship-fly-in-6 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 250, -250);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n@keyframes ship-fly-in-6 {\n  0% {\n    transform: matrix(0.01, 0, 0, 0.01, 250, -250);\n  }\n  100% {\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n}\n.ship-zoom-1 {\n  -webkit-animation-name: ship-fly-in-1;\n          animation-name: ship-fly-in-1;\n  -webkit-animation-duration: 1.8s;\n          animation-duration: 1.8s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n.ship-zoom-2 {\n  -webkit-animation-name: ship-fly-in-2;\n          animation-name: ship-fly-in-2;\n  -webkit-animation-duration: 1.3s;\n          animation-duration: 1.3s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n.ship-zoom-3 {\n  -webkit-animation-name: ship-fly-in-3;\n          animation-name: ship-fly-in-3;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n.ship-zoom-4 {\n  -webkit-animation-name: ship-fly-in-4;\n          animation-name: ship-fly-in-4;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n.ship-zoom-5 {\n  -webkit-animation-name: ship-fly-in-5;\n          animation-name: ship-fly-in-5;\n  -webkit-animation-duration: 2.5s;\n          animation-duration: 2.5s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n.ship-zoom-6 {\n  -webkit-animation-name: ship-fly-in-6;\n          animation-name: ship-fly-in-6;\n  -webkit-animation-duration: 2.9s;\n          animation-duration: 2.9s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n@-webkit-keyframes ship-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes ship-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.ship-holding-pattern {\n  width: 100vmin;\n  height: 100vmin;\n  background: transparent;\n  position: fixed;\n  pointer-events: none;\n  -webkit-animation-name: ship-rotate;\n          animation-name: ship-rotate;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n.ship-holding-pattern .ship {\n  left: 20vmin;\n  position: relative;\n  background: transparent;\n  pointer-events: auto;\n}\n.ship-holding-pattern .ship img {\n  width: 40vmin;\n  height: 40vmin;\n}\n.ship-holding-pattern .ship .link-text {\n  width: 40vmin;\n  top: 22vmin;\n  font-size: 3vmin;\n  font-weight: 800;\n  background: transparent;\n  color: grey;\n  position: relative;\n  text-align: center;\n}\n.ship-holding-pattern .ship:hover {\n  cursor: pointer;\n}\n.ship-holding-pattern .ship:hover .link-text {\n  transition: color 1s;\n  color: white;\n}\n.ship-starbug {\n  width: 20vmin;\n  height: 33vmin;\n}\n.ship-starbug img {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0px, 40vmin, 30vmin, 0px);\n}\n.ship-pos-2 {\n  -webkit-animation-delay: -1.66s;\n          animation-delay: -1.66s;\n}\n.ship-pos-3 {\n  -webkit-animation-delay: -3.33s;\n          animation-delay: -3.33s;\n}\n.ship-pos-4 {\n  -webkit-animation-delay: -5s;\n          animation-delay: -5s;\n}\n.ship-pos-5 {\n  -webkit-animation-delay: -6.66s;\n          animation-delay: -6.66s;\n}\n.ship-pos-6 {\n  -webkit-animation-delay: -8.33s;\n          animation-delay: -8.33s;\n}\na {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8tbWVudS9DOi9TYW5kYm94L21pamFici9taWphYnIyL01pamFici5Ib21lL2FuZ3VsYXIvbWlqYWJyLWhvbWUvc3JjL2FwcC9pbnRyby1tZW51L2ludHJvLW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2ludHJvLW1lbnUvaW50cm8tbWVudS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0E7RUFDRTtJQUFPLDJDQUFBO0VDQVA7RURDQTtJQUFPLG1DQUFBO0VDRVA7QUFDRjtBRExBO0VBQ0U7SUFBTywyQ0FBQTtFQ0FQO0VEQ0E7SUFBTyxtQ0FBQTtFQ0VQO0FBQ0Y7QUREQTtFQUNFO0lBQU8sNENBQUE7RUNJUDtFREhBO0lBQU8sbUNBQUE7RUNNUDtBQUNGO0FEVEE7RUFDRTtJQUFPLDRDQUFBO0VDSVA7RURIQTtJQUFPLG1DQUFBO0VDTVA7QUFDRjtBRExBO0VBQ0U7SUFBTywyQ0FBQTtFQ1FQO0VEUEE7SUFBTyxtQ0FBQTtFQ1VQO0FBQ0Y7QURiQTtFQUNFO0lBQU8sMkNBQUE7RUNRUDtFRFBBO0lBQU8sbUNBQUE7RUNVUDtBQUNGO0FEVEE7RUFDRTtJQUFPLDJDQUFBO0VDWVA7RURYQTtJQUFPLG1DQUFBO0VDY1A7QUFDRjtBRGpCQTtFQUNFO0lBQU8sMkNBQUE7RUNZUDtFRFhBO0lBQU8sbUNBQUE7RUNjUDtBQUNGO0FEYkE7RUFDRTtJQUFPLDhDQUFBO0VDZ0JQO0VEZkE7SUFBTyxtQ0FBQTtFQ2tCUDtBQUNGO0FEckJBO0VBQ0U7SUFBTyw4Q0FBQTtFQ2dCUDtFRGZBO0lBQU8sbUNBQUE7RUNrQlA7QUFDRjtBRGpCQTtFQUNFO0lBQU8sOENBQUE7RUNvQlA7RURuQkE7SUFBTyxtQ0FBQTtFQ3NCUDtBQUNGO0FEekJBO0VBQ0U7SUFBTyw4Q0FBQTtFQ29CUDtFRG5CQTtJQUFPLG1DQUFBO0VDc0JQO0FBQ0Y7QURwQkE7RUFDRSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDc0JGO0FEcEJBO0VBQ0UscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ3NCRjtBRHBCQTtFQUNFLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNzQkY7QURwQkE7RUFDRSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDc0JGO0FEcEJBO0VBQ0UscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ3NCRjtBRHBCQTtFQUNFLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNzQkY7QURuQkE7RUFDRTtJQUFPLHVCQUFBO0VDc0JQO0VEckJBO0lBQU8seUJBQUE7RUN3QlA7QUFDRjtBRDNCQTtFQUNFO0lBQU8sdUJBQUE7RUNzQlA7RURyQkE7SUFBTyx5QkFBQTtFQ3dCUDtBQUNGO0FEdEJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUN3QkY7QURqQ0E7RUFXSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDeUJKO0FEdkNBO0VBZ0JNLGFBQUE7RUFDQSxjQUFBO0FDMEJOO0FEM0NBO0VBb0JNLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMwQk47QURyREE7RUErQkksZUFBQTtBQ3lCSjtBRHhEQTtFQWlDTSxvQkFBQTtFQUNBLFlBQUE7QUMwQk47QURyQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ3VCRjtBRHpCQTtFQUlJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ3dCSjtBRHBCQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNzQkY7QURwQkE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDc0JGO0FEcEJBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ3NCRjtBRHBCQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNzQkY7QURwQkE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDc0JGO0FEbkJBO0VBQ0UscUJBQUE7QUNxQkYiLCJmaWxlIjoic3JjL2FwcC9pbnRyby1tZW51L2ludHJvLW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi51bml2ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGhlaWdodDogOTV2aDtcbn1cblxuQGtleWZyYW1lcyBzaGlwLWZseS1pbi0xIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogbWF0cml4KDAuMDEsIDAsIDAsIDAuMDEsIDUwMCwgMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApOyB9XG59XG5Aa2V5ZnJhbWVzIHNoaXAtZmx5LWluLTIge1xuICAwJSAgIHsgdHJhbnNmb3JtOiBtYXRyaXgoMC4wMSwgMCwgMCwgMC4wMSwgLTUwMCwgMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApOyB9XG59XG5Aa2V5ZnJhbWVzIHNoaXAtZmx5LWluLTMge1xuICAwJSAgIHsgdHJhbnNmb3JtOiBtYXRyaXgoMC4wMSwgMCwgMCwgMC4wMSwgMCwgMjUwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCk7IH1cbn1cbkBrZXlmcmFtZXMgc2hpcC1mbHktaW4tNCB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IG1hdHJpeCgwLjAxLCAwLCAwLCAwLjAxLCAwLCA1MDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKTsgfVxufVxuQGtleWZyYW1lcyBzaGlwLWZseS1pbi01IHtcbiAgMCUgICB7IHRyYW5zZm9ybTogbWF0cml4KDAuMDEsIDAsIDAsIDAuMDEsIC0yNTAsIDI1MCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApOyB9XG59XG5Aa2V5ZnJhbWVzIHNoaXAtZmx5LWluLTYge1xuICAwJSAgIHsgdHJhbnNmb3JtOiBtYXRyaXgoMC4wMSwgMCwgMCwgMC4wMSwgMjUwLCAtMjUwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCk7IH1cbn1cblxuLnNoaXAtem9vbS0xIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTE7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxufVxuLnNoaXAtem9vbS0yIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4zcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxufVxuLnNoaXAtem9vbS0zIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxufVxuLnNoaXAtem9vbS00IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4wcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxufVxuLnNoaXAtem9vbS01IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxufVxuLnNoaXAtem9vbS02IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTY7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi45cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IFxufVxuXG5Aa2V5ZnJhbWVzIHNoaXAtcm90YXRlIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5zaGlwLWhvbGRpbmctcGF0dGVybiB7XG4gIHdpZHRoOiAxMDB2bWluO1xuICBoZWlnaHQ6IDEwMHZtaW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBhbmltYXRpb24tbmFtZTogc2hpcC1yb3RhdGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAuc2hpcCB7XG4gICAgbGVmdDogMjB2bWluO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwdm1pbjtcbiAgICAgIGhlaWdodDogNDB2bWluO1xuICAgIH1cbiAgICAubGluay10ZXh0IHtcbiAgICAgIHdpZHRoOiA0MHZtaW47XG4gICAgICB0b3A6IDIydm1pbjtcbiAgICAgIGZvbnQtc2l6ZTogM3ZtaW47XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogZ3JleTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgLnNoaXA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAubGluay10ZXh0IHtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDFzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4uc2hpcC1zdGFyYnVnIHtcbiAgd2lkdGg6IDIwdm1pbjtcbiAgaGVpZ2h0OiAzM3ZtaW47XG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwcHgsNDB2bWluLDMwdm1pbiwwcHgpO1xuICB9XG59XG5cbi5zaGlwLXBvcy0yIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS42NnM7XG59XG4uc2hpcC1wb3MtMyB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTMuMzNzO1xufVxuLnNoaXAtcG9zLTQge1xuICBhbmltYXRpb24tZGVsYXk6IC01cztcbn1cbi5zaGlwLXBvcy01IHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNi42NnM7XG59XG4uc2hpcC1wb3MtNiB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTguMzNzO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgXG59XG4iLCIudW5pdmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDk1dmg7XG59XG5Aa2V5ZnJhbWVzIHNoaXAtZmx5LWluLTEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMC4wMSwgMCwgMCwgMC4wMSwgNTAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGlwLWZseS1pbi0yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDAuMDEsIDAsIDAsIDAuMDEsIC01MDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoaXAtZmx5LWluLTMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMC4wMSwgMCwgMCwgMC4wMSwgMCwgMjUwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGlwLWZseS1pbi00IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDAuMDEsIDAsIDAsIDAuMDEsIDAsIDUwMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hpcC1mbHktaW4tNSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgwLjAxLCAwLCAwLCAwLjAxLCAtMjUwLCAyNTApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoaXAtZmx5LWluLTYge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMC4wMSwgMCwgMCwgMC4wMSwgMjUwLCAtMjUwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgfVxufVxuLnNoaXAtem9vbS0xIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTE7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG4uc2hpcC16b29tLTIge1xuICBhbmltYXRpb24tbmFtZTogc2hpcC1mbHktaW4tMjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbi5zaGlwLXpvb20tMyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGlwLWZseS1pbi0zO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuLnNoaXAtem9vbS00IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuLnNoaXAtem9vbS01IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoaXAtZmx5LWluLTU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG4uc2hpcC16b29tLTYge1xuICBhbmltYXRpb24tbmFtZTogc2hpcC1mbHktaW4tNjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjlzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbkBrZXlmcmFtZXMgc2hpcC1yb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLnNoaXAtaG9sZGluZy1wYXR0ZXJuIHtcbiAgd2lkdGg6IDEwMHZtaW47XG4gIGhlaWdodDogMTAwdm1pbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGlwLXJvdGF0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG4uc2hpcC1ob2xkaW5nLXBhdHRlcm4gLnNoaXAge1xuICBsZWZ0OiAyMHZtaW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnNoaXAtaG9sZGluZy1wYXR0ZXJuIC5zaGlwIGltZyB7XG4gIHdpZHRoOiA0MHZtaW47XG4gIGhlaWdodDogNDB2bWluO1xufVxuLnNoaXAtaG9sZGluZy1wYXR0ZXJuIC5zaGlwIC5saW5rLXRleHQge1xuICB3aWR0aDogNDB2bWluO1xuICB0b3A6IDIydm1pbjtcbiAgZm9udC1zaXplOiAzdm1pbjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBncmV5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaGlwLWhvbGRpbmctcGF0dGVybiAuc2hpcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaGlwLWhvbGRpbmctcGF0dGVybiAuc2hpcDpob3ZlciAubGluay10ZXh0IHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMXM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaGlwLXN0YXJidWcge1xuICB3aWR0aDogMjB2bWluO1xuICBoZWlnaHQ6IDMzdm1pbjtcbn1cbi5zaGlwLXN0YXJidWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDBweCwgNDB2bWluLCAzMHZtaW4sIDBweCk7XG59XG4uc2hpcC1wb3MtMiB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuNjZzO1xufVxuLnNoaXAtcG9zLTMge1xuICBhbmltYXRpb24tZGVsYXk6IC0zLjMzcztcbn1cbi5zaGlwLXBvcy00IHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XG59XG4uc2hpcC1wb3MtNSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTYuNjZzO1xufVxuLnNoaXAtcG9zLTYge1xuICBhbmltYXRpb24tZGVsYXk6IC04LjMzcztcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/intro-menu/intro-menu.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/intro-menu/intro-menu.component.ts ***!
    \****************************************************/

  /*! exports provided: IntroMenuComponent */

  /***/
  function srcAppIntroMenuIntroMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroMenuComponent", function () {
      return IntroMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IntroMenuComponent =
    /*#__PURE__*/
    function () {
      function IntroMenuComponent() {
        _classCallCheck(this, IntroMenuComponent);

        this.ships = [{
          Label: 'Scrabble',
          Position: 5,
          Route: '/scrabble/game'
        }, {
          Label: 'Recipes',
          Position: 4,
          Route: '/recipes'
        }, {
          Label: 'Animatus',
          Position: 3,
          Route: '/animatus'
        }, {
          Label: 'Racing',
          Position: 2,
          Route: '/racing'
        }, {
          Label: 'About',
          Position: 1,
          Route: '/about'
        }];
      }

      _createClass(IntroMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroMenuComponent;
    }();

    IntroMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intro-menu/intro-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro-menu.component.less */
      "./src/app/intro-menu/intro-menu.component.less")).default]
    })], IntroMenuComponent);
    /***/
  },

  /***/
  "./src/app/library/component/button/button.component.less":
  /*!****************************************************************!*\
    !*** ./src/app/library/component/button/button.component.less ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLibraryComponentButtonButtonComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  width: 7em;\n  font-size: 1em;\n  padding: 0.1em;\n  margin: 0.1em;\n  cursor: auto;\n  background: linear-gradient(#226, #224);\n  border-radius: 0.5em;\n  border-width: 0;\n  transform: scale(1, 1);\n}\nbutton.enabled {\n  background: linear-gradient(#22f, #224);\n  cursor: pointer;\n}\nbutton.enabled:focus {\n  outline: none;\n  transform: scale(1.1, 1.1);\n  transition: 0.2s;\n}\nbutton.enabled:hover {\n  transform: scale(1.1, 1.1);\n  transition: 0.2s;\n}\n.text {\n  background: linear-gradient(to bottom, #665, #aa5);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.text.text-enabled {\n  background: linear-gradient(to bottom, #995, #dd5);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvYnV0dG9uL0M6L1NhbmRib3gvbWlqYWJyL21pamFicjIvTWlqYWJyLkhvbWUvYW5ndWxhci9taWphYnItaG9tZS9zcmMvYXBwL2xpYnJhcnkvY29tcG9uZW50L2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvY29tcG9uZW50L2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0FDRUo7QURESTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDR047QURESTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBREVBO0VBQ0Usa0RBQUE7RUFDRCw2QkFBQTtFQUNBLG9DQUFBO0FDQUQ7QURDRTtFQUNFLGtEQUFBO0VBQ0QsNkJBQUE7RUFDQSxvQ0FBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHdpZHRoOiA3ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAwLjFlbTtcbiAgbWFyZ2luOiAwLjFlbTtcbiAgY3Vyc29yOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIyNiwgIzIyNCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wLCAxLjApO1xuICAmLmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjJmLCAjMjI0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICB9XG4gIH1cbn1cblxuLnRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNjY1LCAjYWE1KTtcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG5cdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgJi50ZXh0LWVuYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5OTUsICNkZDUpO1xuXHQgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHQgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuIiwiYnV0dG9uIHtcbiAgd2lkdGg6IDdlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDAuMWVtO1xuICBtYXJnaW46IDAuMWVtO1xuICBjdXJzb3I6IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjI2LCAjMjI0KTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJvcmRlci13aWR0aDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cbmJ1dHRvbi5lbmFibGVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMmYsICMyMjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b24uZW5hYmxlZDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuYnV0dG9uLmVuYWJsZWQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi50ZXh0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzY2NSwgI2FhNSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4udGV4dC50ZXh0LWVuYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOTk1LCAjZGQ1KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/library/component/button/button.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/library/component/button/button.component.ts ***!
    \**************************************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppLibraryComponentButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ButtonComponent =
    /*#__PURE__*/
    function () {
      function ButtonComponent() {
        _classCallCheck(this, ButtonComponent);

        this.type = 'button';
        this.enabled = true;
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backGroundColor",
        get: function get() {
          if (this.usage === 'primary') {
            return 'blue';
          } else if (this.usage === 'secondary') {
            return 'white';
          }

          return 'green';
        }
      }]);

      return ButtonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "usage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "enabled", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'lib-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/button/button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./button.component.less */
      "./src/app/library/component/button/button.component.less")).default]
    })], ButtonComponent);
    /***/
  },

  /***/
  "./src/app/library/component/card/card.component.less":
  /*!************************************************************!*\
    !*** ./src/app/library/component/card/card.component.less ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLibraryComponentCardCardComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-card {\n  box-shadow: #0000001a 1px 2px 2px;\n  border: 1px solid #0000001a;\n  word-wrap: normal;\n  overflow: hidden;\n}\n.app-card-content {\n  display: flex;\n  padding: 20px;\n}\n.app-card-left {\n  width: 100px;\n  height: 100%;\n}\n.app-card-right {\n  width: 100%;\n}\n.app-card-body-title {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.app-card-footer {\n  margin-top: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvY2FyZC9DOi9TYW5kYm94L21pamFici9taWphYnIyL01pamFici5Ib21lL2FuZ3VsYXIvbWlqYWJyLWhvbWUvc3JjL2FwcC9saWJyYXJ5L2NvbXBvbmVudC9jYXJkL2NhcmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvY29tcG9uZW50L2NhcmQvY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7QUNGRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsZUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvY2FyZC9jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jYXJkIHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDFhIDFweCAycHggMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMWE7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXBwLWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hcHAtY2FyZC1sZWZ0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcHAtY2FyZC1yaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLWNhcmQtYm9keS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmFwcC1jYXJkLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbiIsIi5hcHAtY2FyZCB7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDAxYSAxcHggMnB4IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFhO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hcHAtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5hcHAtY2FyZC1sZWZ0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYXBwLWNhcmQtcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hcHAtY2FyZC1ib2R5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmFwcC1jYXJkLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/library/component/card/card.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/library/component/card/card.component.ts ***!
    \**********************************************************/

  /*! exports provided: CardHeaderDirective, CardBodyTitleDirective, CardBodyDirective, CardFooterDirective, CardLeftDirective, CardComponent */

  /***/
  function srcAppLibraryComponentCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardHeaderDirective", function () {
      return CardHeaderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardBodyTitleDirective", function () {
      return CardBodyTitleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardBodyDirective", function () {
      return CardBodyDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardFooterDirective", function () {
      return CardFooterDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardLeftDirective", function () {
      return CardLeftDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardHeaderDirective = function CardHeaderDirective() {
      _classCallCheck(this, CardHeaderDirective);
    };

    CardHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'app-card-header'
    })], CardHeaderDirective);

    var CardBodyTitleDirective = function CardBodyTitleDirective() {
      _classCallCheck(this, CardBodyTitleDirective);
    };

    CardBodyTitleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'app-card-body-title'
    })], CardBodyTitleDirective);

    var CardBodyDirective = function CardBodyDirective() {
      _classCallCheck(this, CardBodyDirective);
    };

    CardBodyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'app-card-body'
    })], CardBodyDirective);

    var CardFooterDirective = function CardFooterDirective() {
      _classCallCheck(this, CardFooterDirective);
    };

    CardFooterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'app-card-footer'
    })], CardFooterDirective);

    var CardLeftDirective = function CardLeftDirective() {
      _classCallCheck(this, CardLeftDirective);
    };

    CardLeftDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'app-card-left'
    })], CardLeftDirective);

    var CardComponent = function CardComponent() {
      _classCallCheck(this, CardComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(CardHeaderDirective, null)], CardComponent.prototype, "cardHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(CardBodyTitleDirective, null)], CardComponent.prototype, "cardBodyTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(CardFooterDirective, null)], CardComponent.prototype, "cardFooter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(CardLeftDirective, null)], CardComponent.prototype, "cardLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "contentHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "transition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "maxHeight", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.less */
      "./src/app/library/component/card/card.component.less")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/library/component/expander-button/expander-button/expander-button.component.less":
  /*!**************************************************************************************************!*\
    !*** ./src/app/library/component/expander-button/expander-button/expander-button.component.less ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLibraryComponentExpanderButtonExpanderButtonExpanderButtonComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expand-icon {\n  transform: rotate(180deg);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.rotated {\n  transform: rotate(0deg);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvZXhwYW5kZXItYnV0dG9uL2V4cGFuZGVyLWJ1dHRvbi9DOi9TYW5kYm94L21pamFici9taWphYnIyL01pamFici5Ib21lL2FuZ3VsYXIvbWlqYWJyLWhvbWUvc3JjL2FwcC9saWJyYXJ5L2NvbXBvbmVudC9leHBhbmRlci1idXR0b24vZXhwYW5kZXItYnV0dG9uL2V4cGFuZGVyLWJ1dHRvbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvZXhwYW5kZXItYnV0dG9uL2V4cGFuZGVyLWJ1dHRvbi9leHBhbmRlci1idXR0b24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0NGO0FERUE7RUFDRSx1QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvZXhwYW5kZXItYnV0dG9uL2V4cGFuZGVyLWJ1dHRvbi9leHBhbmRlci1idXR0b24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyAgXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3RhdGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG4iLCIuZXhwYW5kLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/library/component/expander-button/expander-button/expander-button.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/library/component/expander-button/expander-button/expander-button.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ExpanderButtonComponent */

  /***/
  function srcAppLibraryComponentExpanderButtonExpanderButtonExpanderButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpanderButtonComponent", function () {
      return ExpanderButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExpanderButtonComponent =
    /*#__PURE__*/
    function () {
      function ExpanderButtonComponent() {
        _classCallCheck(this, ExpanderButtonComponent);

        this.onExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isExpanded = false;
      }

      _createClass(ExpanderButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.isExpanded = !this.isExpanded;
          this.onExpand.emit(this.isExpanded);
        }
      }]);

      return ExpanderButtonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ExpanderButtonComponent.prototype, "onExpand", void 0);
    ExpanderButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expander-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expander-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/expander-button/expander-button/expander-button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expander-button.component.less */
      "./src/app/library/component/expander-button/expander-button/expander-button.component.less")).default]
    })], ExpanderButtonComponent);
    /***/
  },

  /***/
  "./src/app/library/component/icon/icon-account.ts":
  /*!********************************************************!*\
    !*** ./src/app/library/component/icon/icon-account.ts ***!
    \********************************************************/

  /*! exports provided: IconAccountComponent */

  /***/
  function srcAppLibraryComponentIconIconAccountTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconAccountComponent", function () {
      return IconAccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconAccountComponent = function IconAccountComponent() {
      _classCallCheck(this, IconAccountComponent);

      this.fill = '#777';
      this.background = '#fff';
      this.size = '40';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconAccountComponent.prototype, "fill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconAccountComponent.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconAccountComponent.prototype, "size", void 0);
    IconAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'lib-icon-account',
      template: "\n<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'\n  style.background-color='{{background}}' attr.fill='{{fill}}' style.width='{{size}}' style.height='{{size}}'>\n  <path d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\"\n  />\n</svg>"
    })], IconAccountComponent);
    /***/
  },

  /***/
  "./src/app/library/component/icon/icon-arrow-down-bold.ts":
  /*!****************************************************************!*\
    !*** ./src/app/library/component/icon/icon-arrow-down-bold.ts ***!
    \****************************************************************/

  /*! exports provided: IconArrowDownBoldComponent */

  /***/
  function srcAppLibraryComponentIconIconArrowDownBoldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconArrowDownBoldComponent", function () {
      return IconArrowDownBoldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconArrowDownBoldComponent = function IconArrowDownBoldComponent() {
      _classCallCheck(this, IconArrowDownBoldComponent);

      this.fill = '#777';
      this.background = '#fff';
      this.size = '40';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconArrowDownBoldComponent.prototype, "fill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconArrowDownBoldComponent.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconArrowDownBoldComponent.prototype, "size", void 0);
    IconArrowDownBoldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icon-arrow-down-bold',
      template: "\n<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'\n  style.background-color='{{background}}' attr.fill='{{fill}}' style.width='{{size}}' style.height='{{size}}'>\n  <path d=\"M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z\" />\n</svg>"
    })], IconArrowDownBoldComponent);
    /***/
  },

  /***/
  "./src/app/library/component/icon/icon-home.ts":
  /*!*****************************************************!*\
    !*** ./src/app/library/component/icon/icon-home.ts ***!
    \*****************************************************/

  /*! exports provided: IconHomeComponent */

  /***/
  function srcAppLibraryComponentIconIconHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconHomeComponent", function () {
      return IconHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconHomeComponent = function IconHomeComponent() {
      _classCallCheck(this, IconHomeComponent);

      this.fill = '#777';
      this.background = '#fff';
      this.size = '40';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconHomeComponent.prototype, "fill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconHomeComponent.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconHomeComponent.prototype, "size", void 0);
    IconHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'lib-icon-home',
      template: "\n<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'\n  style.background-color='{{background}}' attr.fill='{{fill}}' style.width='{{size}}' style.height='{{size}}'>\n  <path d='M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z' />\n</svg>"
    })], IconHomeComponent);
    /***/
  },

  /***/
  "./src/app/library/component/icon/icon-star.ts":
  /*!*****************************************************!*\
    !*** ./src/app/library/component/icon/icon-star.ts ***!
    \*****************************************************/

  /*! exports provided: IconStarComponent */

  /***/
  function srcAppLibraryComponentIconIconStarTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconStarComponent", function () {
      return IconStarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconStarComponent = function IconStarComponent() {
      _classCallCheck(this, IconStarComponent);

      this.fill = '#777';
      this.background = '#fff';
      this.size = '40';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconStarComponent.prototype, "fill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconStarComponent.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconStarComponent.prototype, "size", void 0);
    IconStarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icon-star',
      template: "\n<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'\n  style.background-color='{{background}}' attr.fill='{{fill}}' style.width='{{size}}' style.height='{{size}}'>\n  <path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\" />\n</svg>"
    })], IconStarComponent);
    /***/
  },

  /***/
  "./src/app/library/component/icon/icon-thumb-up.ts":
  /*!*********************************************************!*\
    !*** ./src/app/library/component/icon/icon-thumb-up.ts ***!
    \*********************************************************/

  /*! exports provided: IconThumbUpComponent */

  /***/
  function srcAppLibraryComponentIconIconThumbUpTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconThumbUpComponent", function () {
      return IconThumbUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconThumbUpComponent = function IconThumbUpComponent() {
      _classCallCheck(this, IconThumbUpComponent);

      this.fill = '#777';
      this.background = '#fff';
      this.size = '40';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconThumbUpComponent.prototype, "fill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconThumbUpComponent.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconThumbUpComponent.prototype, "size", void 0);
    IconThumbUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icon-thumb-up',
      template: "\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n  style.background-color='{{background}}' attr.fill='{{fill}}' style.width='{{size}}' style.height='{{size}}'>\n  <path d=\"M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58\n  C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z\" />\n</svg>"
    })], IconThumbUpComponent);
    /***/
  },

  /***/
  "./src/app/library/component/icon/icon-weight.ts":
  /*!*******************************************************!*\
    !*** ./src/app/library/component/icon/icon-weight.ts ***!
    \*******************************************************/

  /*! exports provided: IconWeightComponent */

  /***/
  function srcAppLibraryComponentIconIconWeightTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconWeightComponent", function () {
      return IconWeightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconWeightComponent = function IconWeightComponent() {
      _classCallCheck(this, IconWeightComponent);

      this.fill = '#777';
      this.background = '#fff';
      this.size = '40';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconWeightComponent.prototype, "fill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconWeightComponent.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IconWeightComponent.prototype, "size", void 0);
    IconWeightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icon-weight',
      template: "\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\n  style.background-color='{{background}}' attr.fill='{{fill}}' style.width='{{size}}' style.height='{{size}}'>\n  <path d=\"M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,\n  21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2\n  0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5Z\" />\n</svg>"
    })], IconWeightComponent);
    /***/
  },

  /***/
  "./src/app/library/component/link/link.component.less":
  /*!************************************************************!*\
    !*** ./src/app/library/component/link/link.component.less ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLibraryComponentLinkLinkComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "label {\n  color: blue;\n}\nlabel:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvbGluay9DOi9TYW5kYm94L21pamFici9taWphYnIyL01pamFici5Ib21lL2FuZ3VsYXIvbWlqYWJyLWhvbWUvc3JjL2FwcC9saWJyYXJ5L2NvbXBvbmVudC9saW5rL2xpbmsuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvY29tcG9uZW50L2xpbmsvbGluay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2NvbXBvbmVudC9saW5rL2xpbmsuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxhYmVsIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbmxhYmVsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiIsImxhYmVsIHtcbiAgY29sb3I6IGJsdWU7XG59XG5sYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/library/component/link/link.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/library/component/link/link.component.ts ***!
    \**********************************************************/

  /*! exports provided: LinkComponent */

  /***/
  function srcAppLibraryComponentLinkLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkComponent", function () {
      return LinkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LinkComponent =
    /*#__PURE__*/
    function () {
      function LinkComponent() {
        _classCallCheck(this, LinkComponent);
      }

      _createClass(LinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LinkComponent;
    }();

    LinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'lib-link',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./link.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/link/link.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./link.component.less */
      "./src/app/library/component/link/link.component.less")).default]
    })], LinkComponent);
    /***/
  },

  /***/
  "./src/app/library/component/modal/modal.component.less":
  /*!**************************************************************!*\
    !*** ./src/app/library/component/modal/modal.component.less ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLibraryComponentModalModalComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-backdrop {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #1119;\n  z-index: 1000;\n}\n.modal-content {\n  position: relative;\n  margin: auto;\n  background-color: #fdb;\n  overflow: hidden;\n  border-radius: 2em;\n  top: 4em;\n}\n@media (max-width: 600px) {\n  .modal-content {\n    top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvbW9kYWwvQzovU2FuZGJveC9taWphYnIvbWlqYWJyMi9NaWphYnIuSG9tZS9hbmd1bGFyL21pamFici1ob21lL3NyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2xpYnJhcnkvY29tcG9uZW50L21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0RGO0FERUU7RUFBQTtJQUNFLE1BQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS9jb21wb25lbnQvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE5O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIHRvcDogNGVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbiIsIi5tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE5O1xuICB6LWluZGV4OiAxMDAwO1xufVxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICB0b3A6IDRlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgdG9wOiAwO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/library/component/modal/modal.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/library/component/modal/modal.component.ts ***!
    \************************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppLibraryComponentModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent() {
        _classCallCheck(this, ModalComponent);

        this.show = false;
        this.width = '16em';
        this.height = 'auto';
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickBackdrop",
        value: function onClickBackdrop() {
          this.dismiss.emit(null);
        }
      }, {
        key: "onClickContent",
        value: function onClickContent(event) {
          event.stopPropagation();
        }
      }]);

      return ModalComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModalComponent.prototype, "dismiss", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'lib-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/library/component/modal/modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.less */
      "./src/app/library/component/modal/modal.component.less")).default]
    })], ModalComponent);
    /***/
  },

  /***/
  "./src/app/library/module/library.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/library/module/library.module.ts ***!
    \**************************************************/

  /*! exports provided: LibraryModule */

  /***/
  function srcAppLibraryModuleLibraryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryModule", function () {
      return LibraryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../component/card/card.component */
    "./src/app/library/component/card/card.component.ts");
    /* harmony import */


    var _component_expander_button_expander_button_expander_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../component/expander-button/expander-button/expander-button.component */
    "./src/app/library/component/expander-button/expander-button/expander-button.component.ts");
    /* harmony import */


    var _component_icon_icon_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../component/icon/icon-home */
    "./src/app/library/component/icon/icon-home.ts");
    /* harmony import */


    var _component_icon_icon_weight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../component/icon/icon-weight */
    "./src/app/library/component/icon/icon-weight.ts");
    /* harmony import */


    var _component_icon_icon_thumb_up__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../component/icon/icon-thumb-up */
    "./src/app/library/component/icon/icon-thumb-up.ts");
    /* harmony import */


    var _component_icon_icon_arrow_down_bold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../component/icon/icon-arrow-down-bold */
    "./src/app/library/component/icon/icon-arrow-down-bold.ts");
    /* harmony import */


    var _component_icon_icon_star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../component/icon/icon-star */
    "./src/app/library/component/icon/icon-star.ts");
    /* harmony import */


    var _component_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../component/button/button.component */
    "./src/app/library/component/button/button.component.ts");
    /* harmony import */


    var _component_icon_icon_account__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../component/icon/icon-account */
    "./src/app/library/component/icon/icon-account.ts");
    /* harmony import */


    var _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../component/modal/modal.component */
    "./src/app/library/component/modal/modal.component.ts");
    /* harmony import */


    var _component_link_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../component/link/link.component */
    "./src/app/library/component/link/link.component.ts");

    var LibraryModule = function LibraryModule() {
      _classCallCheck(this, LibraryModule);
    };

    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyTitleDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardFooterDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardLeftDirective"], _component_expander_button_expander_button_expander_button_component__WEBPACK_IMPORTED_MODULE_4__["ExpanderButtonComponent"], _component_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"], _component_link_link_component__WEBPACK_IMPORTED_MODULE_13__["LinkComponent"], _component_icon_icon_home__WEBPACK_IMPORTED_MODULE_5__["IconHomeComponent"], _component_icon_icon_weight__WEBPACK_IMPORTED_MODULE_6__["IconWeightComponent"], _component_icon_icon_thumb_up__WEBPACK_IMPORTED_MODULE_7__["IconThumbUpComponent"], _component_icon_icon_arrow_down_bold__WEBPACK_IMPORTED_MODULE_8__["IconArrowDownBoldComponent"], _component_icon_icon_star__WEBPACK_IMPORTED_MODULE_9__["IconStarComponent"], _component_icon_icon_account__WEBPACK_IMPORTED_MODULE_11__["IconAccountComponent"], _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"]],
      exports: [_component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardHeaderDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyTitleDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardFooterDirective"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardLeftDirective"], _component_expander_button_expander_button_expander_button_component__WEBPACK_IMPORTED_MODULE_4__["ExpanderButtonComponent"], _component_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"], _component_link_link_component__WEBPACK_IMPORTED_MODULE_13__["LinkComponent"], _component_icon_icon_home__WEBPACK_IMPORTED_MODULE_5__["IconHomeComponent"], _component_icon_icon_weight__WEBPACK_IMPORTED_MODULE_6__["IconWeightComponent"], _component_icon_icon_thumb_up__WEBPACK_IMPORTED_MODULE_7__["IconThumbUpComponent"], _component_icon_icon_arrow_down_bold__WEBPACK_IMPORTED_MODULE_8__["IconArrowDownBoldComponent"], _component_icon_icon_star__WEBPACK_IMPORTED_MODULE_9__["IconStarComponent"], _component_icon_icon_account__WEBPACK_IMPORTED_MODULE_11__["IconAccountComponent"], _component_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"]]
    })], LibraryModule);
    /***/
  },

  /***/
  "./src/app/shared/component/footer/footer.component.less":
  /*!***************************************************************!*\
    !*** ./src/app/shared/component/footer/footer.component.less ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentFooterFooterComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-spacer {\n  height: 24px;\n}\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  height: 24px;\n  background-color: #000;\n  color: #999;\n  padding-top: 2px;\n}\n.footer .version {\n  font-size: 12px;\n  float: right;\n  padding-right: 5px;\n}\n@media (max-width: 400px) {\n  .footer {\n    font-size: 12px;\n  }\n  .footer .version {\n    font-size: 10px;\n  }\n}\n@media (max-width: 300px) {\n  .footer {\n    font-size: 10px;\n  }\n  .footer .version {\n    font-size: 8px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvQzovU2FuZGJveC9taWphYnIvbWlqYWJyMi9NaWphYnIuSG9tZS9hbmd1bGFyL21pamFici1ob21lL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FGO0FEVEE7RUFXSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURHQTtFQUNFO0lBQ0EsZUFBQTtFQ0RBO0VEQUE7SUFHSSxlQUFBO0VDQUo7QUFDRjtBRElBO0VBQ0U7SUFDQSxlQUFBO0VDRkE7RURDQTtJQUdJLGNBQUE7RUNESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1zcGFjZXIge1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogIzk5OTtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgLnZlcnNpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAgIC52ZXJzaW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5mb290ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gICAgLnZlcnNpb24ge1xuICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgfVxuICB9XG59XG4iLCIuZm9vdGVyLXNwYWNlciB7XG4gIGhlaWdodDogMjRweDtcbn1cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogIzk5OTtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5mb290ZXIgLnZlcnNpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZm9vdGVyIC52ZXJzaW9uIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmZvb3RlciAudmVyc2lvbiB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/component/footer/footer.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/component/footer/footer.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_version_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/version.service */
    "./src/app/shared/service/version.service.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(versionService) {
        _classCallCheck(this, FooterComponent);

        this.versionService = versionService;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.versionService.getVersion().subscribe(function (response) {
            _this.version = response.version;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _service_version_service__WEBPACK_IMPORTED_MODULE_2__["VersionService"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.less */
      "./src/app/shared/component/footer/footer.component.less")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/component/login/login.component.less":
  /*!*************************************************************!*\
    !*** ./src/app/shared/component/login/login.component.less ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentLoginLoginComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login {\n  padding: 1em;\n  background-color: #000;\n  color: #0f0;\n}\nh1 {\n  margin: 0 0 0.3em 0;\n}\nlabel {\n  display: block;\n  margin: 0.5em 0;\n  text-shadow: 0 0 1em ,0 0 2em ,0 0 3em ,0 0 4em;\n}\ninput {\n  background-color: #000;\n  color: #f00;\n  border: none;\n}\ninput:focus {\n  outline: none;\n}\nlib-button {\n  display: block;\n}\n.switch-mode {\n  margin-top: 2em;\n}\n.login-error {\n  color: red;\n}\n.form-control {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9sb2dpbi9DOi9TYW5kYm94L21pamFici9taWphYnIyL01pamFici5Ib21lL2FuZ3VsYXIvbWlqYWJyLWhvbWUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtBQ0RGO0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FDRkY7QURLQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNIRjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FETUE7RUFDRSxjQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsVUFBQTtBQ05GO0FEU0E7RUFDRSxjQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9naW4ge1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjMGYwO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMCAwIDAuM2VtIDA7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxZW0gLDAgMCAyZW0gLDAgMCAzZW0gLDAgMCA0ZW07XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG5saWItYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2l0Y2gtbW9kZSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmxvZ2luLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiLmxvZ2luIHtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogIzBmMDtcbn1cbmgxIHtcbiAgbWFyZ2luOiAwIDAgMC4zZW0gMDtcbn1cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxZW0gLDAgMCAyZW0gLDAgMCAzZW0gLDAgMCA0ZW07XG59XG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZjAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5saWItYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3dpdGNoLW1vZGUge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4ubG9naW4tZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/component/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/component/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSharedComponentLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/login.service */
    "./src/app/shared/service/login.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/shared/service/user.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, loginService, userService) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.loginService = loginService;
        this.userService = userService;
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loginForm = this.fb.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.joinForm = this.fb.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.show = false;
        this.joinMode = false;
        this.loginFormSubmitted = false;
        this.joinFormSubmitted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open() {
          this.onSwitchToLoginMode();
          this.show = true;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.failReason = '';
          this.loginForm.reset();
          this.joinForm.reset();
          this.loginFormSubmitted = false;
          this.joinFormSubmitted = false;
        }
      }, {
        key: "closeOnEscape",
        value: function closeOnEscape(event) {
          if (event.keyCode === 27) {
            this.onDismiss();
          }
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.show = false;
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this2 = this;

          this.failReason = '';
          this.loginFormSubmitted = true;

          if (this.loginForm.status === 'VALID') {
            this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(function (response) {
              _this2.doLogin(response);
            });
          }
        }
      }, {
        key: "onJoin",
        value: function onJoin() {
          var _this3 = this;

          this.failReason = '';
          this.joinFormSubmitted = true;

          if (this.joinForm.value.password !== this.joinForm.value.passwordConfirm) {
            this.failReason = 'confirm password does not match';
          } else if (this.joinForm.status === 'VALID') {
            this.loginService.join(this.joinForm.value.username, this.joinForm.value.password).subscribe(function (response) {
              _this3.doLogin(response);
            });
          }
        }
      }, {
        key: "onSwitchToJoinMode",
        value: function onSwitchToJoinMode() {
          var _this4 = this;

          this.reset();
          this.joinMode = true;
          setTimeout(function () {
            _this4.usernameJoin.nativeElement.focus();
          }, 100);
        }
      }, {
        key: "onSwitchToLoginMode",
        value: function onSwitchToLoginMode() {
          var _this5 = this;

          this.reset();
          this.joinMode = false;
          setTimeout(function () {
            _this5.username.nativeElement.focus();
          }, 100);
        }
      }, {
        key: "doLogin",
        value: function doLogin(response) {
          if (response.result) {
            this.userService.emitLoginEvent(response);
            this.onDismiss();
          } else {
            this.failReason = response.reason;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LoginComponent.prototype, "dismiss", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('username', null)], LoginComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('usernameJoin', null)], LoginComponent.prototype, "usernameJoin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event'])], LoginComponent.prototype, "closeOnEscape", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.less */
      "./src/app/shared/component/login/login.component.less")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/shared/component/toolbar/toolbar.component.less":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/component/toolbar/toolbar.component.less ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentToolbarToolbarComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-wrap {\n  height: 24px;\n  overflow: hidden;\n}\n.toolbar-wrap .toolbar {\n  height: 24px;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n  background-color: #000;\n}\n.toolbar-wrap .toolbar .home {\n  float: left;\n  padding: 0 5px;\n}\n.toolbar-wrap .toolbar .title {\n  float: left;\n  color: #fff;\n  font-size: 20px;\n  line-height: 24px;\n  padding: 0 5px;\n}\n.toolbar-wrap .toolbar .username {\n  float: right;\n  color: #fff;\n  font-size: 16px;\n  line-height: 24px;\n}\n.toolbar-wrap .toolbar .account {\n  float: right;\n  padding: 0 5px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90b29sYmFyL0M6L1NhbmRib3gvbWlqYWJyL21pamFicjIvTWlqYWJyLkhvbWUvYW5ndWxhci9taWphYnItaG9tZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NGO0FESEE7RUFJSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEWEE7RUFXTSxXQUFBO0VBQ0EsY0FBQTtBQ0dOO0FEZkE7RUFlTSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNHTjtBRHRCQTtFQXNCTSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dOO0FENUJBO0VBNEJNLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci13cmFwIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAudG9vbGJhciB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIC5ob21lIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICB9XG4gICAgLnVzZXJuYW1lIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIC5hY2NvdW50IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuIiwiLnRvb2xiYXItd3JhcCB7XG4gIGhlaWdodDogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50b29sYmFyLXdyYXAgLnRvb2xiYXIge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi50b29sYmFyLXdyYXAgLnRvb2xiYXIgLmhvbWUge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4udG9vbGJhci13cmFwIC50b29sYmFyIC50aXRsZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4udG9vbGJhci13cmFwIC50b29sYmFyIC51c2VybmFtZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4udG9vbGJhci13cmFwIC50b29sYmFyIC5hY2NvdW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/component/toolbar/toolbar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/component/toolbar/toolbar.component.ts ***!
    \***************************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppSharedComponentToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/shared/service/user.service.ts");

    var ToolbarComponent =
    /*#__PURE__*/
    function () {
      function ToolbarComponent(userService) {
        _classCallCheck(this, ToolbarComponent);

        this.userService = userService;
        this.username = '';
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.username = this.userService.getUser().username;
          this.userService.loginEvent().subscribe(function (response) {
            _this6.username = response;
          });
        }
      }, {
        key: "onClickAccount",
        value: function onClickAccount() {
          this.login.open();
        }
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ToolbarComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('login', null)], ToolbarComponent.prototype, "login", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/toolbar/toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.component.less */
      "./src/app/shared/component/toolbar/toolbar.component.less")).default]
    })], ToolbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/model/user-credentials.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/model/user-credentials.ts ***!
    \**************************************************/

  /*! exports provided: UserCredentials */

  /***/
  function srcAppSharedModelUserCredentialsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCredentials", function () {
      return UserCredentials;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserCredentials = function UserCredentials() {
      _classCallCheck(this, UserCredentials);
    };
    /***/

  },

  /***/
  "./src/app/shared/model/user.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/model/user.ts ***!
    \**************************************/

  /*! exports provided: User */

  /***/
  function srcAppSharedModelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/shared/service/api.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/service/api.service.ts ***!
    \***********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppSharedServiceApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environment.service */
    "./src/app/shared/service/environment.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/shared/service/user.service.ts");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http, environment, userService) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.environment = environment;
        this.userService = userService;
      }

      _createClass(ApiService, [{
        key: "post",
        value: function post(url, body) {
          if (this.environment.isProduction()) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            this.createAuthorizationHeader(headers);
            return this.http.post(url, body, {
              headers: headers
            });
          } else {
            return this.mockApi(url);
          }
        }
      }, {
        key: "mockApi",
        value: function mockApi(url) {
          url = "http://localhost:3004/".concat(url);
          return this.http.get(url, {});
        }
      }, {
        key: "createAuthorizationHeader",
        value: function createAuthorizationHeader(headers) {
          var token = this.userService.getUser().token;
          headers.append('Authorization', 'Bearer ' + token);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ApiService);
    /***/
  },

  /***/
  "./src/app/shared/service/environment.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/service/environment.service.ts ***!
    \*******************************************************/

  /*! exports provided: EnvironmentService */

  /***/
  function srcAppSharedServiceEnvironmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvironmentService", function () {
      return EnvironmentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var EnvironmentService =
    /*#__PURE__*/
    function () {
      function EnvironmentService() {
        _classCallCheck(this, EnvironmentService);
      }

      _createClass(EnvironmentService, [{
        key: "isProduction",
        value: function isProduction() {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production;
        }
      }]);

      return EnvironmentService;
    }();

    EnvironmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EnvironmentService);
    /***/
  },

  /***/
  "./src/app/shared/service/login.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/service/login.service.ts ***!
    \*************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppSharedServiceLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/shared/service/api.service.ts");
    /* harmony import */


    var _model_user_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/user-credentials */
    "./src/app/shared/model/user-credentials.ts");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(apiService) {
        _classCallCheck(this, LoginService);

        this.apiService = apiService;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(username, password) {
          var userCredentials = new _model_user_credentials__WEBPACK_IMPORTED_MODULE_3__["UserCredentials"]();
          userCredentials.username = username;
          userCredentials.password = password;
          return this.apiService.post('api/login/login', userCredentials);
        }
      }, {
        key: "join",
        value: function join(username, password) {
          var userCredentials = new _model_user_credentials__WEBPACK_IMPORTED_MODULE_3__["UserCredentials"]();
          userCredentials.username = username;
          userCredentials.password = password;
          return this.apiService.post('api/login/join', userCredentials);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/shared/service/user.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/service/user.service.ts ***!
    \************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/user */
    "./src/app/shared/model/user.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService() {
        _classCallCheck(this, UserService);

        this._loginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UserService, [{
        key: "loginEvent",
        value: function loginEvent() {
          return this._loginEvent;
        }
      }, {
        key: "emitLoginEvent",
        value: function emitLoginEvent(response) {
          this.saveUser(response);

          this._loginEvent.emit(response.username);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.loadUser();
        }
      }, {
        key: "saveUser",
        value: function saveUser(response) {
          var user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
          user.username = response.username;
          user.token = response.token;
          sessionStorage.setItem('user', JSON.stringify(user));
        }
      }, {
        key: "loadUser",
        value: function loadUser() {
          var userJson = sessionStorage.getItem('user');

          if (userJson === undefined || userJson === null) {
            return this.guestUser();
          } else {
            return JSON.parse(userJson);
          }
        }
      }, {
        key: "guestUser",
        value: function guestUser() {
          var user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
          user.username = 'Guest';
          return user;
        }
      }]);

      return UserService;
    }();

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/app/shared/service/version.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/service/version.service.ts ***!
    \***************************************************/

  /*! exports provided: VersionService */

  /***/
  function srcAppSharedServiceVersionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VersionService", function () {
      return VersionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/shared/service/api.service.ts");

    var VersionService =
    /*#__PURE__*/
    function () {
      function VersionService(apiService) {
        _classCallCheck(this, VersionService);

        this.apiService = apiService;
      }

      _createClass(VersionService, [{
        key: "getVersion",
        value: function getVersion() {
          return this.apiService.post('api/version');
        }
      }]);

      return VersionService;
    }();

    VersionService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    VersionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], VersionService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Sandbox\mijabr\mijabr2\Mijabr.Home\angular\mijabr-home\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map