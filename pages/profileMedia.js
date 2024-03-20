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
import stylesMediaArea from "./styles/mediaAreaJNC.module.css";
import styles from "../components/profile/styles/profileMainJS4.module.css";
import stylesNav from "../components/profile/styles/profileNavZZZ.module.css";
import stylesStories from "./styles/storiesListBBD.module.css";
import getProfileFn from "../lib/profile/getProfile";
import { useNavigate } from "react-router-dom";
import { StoryUploadForm } from "../components/profile/storyUploadForm";
import { StoriesList } from "../components/profile/storiesList";
export var ProfileMedia = function () {
    var _a, _b, _c;
    var _d = useState(), profileRes = _d[0], setProfileRes = _d[1];
    var _e = useState(false), showUpload = _e[0], setShowUpload = _e[1];
    var _f = useState(""), errMsg = _f[0], setErrMsg = _f[1];
    var navigate = useNavigate();
    useEffect(function () {
        try {
            getProfileFn({ setErrMsg: setErrMsg }).then(function (res) {
                res && setProfileRes(res);
            });
        }
        catch (error) { }
    }, []);
    var token = Cookies.get("token");
    if (!token) {
        navigate("/login");
    }
    var userImg = (_a = profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.find(function (user) { return user.img; })) === null || _a === void 0 ? void 0 : _a.img;
    // console.log({ userImg });
    var userFirstName = (_b = profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.find(function (user) { return user.first_name; })) === null || _b === void 0 ? void 0 : _b.first_name;
    var userLastName = (_c = profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.find(function (user) { return user.last_name; })) === null || _c === void 0 ? void 0 : _c.last_name;
    return (_jsxs("div", __assign({ className: styles.containerJS4 }, { children: [_jsxs("section", { children: [_jsx("nav", __assign({ className: stylesNav.containerZZZ }, { children: _jsx(ProfileNav, {}) })), errMsg ? (_jsx("div", __assign({ className: styles.errMsg }, { children: _jsx(ErrMsg, { errMsg: errMsg }) }))) : (profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.map(function (user) { return (_jsxs("article", { children: [_jsxs("section", __assign({ className: styles.header }, { children: [_jsxs("div", { children: [_jsxs("h2", { children: ["Hello, ", user.first_name] }), _jsxs("p", { children: ["Joined ", user.month.slice(0, 3), ".", user.year] })] }), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: user.img, alt: "profile" }) }), _jsxs("div", { children: [_jsx("p", { children: user.first_name + " " + user.last_name }), _jsx("p", { children: user.email })] }), _jsx("div", { children: _jsx("img", { src: "/home/bell.svg", alt: "" }) })] })] })), _jsxs("section", __assign({ className: stylesMediaArea.containerJNC }, { children: [_jsxs("div", { children: [_jsx("div", { children: _jsx("button", __assign({ onClick: function () { return setShowUpload(true); } }, { children: _jsx("img", { src: "/home/zondicons_add-outline.svg", alt: "plus" }) })) }), _jsx("div", { children: "What's going on today?" })] }), _jsx("div", { children: _jsx("p", { children: "Add Story" }) })] })), _jsx("section", __assign({ className: stylesStories.containerBBD }, { children: _jsx(StoriesList, {}) }))] }, user.user_id)); }))] }), showUpload && (_jsx(StoryUploadForm, { userImg: userImg, userFirstName: userFirstName, userLastName: userLastName, setShowUpload: setShowUpload }))] })));
};
