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
import getLimitedInfoForAllFn from "../../lib/eventsServices/getLimitedInfoForAll";
import LimitedInfoCard from "./limitedInfoCard";
import styles from "./styles/popularPhoto0G1.module.css";
// Todo: Use reusablilty to work on actions that occur when the buttons(btn1, etc) are clicked. Make the function call accept optional aguments
export var PopularPhotos = function () {
    var _a = useState(), eventServices = _a[0], setEventServices = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    useEffect(function () {
        getLimitedInfoForAllFn({
            setErrMsg: setErrMsg,
        })
            .then(function (res) {
            setEventServices(res);
            setErrMsg("");
        })
            .catch(function (err) { });
    }, []);
    // filiter the events with Photography/Videography category here
    var photographyContent = eventServices === null || eventServices === void 0 ? void 0 : eventServices.result.filter(function (event) { return event.category === "Photography/Videography"; }).map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.id)); });
    // filiter the events with Photography/Videography category here
    var makeUpContent = eventServices === null || eventServices === void 0 ? void 0 : eventServices.result.filter(function (event) { return event.category === "make_up_artise"; }).map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.id)); });
    // filiter the events with Photography/Videography category here
    var designersContent = eventServices === null || eventServices === void 0 ? void 0 : eventServices.result.filter(function (event) { return event.category === "designers"; }).map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.id)); });
    return (_jsxs("div", __assign({ className: styles.container0G1 }, { children: [_jsx("div", { className: styles.header }), errMsg ? (_jsx("p", { children: errMsg })) : (_jsxs(_Fragment, { children: [_jsxs("section", { children: [_jsx("h3", { children: "Popular Photography/Videographer" }), _jsx("div", { children: photographyContent })] }), _jsxs("section", { children: [_jsx("h3", { children: "Popular make up artist" }), _jsx("div", { children: makeUpContent })] }), _jsxs("section", { children: [_jsx("h3", { children: "Popular designers" }), _jsx("div", { children: designersContent })] })] }))] })));
};
