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
import getAllStoryFn from "../../lib/story/getAll";
import { InlineErrMsg } from "../global/inlineErrMsg";
import styles from "./style/inlineStoriesCE4.module.css";
export var InlineStories = function () {
    var _a = useState(), vidsRes = _a[0], setVidsRes = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    useEffect(function () {
        try {
            getAllStoryFn({ setErrMsg: setErrMsg }).then(function (res) {
                setVidsRes(res);
            });
        }
        catch (error) { }
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: styles.containerCE4 }, { children: vidsRes === null || vidsRes === void 0 ? void 0 : vidsRes.result.map(function (vid) { return (_jsxs(Link, __assign({ to: "/stories/".concat(vid.id) }, { children: [_jsx("img", { src: vid.img, alt: "story" }), _jsxs("p", { children: [vid.first_name, " ", vid.last_name] })] }), vid.id)); }) })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg })] }));
};
