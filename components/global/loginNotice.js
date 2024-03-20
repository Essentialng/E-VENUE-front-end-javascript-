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
import { Link, useLocation } from "react-router-dom";
export var LoginNotice = function () {
    var location = useLocation();
    return (_jsxs("p", { children: [_jsx(Link, __assign({ to: "/login", state: { from: location }, replace: true }, { children: "Login" })), " ", "to continue"] }));
};
