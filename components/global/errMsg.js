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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles/errMsg.module.css";
import { Link } from "react-router-dom";
export var ErrMsg = function (_a) {
    var errMsg = _a.errMsg;
    return (_jsxs("div", __assign({ className: styles.errMsgAE3 }, { children: [_jsxs("p", { children: [errMsg, "."] }), _jsxs("p", { children: ["Go ", _jsx(Link, __assign({ to: "/" }, { children: "home" }))] })] })));
};
