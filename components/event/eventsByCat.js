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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import getCountByCatFn from "../../lib/events/getCountByCat";
import { Link } from "react-router-dom";
import styles from "./styles/eventsByCat29C.module.css";
export var EventsByCat = function () {
    var _a, _b, _c, _d, _e;
    var _f = useState(), res4EventsByCat = _f[0], setRes4EventsByCat = _f[1];
    var _g = useState(""), errMsg = _g[0], setErrMsg = _g[1];
    useEffect(function () {
        try {
            getCountByCatFn({ setErrMsg: setErrMsg }).then(function (res) {
                res && setRes4EventsByCat(res);
            });
        }
        catch (error) { }
    }, []);
    // content
    var totalTraining = (_a = res4EventsByCat === null || res4EventsByCat === void 0 ? void 0 : res4EventsByCat.result.find(function (event) { return event.total_training; })) === null || _a === void 0 ? void 0 : _a.total_training;
    var totalCooperation = (_b = res4EventsByCat === null || res4EventsByCat === void 0 ? void 0 : res4EventsByCat.result.find(function (event) { return event.total_cooperation; })) === null || _b === void 0 ? void 0 : _b.total_cooperation;
    var total_meetings = (_c = res4EventsByCat === null || res4EventsByCat === void 0 ? void 0 : res4EventsByCat.result.find(function (event) { return event.total_meetings; })) === null || _c === void 0 ? void 0 : _c.total_meetings;
    var totalEngagement = (_d = res4EventsByCat === null || res4EventsByCat === void 0 ? void 0 : res4EventsByCat.result.find(function (event) { return event.total_engagement; })) === null || _d === void 0 ? void 0 : _d.total_engagement;
    var totalParty = (_e = res4EventsByCat === null || res4EventsByCat === void 0 ? void 0 : res4EventsByCat.result.find(function (event) { return event.total_party; })) === null || _e === void 0 ? void 0 : _e.total_party;
    return (_jsxs("div", __assign({ className: styles.container29C }, { children: [_jsx(Link, __assign({ to: "/events/q/training" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Training" }), _jsxs("p", { children: [totalTraining, " events"] })] }) })), _jsx(Link, __assign({ to: "/events/q/cooperation" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Cooperation" }), _jsxs("p", { children: [totalCooperation, " events"] })] }) })), _jsx(Link, __assign({ to: "/events/q/meetings" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Meetings" }), _jsxs("p", { children: [total_meetings, " events"] })] }) })), _jsx(Link, __assign({ to: "/events/q/engagement" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Engagements" }), _jsxs("p", { children: [totalEngagement, " events"] })] }) })), _jsx(Link, __assign({ to: "/events/q/party" }, { children: _jsxs("div", { children: [_jsx("h3", { children: "Parties" }), _jsxs("p", { children: [totalParty, " events"] })] }) }))] })));
};
