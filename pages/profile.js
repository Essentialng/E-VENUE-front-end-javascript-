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
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrMsg } from "../components/global/errMsg";
import { ProfileNav } from "../components/profile/nav";
import { PersonalDetails } from "../components/profile/personalDetails";
import stylesDetails from "../components/profile/styles/personalDetailsFY8.module.css";
import styles from "../components/profile/styles/profileMainJS4.module.css";
import stylesNav from "../components/profile/styles/profileNavZZZ.module.css";
import getProfileFn from "../lib/profile/getProfile";
import { ProfileEdit } from "./profileEdit";
export var Profile = function () {
    var _a = useState(), profileRes = _a[0], setProfileRes = _a[1];
    var _b = useState(true), showProfile = _b[0], setShowProfile = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    var navigate = useNavigate();
    useEffect(function () {
        try {
            getProfileFn({ setErrMsg: setErrMsg }).then(function (res) {
                res && setProfileRes(res);
            });
        }
        catch (error) { }
    }, []);
    function handleShowEdit(e) {
        e.preventDefault();
        setShowProfile(false);
    }
    function handleShowProfile(e) {
        e.preventDefault();
        setShowProfile(true);
    }
    var token = Cookies.get("token");
    if (!token) {
        navigate("/login");
    }
    return (_jsx("div", __assign({ className: styles.containerJS4 }, { children: _jsxs("section", { children: [_jsx("nav", __assign({ className: stylesNav.containerZZZ }, { children: _jsx(ProfileNav, {}) })), errMsg ? (_jsx("div", __assign({ className: styles.errMsg }, { children: _jsx(ErrMsg, { errMsg: errMsg }) }))) : (profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.map(function (user) {
                    var _a, _b;
                    return (_jsxs("article", { children: [_jsxs("section", __assign({ className: styles.header }, { children: [_jsxs("div", { children: [_jsxs("h2", { children: ["Hello, ", user.first_name] }), _jsxs("p", { children: ["Joined ", user.month.slice(0, 3), ".", user.year] })] }), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: user.img, alt: "profile" }) }), _jsxs("div", { children: [_jsx("p", { children: user.first_name + " " + user.last_name }), _jsx("p", { children: user.email })] }), _jsx("div", { children: _jsx("img", { src: "/home/bell.svg", alt: "" }) })] })] })), showProfile ? (_jsx("section", __assign({ className: stylesDetails.containerFY8 }, { children: _jsx(PersonalDetails, { showProfile: showProfile, handleShowEdit: handleShowEdit, handleShowProfile: handleShowProfile, first_name: user.first_name, last_name: user.last_name, phone_number: (_a = user.phone_number) !== null && _a !== void 0 ? _a : "", country_code: (_b = user.country_code) !== null && _b !== void 0 ? _b : "234", email: user.email }) }))) : (_jsx("section", __assign({ className: stylesDetails.containerFY8 }, { children: _jsx(ProfileEdit, { showProfile: showProfile, handleShowEdit: handleShowEdit, handleShowProfile: handleShowProfile }) })))] }, user.user_id));
                }))] }) })));
};
