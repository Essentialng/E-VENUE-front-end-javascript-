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
import getAdminEventCatFn from "../../lib/events/getAdminEventCount";
import styles from "../event/styles/eventsByCat29C.module.css";
import { ErrMsg } from "../global/errMsg";
export var ShowAdminEventsCategories = function () {
    var _a, _b, _c;
    var _d = useState(), resCategories = _d[0], setResCategories = _d[1];
    var _e = useState(""), errMsg = _e[0], setErrMsg = _e[1];
    useEffect(function () {
        getAdminEventCatFn({ setErrMsg: setErrMsg }).then(function (res) {
            res && setResCategories(res);
        });
    }, []);
    var meetings = (_a = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Meetings; })) === null || _a === void 0 ? void 0 : _a.Meetings;
    var training = (_b = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Training; })) === null || _b === void 0 ? void 0 : _b.Training;
    var conference = (_c = resCategories === null || resCategories === void 0 ? void 0 : resCategories.result.find(function (state) { return state.Conference; })) === null || _c === void 0 ? void 0 : _c.Conference;
    return (_jsx("div", __assign({ className: styles.parent29C }, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("h2", { children: "Popular Event Categories by eVenue" }), _jsx(Link, __assign({ to: "/event-centres/full-list" }, { children: "See more" }))] }), _jsxs("section", __assign({ className: styles.container29C }, { children: [_jsx(Link, __assign({ to: "/event/ev/meetings" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Meetings" }), _jsxs("p", { children: [meetings, " venues"] })] }) })), _jsx(Link, __assign({ to: "/event/ev/training" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Training" }), _jsxs("p", { children: [training, " venues"] })] }) })), _jsx(Link, __assign({ to: "/event/ev/conference" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Conference" }), _jsxs("p", { children: [conference, " venues"] })] }) }))] }))] })) })));
};
