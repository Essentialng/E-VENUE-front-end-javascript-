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
import LimitedInfoCard from "./limitedInfoCard";
import { useEffect, useState } from "react";
import styles from "./styles/latestEventsMediaCZ2.module.css";
import { Link } from "react-router-dom";
import { ErrMsg } from "../global/errMsg";
import getLimitedInfoForAllFn from "../../lib/eventsShowcase/getAllLimitedInfo";
export var LatestEventsMedia = function () {
    var _a = useState(), events = _a[0], setEvents = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    useEffect(function () {
        getLimitedInfoForAllFn({ setErrMsg: setErrMsg })
            .then(function (res) {
            setEvents(res);
            setErrMsg("");
        })
            .catch(function (err) { });
    }, []);
    var content = events === null || events === void 0 ? void 0 : events.finalResult[0].slice(0, 20).map(function (venue) { return (_jsx(LimitedInfoCard, __assign({}, venue), venue.id)); });
    // problem of correct key attr here
    var total = events === null || events === void 0 ? void 0 : events.finalResult[1].map(function (total, index) { return (_jsx("span", { children: total.total }, index)); });
    return (_jsxs("div", __assign({ className: styles.containerCZ2 }, { children: [_jsxs("div", __assign({ className: styles.header }, { children: [_jsx("h1", { children: "Latest Events Media" }), content && content.length > 20 && (_jsxs(Link, __assign({ to: "" }, { children: ["View All (", total, ")"] }))), " "] })), errMsg ? (_jsx(_Fragment, { children: _jsx(ErrMsg, { errMsg: errMsg }) })) : (_jsx("div", __assign({ className: styles.contentArea }, { children: content })))] })));
};
