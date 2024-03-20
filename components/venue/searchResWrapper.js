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
import { jsx as _jsx } from "react/jsx-runtime";
import LimitedInfoCard from "./limitedInfoCard";
import styles from "./styles/searchResWrapper2PA.module.css";
export var SearchResWrapper = function (props) {
    return (_jsx("div", __assign({ className: styles.container2PA }, { children: _jsx(LimitedInfoCard, __assign({}, props), props.id) })));
};
