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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import getLocationsFn from "../../lib/venues/getLocations";
import { Link } from "react-router-dom";
import styles from "../event/styles/eventsByCat29C.module.css";
import { ErrMsg } from "../global/errMsg";
export var ShowLocations = function () {
    var _a, _b, _c;
    var _d = useState(), resLocations = _d[0], setResLocations = _d[1];
    var _e = useState(""), errMsg = _e[0], setErrMsg = _e[1];
    useEffect(function () {
        getLocationsFn({ setErrMsg: setErrMsg }).then(function (res) {
            res && setResLocations(res);
        });
    }, []);
    var lagos = (_a = resLocations === null || resLocations === void 0 ? void 0 : resLocations.result.find(function (state) { return state.lagos; })) === null || _a === void 0 ? void 0 : _a.lagos;
    var ogun = (_b = resLocations === null || resLocations === void 0 ? void 0 : resLocations.result.find(function (state) { return state.ogun; })) === null || _b === void 0 ? void 0 : _b.ogun;
    var kano = (_c = resLocations === null || resLocations === void 0 ? void 0 : resLocations.result.find(function (state) { return state.kano; })) === null || _c === void 0 ? void 0 : _c.kano;
    return (_jsx("div", __assign({ className: styles.parent29C }, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: styles.linkArea }, { children: [_jsx("h2", { children: "Popular Event Centres Cities" }), " ", _jsx(Link, __assign({ to: "/event-centres/full-list" }, { children: "See more" }))] })), _jsxs("section", __assign({ className: styles.container29C }, { children: [_jsx(Link, __assign({ to: "/venues/q/lagos" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Lagos" }), _jsxs("p", { children: [lagos, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/q/ogun" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Ogun" }), _jsxs("p", { children: [ogun, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/q/kano" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Kano" }), _jsxs("p", { children: [kano, " venues"] })] }) }))] }))] })) })));
};
