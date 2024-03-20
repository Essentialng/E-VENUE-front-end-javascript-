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
import getLimitedInfoFn from "../../lib/events/getLimitedInfo";
import LimitedInfoCard from "../global/limitedInfoCard";
import { useEffect, useState } from "react";
import { Slider } from "../global/slider";
import styles from "./styles/upcomingLL2.module.css";
export var Upcoming = function () {
    var _a = useState(), events = _a[0], setEvents = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    useEffect(function () {
        getLimitedInfoFn({ locationIdentifier: undefined, setErrMsg: setErrMsg })
            .then(function (res) {
            setEvents(res);
            setErrMsg("");
        })
            .catch(function (err) { });
    }, []);
    var content = events === null || events === void 0 ? void 0 : events.result.slice(0, 6).map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.event_id)); });
    return (_jsxs("div", __assign({ className: styles.upcomingLL2 }, { children: [_jsxs("h1", { children: ["Upcoming Events in ", _jsx("span", { children: "Lagos" })] }), errMsg ? _jsx("p", { children: errMsg }) : _jsx(Slider, { content: content || [] })] })));
};
