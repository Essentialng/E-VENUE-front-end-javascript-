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
import { CreateServiceForm } from "../components/eventServices/eServiceForm";
import styles from "./styles/createService0HN.module.css";
export var CreateService = function () {
    return (_jsx("article", __assign({ className: styles.container0HN }, { children: _jsx(CreateServiceForm, {}) })));
};
