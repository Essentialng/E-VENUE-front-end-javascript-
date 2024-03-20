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
import styles from "./styles/heroWZ5.module.css";
export var Hero = function () {
    return (_jsxs("div", __assign({ className: styles.containerWZ5 }, { children: [_jsx("div", __assign({ className: styles.imgBox }, { children: _jsxs("div", { children: [_jsx("h1", { children: "EVENT TICKETS" }), _jsx("p", { children: "Start a party" }), _jsx("p", { children: "Start a party" })] }) })), _jsxs("div", __assign({ className: styles.contentBox }, { children: [_jsx("p", { children: "Lorem ipsum dolor sit amet consectetur. Integer augue at vitae sed integer porttitor sed ultrices ornare." }), _jsx("hr", {}), _jsx("hr", {}), _jsx(Link, __assign({ to: "/create-event" }, { children: _jsx("h4", { children: "Get Started" }) })), " ", _jsx("hr", {})] }))] })));
};
