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
import { Link } from "react-router-dom";
import getCountByCatFn from "../../lib/eventsServices/getCountByCategory";
import styles from "../event/styles/eventsByCat29C.module.css";
import { ErrMsg } from "../global/errMsg";
export var EServiceCategory = function () {
    var _a, _b, _c;
    var _d = useState(), countByCat = _d[0], setCountByCat = _d[1];
    var _e = useState(""), errMsg = _e[0], setErrMsg = _e[1];
    useEffect(function () {
        try {
            getCountByCatFn({ setErrMsg: setErrMsg }).then(function (res) {
                res && setCountByCat(res);
            });
        }
        catch (error) { }
    }, []);
    var dj = (_a = countByCat === null || countByCat === void 0 ? void 0 : countByCat.result.find(function (count) { return count.dj; })) === null || _a === void 0 ? void 0 : _a.dj;
    var designersCount = (_b = countByCat === null || countByCat === void 0 ? void 0 : countByCat.result.find(function (count) { return count.total_designers; })) === null || _b === void 0 ? void 0 : _b.total_designers;
    var mkupartCount = (_c = countByCat === null || countByCat === void 0 ? void 0 : countByCat.result.find(function (count) { return count.total_make_up_artise; })) === null || _c === void 0 ? void 0 : _c.total_make_up_artise;
    return (_jsx("div", __assign({ className: styles.parent29C }, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("h2", { children: "Popular Event Services" }), _jsx(Link, __assign({ to: "/event-services/full-list" }, { children: "See more" }))] }), _jsxs("section", __assign({ className: styles.container29C }, { children: [_jsx(Link, __assign({ to: "/event-services/q/dj" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "DJ's" }), _jsxs("p", { children: [dj !== null && dj !== void 0 ? dj : 0, " professionals"] })] }) })), _jsx(Link, __assign({ to: "/event-services/q/designers" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Designers" }), _jsxs("p", { children: [designersCount, " ", (designersCount === null || designersCount === void 0 ? void 0 : designersCount.length) === 1
                                                ? "professional"
                                                : "professionals"] }), " "] }) })), _jsx(Link, __assign({ to: "/event-services/q/make_up_artise" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Make up Artise" }), _jsxs("p", { children: [mkupartCount, " professionals"] })] }) }))] }))] })) })));
};
