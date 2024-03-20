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
import styles from "./styles/venueAd8GN.module.css";
import { Link } from "react-router-dom";
// props have commas for the purpose of split.
export var VenueOrEventAd = function (_a) {
    var props = _a.props, body = _a.body, toAttr = _a.toAttr;
    var start = props.split(",")[0];
    var firstSpan = props.split(",")[1];
    var secondSpan = props.split(",")[2];
    var middleBody = props.split(",")[3];
    var end = props.split(",")[4];
    return (_jsxs("div", __assign({ className: styles.container8GN }, { children: [_jsxs("div", __assign({ className: styles.venueAd8GN }, { children: [_jsxs("h4", { children: [start, " ", _jsx("span", { children: firstSpan }), " ", _jsx("span", { children: secondSpan }), " ", middleBody, end && _jsx("span", { children: end })] }), _jsx("p", { children: body })] })), _jsx(Link, __assign({ to: "/".concat(toAttr) }, { children: toAttr.slice(0)[0].toUpperCase() + toAttr.slice(1) })), " "] })));
};
