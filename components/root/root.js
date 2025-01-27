var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./rootUS3.module.css";
import Footer from "../global/footer";
import Cookies from "js-cookie";
import { Parent } from "../logOut/parent";
import { MoreContent } from "../header/more";
import logOutFn from "../../lib/users/logOut";
import { useState } from "react";
var Root = function (_a) {
    var setTokenState = _a.setTokenState, tokenState = _a.tokenState;
    var location = useLocation();
    var token = Cookies.get("token");
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    console.log(token);
    function handleLogOut() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, logOutFn({ setErrMsg: setErrMsg })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs(_Fragment, { children: [_jsxs("nav", __assign({ className: styles.navUS3 }, { children: [_jsxs("div", { children: [_jsx(Link, __assign({ to: "/" }, { children: "LOGO" })), _jsx(Link, __assign({ to: "/", className: location.pathname === "/"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "Home" })), _jsx(Link, __assign({ to: "venues", className: location.pathname === "/venues"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "Venues" })), _jsx(Link, __assign({ to: "ticketing", className: location.pathname === "/ticketing"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "Ticketing" })), _jsx(Link, __assign({ to: "event-services", className: location.pathname === "/event-services"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "Event Services" })), _jsx(Link, __assign({ to: "about", className: location.pathname === "/about"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "About" })), _jsx(Link, __assign({ to: "blacklist", className: location.pathname === "/blacklist"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "Blacklist" })), _jsx("div", __assign({ style: {
                                    color: "black",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                } }, { children: _jsx(MoreContent, {}) }))] }), !token || token === undefined ? (_jsxs("div", { children: [_jsx(Link, __assign({ to: "sign-up", className: location.pathname === "/sign-up"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "Sign up" })), _jsx(Link, __assign({ to: "login", className: location.pathname === "/login"
                                    ? "".concat(styles.current)
                                    : "".concat(styles.nonActive) }, { children: "Login" }))] })) : (_jsx(_Fragment, { children: _jsx(Parent, { setTokenState: setTokenState }) }))] })), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] }));
};
export default Root;
