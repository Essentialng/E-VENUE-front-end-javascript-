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
import { Link } from "react-router-dom";
import styles from "./styles/subHeadingOO2.module.css";
export var SubHeading = function () {
    return (_jsxs("div", __assign({ className: styles.containerOO2 }, { children: [_jsxs("div", { children: [_jsx("h4", { children: "Start an Event and Get Tickets for them" }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur. Integer augue at vitae sed integer porttitor sed ultrices ornare." }), _jsx(Link, __assign({ to: "/create-event" }, { children: "Create an Event" })), " "] }), _jsx("div", { children: _jsx("img", { src: "/home/Rectangle 198.svg", alt: "create event" }) })] })));
};
