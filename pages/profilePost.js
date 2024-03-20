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
// import { useNavigation } from "react-router-dom";
import { ErrMsg } from "../components/global/errMsg";
import { ProfileNav } from "../components/profile/nav";
import { PostEvent } from "../components/profile/postEvent";
import { PostVenue } from "../components/profile/postVenue";
import stylesDetails from "../components/profile/styles/personalDetailsFY8.module.css";
import styles from "../components/profile/styles/profileMainJS4.module.css";
import stylesNav from "../components/profile/styles/profileNavZZZ.module.css";
import getProfileFn from "../lib/profile/getProfile";
export var ProfilePost = function () {
    var _a = useState(), profileRes = _a[0], setProfileRes = _a[1];
    var _b = useState(true), showProfile = _b[0], setShowProfile = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    // const navigate = useNavigation();
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
    // Replace with navigate
    if (!token) {
        window.location.href = "/login";
    }
    return (_jsx("div", __assign({ className: styles.containerJS4 }, { children: _jsxs("section", { children: [_jsx("nav", __assign({ className: stylesNav.containerZZZ }, { children: _jsx(ProfileNav, {}) })), errMsg ? (_jsx("div", __assign({ className: styles.errMsg }, { children: _jsx(ErrMsg, { errMsg: errMsg }) }))) : (profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.map(function (user) { return (_jsxs("article", { children: [_jsxs("section", __assign({ className: styles.header }, { children: [_jsx("div", { children: _jsx("h2", { children: "Post an Event" }) }), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: user.img, alt: "profile" }) }), _jsxs("div", { children: [_jsx("p", { children: user.first_name + " " + user.last_name }), _jsx("p", { children: user.email })] }), _jsx("div", { children: _jsx("img", { src: "/home/bell.svg", alt: "" }) })] })] })), showProfile ? (_jsx("section", __assign({ className: stylesDetails.containerFY8 }, { children: _jsx(PostEvent, { showProfile: showProfile, handleShowEdit: handleShowEdit, handleShowProfile: handleShowProfile, first_name: user.first_name }) }))) : (_jsx("section", __assign({ className: stylesDetails.containerFY8 }, { children: _jsx(PostVenue, { showProfile: showProfile, handleShowEdit: handleShowEdit, handleShowProfile: handleShowProfile, first_name: user.first_name }) })))] }, user.user_id)); }))] }) })));
};
