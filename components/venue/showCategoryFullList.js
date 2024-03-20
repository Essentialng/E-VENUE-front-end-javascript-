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
export var ShowCategoriesFullList = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var _m = useState(), resCategories = _m[0], setResCategories = _m[1];
    var _o = useState(""), errMsg = _o[0], setErrMsg = _o[1];
    useEffect(function () {
        getCategoryFn({ setErrMsg: setErrMsg }).then(function (res) {
            res && setResCategories(res);
        });
    }, []);
    var meetings = (_a = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Meetings; })) === null || _a === void 0 ? void 0 : _a.Meetings;
    var shows = (_b = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Shows; })) === null || _b === void 0 ? void 0 : _b.Shows;
    var boardrooms = (_c = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Boardrooms; })) === null || _c === void 0 ? void 0 : _c.Boardrooms;
    var wedding = (_d = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Weddings; })) === null || _d === void 0 ? void 0 : _d.Weddings;
    var brand_promotion = (_e = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Brand_promotion; })) === null || _e === void 0 ? void 0 : _e.Brand_promotion;
    var class_reunion = (_f = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Class_reunion; })) === null || _f === void 0 ? void 0 : _f.Class_reunion;
    var pool_party = (_g = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Pool_party; })) === null || _g === void 0 ? void 0 : _g.Pool_party;
    var award_show = (_h = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Award_show; })) === null || _h === void 0 ? void 0 : _h.Award_show;
    var exhibition = (_j = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Exhibition; })) === null || _j === void 0 ? void 0 : _j.Exhibition;
    var bachelor_party = (_k = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Bachelor_party; })) === null || _k === void 0 ? void 0 : _k.Bachelor_party;
    var others = (_l = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Others; })) === null || _l === void 0 ? void 0 : _l.Others;
    return (_jsx("div", __assign({ className: styles.parent29C }, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Popular Event Centres Categories" }), _jsxs("section", __assign({ className: styles.container29C }, { children: [_jsx(Link, __assign({ to: "/venues/ci/meetings" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Meetings" }), _jsxs("p", { children: [meetings, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/shows" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Shows" }), _jsxs("p", { children: [shows, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/brand_promotion" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Brand promotion" }), _jsxs("p", { children: [brand_promotion, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/boardrooms" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Boardrooms" }), _jsxs("p", { children: [boardrooms, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/wedding" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Wedding" }), _jsxs("p", { children: [wedding, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/award_show" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Award Show" }), _jsxs("p", { children: [award_show, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/class_reunion" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Class Reunion" }), _jsxs("p", { children: [class_reunion, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/pool_party" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Pool Party" }), _jsxs("p", { children: [pool_party, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/exhibition" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Exhibition" }), _jsxs("p", { children: [exhibition, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/bachelor_party" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Bachelor Party" }), _jsxs("p", { children: [bachelor_party, " venues"] })] }) })), _jsx(Link, __assign({ to: "/venues/ci/others" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Others" }), _jsxs("p", { children: [others, " venues"] })] }) }))] }))] })) })));
};
