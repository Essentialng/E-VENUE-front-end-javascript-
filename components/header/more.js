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
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/moreSZR.module.css";
export var MoreContent = function () {
    var _a = useState(false), displayExtras = _a[0], setDisplayExtras = _a[1];
    function handleTrueDisplay(e) {
        e.preventDefault();
        setDisplayExtras(true);
    }
    function handleFalseDisplay(e) {
        e.preventDefault();
        setDisplayExtras(false);
    }
    return (_jsxs("div", __assign({ className: styles.containerSZR }, { children: [_jsx("button", __assign({ onMouseEnter: handleTrueDisplay, onMouseLeave: handleFalseDisplay }, { children: "More" })), displayExtras && (_jsxs("div", __assign({ className: styles.extraContentBox, onMouseEnter: handleTrueDisplay, onMouseLeave: handleFalseDisplay }, { children: [_jsx(Link, __assign({ to: "/short-videos" }, { children: "Short videos" })), " ", _jsx(Link, __assign({ to: "/groups" }, { children: "Groups" }))] })))] })));
};
