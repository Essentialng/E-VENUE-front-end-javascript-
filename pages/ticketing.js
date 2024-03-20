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
import { GlamoreAd } from "../components/home/glamoreAd";
import { Upcoming } from "../components/home/upcoming";
import { Hero } from "../components/ticketing/hero";
import { SubHeading } from "../components/ticketing/subHeading";
import styles from "./styles/ticketingRRX.module.css";
var Ticketing = function () {
    return (_jsxs("article", __assign({ className: styles.containerRRX }, { children: [_jsxs("div", __assign({ className: styles.topContent }, { children: [_jsx(Hero, {}), _jsx("section", { children: _jsx(SubHeading, {}) }), _jsx("section", { children: _jsx(Upcoming, {}) })] })), _jsx("section", { children: _jsx(GlamoreAd, {}) })] })));
};
export default Ticketing;
