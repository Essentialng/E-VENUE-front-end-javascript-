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
import styles from "./styles/glamoreAdW1V.module.css";
import { Link } from "react-router-dom";
export var GlamoreAd = function () {
    return (_jsxs("div", __assign({ className: styles.containerW1V }, { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/Rectangle 111.svg", alt: "party" }), _jsx(Link, __assign({ to: "/venues" }, { children: "View" })), " "] }), _jsxs("div", { children: [_jsx("img", { src: "/home/Rectangle 114.svg", alt: "party" }), _jsx(Link, __assign({ to: "/venues" }, { children: "View" })), " "] }), _jsxs("div", { children: [_jsx("img", { src: "/home/Rectangle 115.svg", alt: "party" }), _jsx(Link, __assign({ to: "/venues" }, { children: "View" })), " "] })] })));
};
