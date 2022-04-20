"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description: Axios Encapsulation
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-04-20 14:39:00
 * @LastEditors: Mirage
 * @LastEditTime: 2022-04-20 15:54:25
 */
var axios_1 = __importDefault(require("axios"));
var Request = /** @class */ (function () {
    function Request(config) {
        var _a, _b, _c, _d;
        this.instance = axios_1.default.create(config);
        this.interceptorsObject = config.interceptors;
        /**
         * Example Request Interceptors
         */
        this.instance.interceptors.request.use((_a = this.interceptorsObject) === null || _a === void 0 ? void 0 : _a.requestInterceptors, (_b = this.interceptorsObject) === null || _b === void 0 ? void 0 : _b.requestInterceptorsCatch);
        /**
         * Example Response Interceptors
         */
        this.instance.interceptors.response.use((_c = this.interceptorsObject) === null || _c === void 0 ? void 0 : _c.responseInterceptors, (_d = this.interceptorsObject) === null || _d === void 0 ? void 0 : _d.responseInterceptorsCatch);
        /**
         * Global Request Interceptors
         */
        this.instance.interceptors.request.use(function (request) {
            return request;
        }, function (error) { return error; });
        /**
         * Global Response Interceptors
         */
        this.instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) { return error; });
    }
    Request.prototype.request = function (config) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var setRequestData, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if ((_a = config.interceptors) === null || _a === void 0 ? void 0 : _a.requestInterceptors) {
                            config = config.interceptors.requestInterceptors(config);
                        }
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.instance.request(config)];
                    case 2:
                        setRequestData = _d.sent();
                        if (!((_b = config.interceptors) === null || _b === void 0 ? void 0 : _b.responseInterceptors)) return [3 /*break*/, 4];
                        return [4 /*yield*/, ((_c = config.interceptors) === null || _c === void 0 ? void 0 : _c.responseInterceptors(setRequestData))];
                    case 3:
                        setRequestData = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/, setRequestData];
                    case 5:
                        error_1 = _d.sent();
                        console.log(error_1);
                        return [2 /*return*/, error_1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Request;
}());
exports.default = Request;
