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
import { GroupsList } from "./groupsList";
import styles from "./styles/suggestions34D.module.css";
export var GroupSuggestions = function () {
    return (_jsxs("div", __assign({ className: styles.container34D }, { children: [_jsx("h3", { children: "Groups you may like" }), _jsx("div", { children: _jsx(GroupsList, { startNo: 0, endNo: 6 }) })] })));
};
