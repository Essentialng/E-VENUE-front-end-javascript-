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
import { useParams } from "react-router-dom";
import getLimitedInfoByAdminFn from "../../lib/events/getLimitedInfoByAdmin";
import LimitedInfoCard from "../global/limitedInfoCard";
import styles from "../home/styles/upcomingLL2.module.css";
export var ViewByAdminEventCategory = function () {
    var category_identifier = useParams().category_identifier;
    console.log({ category_identifier: category_identifier });
    if (!category_identifier) {
        throw new Error("pass category view");
    }
    // capitalize title
    var title = category_identifier.charAt(0).toUpperCase() + category_identifier.slice(1);
    var _a = useState(), events = _a[0], setEvents = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    useEffect(function () {
        getLimitedInfoByAdminFn({ category: category_identifier, setErrMsg: setErrMsg })
            .then(function (res) {
            setEvents(res);
            setErrMsg("");
        })
            .catch(function (err) { });
    }, []);
    var content = events === null || events === void 0 ? void 0 : events.result.slice(0, 6).map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.event_id)); });
    return (_jsxs("div", __assign({ className: styles.upcomingLL2 }, { children: [_jsxs("h1", { children: ["Upcoming Events in ", _jsx("span", { children: "Lagos" })] }), errMsg ? (_jsx("p", { children: errMsg })) : (_jsx("div", __assign({ style: { display: "flex", flexWrap: "wrap" } }, { children: content })))] })));
};
