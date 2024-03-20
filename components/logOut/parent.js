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
import { useEffect, useState } from "react";
import { LogOut } from "./logOut";
import getProfileFn from "../../lib/profile/getProfile";
import { ErrMsg } from "../global/errMsg";
import styles from "./styles/parentXJ2.module.css";
export var Parent = function (_a) {
    var setTokenState = _a.setTokenState;
    var _b = useState(), profileRes = _b[0], setProfileRes = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    // API call to get firstname
    useEffect(function () {
        try {
            getProfileFn({ setErrMsg: setErrMsg }).then(function (res) {
                res && setProfileRes(res);
            });
        }
        catch (error) { }
    }, []);
    // get first_name from profileRes
    var firstName = profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.filter(function (item) { return item.first_name; });
    return (_jsxs("div", __assign({ className: styles.containerXJ2 }, { children: [_jsx(LogOut, { firstName: (firstName === null || firstName === void 0 ? void 0 : firstName[0].first_name) || "", setTokenState: setTokenState }), errMsg && _jsx(ErrMsg, { errMsg: errMsg })] })));
};
