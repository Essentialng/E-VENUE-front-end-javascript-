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
import { Hero } from "../components/eventsShowcase/hero";
import { LatestEventsMedia } from "../components/eventsShowcase/latestEventsMedia";
import styles from "./styles/eventShowcaseGD4.module.css";
var EventShowcase = function () {
    return (_jsxs("article", __assign({ className: styles.containerGD4 }, { children: [_jsx(Hero, {}), _jsx("div", { children: _jsx("section", { children: _jsx(LatestEventsMedia, {}) }) })] })));
};
export default EventShowcase;
