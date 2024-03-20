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
import getCategoryFn from "../../lib/venues/getCategoryFn";
import styles from "../event/styles/eventsByCat29C.module.css";
import { ErrMsg } from "../global/errMsg";
export var ShowCategories = function () {
    var _a, _b, _c;
    var _d = useState(), resCategories = _d[0], setResCategories = _d[1];
    var _e = useState(""), errMsg = _e[0], setErrMsg = _e[1];
    useEffect(function () {
        getCategoryFn({ setErrMsg: setErrMsg }).then(function (res) {
            res && setResCategories(res);
        });
    }, []);
    var meetings = (_a = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Meetings; })) === null || _a === void 0 ? void 0 : _a.Meetings;
    var shows = (_b = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Shows; })) === null || _b === void 0 ? void 0 : _b.Shows;
    var others = (_c = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Others; })) === null || _c === void 0 ? void 0 : _c.Others;
    return (_jsx("div", __assign({ className: styles.parent29C }, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("h2", { children: "Popular Event Centres Categories" }), _jsx(Link, __assign({ to: "/centres-categories/full-list" }, { children: "See more" }))] }), _jsxs("section", __assign({ className: styles.container29C }, { children: [_jsx(Link, __assign({ to: "/venues/ci/meetings" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Meetings" }), _jsxs("p", { children: [meetings, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/shows" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Shows" }), _jsxs("p", { children: [shows, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/others" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Others" }), _jsxs("p", { children: [others, " venues"] })] }) }))] }))] })) })));
};
