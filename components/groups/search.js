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
import styles from "./styles/search01Y.module.css";
export var Search = function (_a) {
    var setGroup_name = _a.setGroup_name, handleSearch = _a.handleSearch;
    return (_jsxs("form", __assign({ className: styles.form01Y, onSubmit: handleSearch }, { children: [_jsx("label", { htmlFor: "name" }), _jsx("input", { type: "text", placeholder: "Enter group name...", name: "group_name", onChange: function (e) { return setGroup_name(e.target.value); } }), _jsx("button", { children: "Search" })] })));
};
