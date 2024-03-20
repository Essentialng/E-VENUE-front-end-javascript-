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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import getShortVideosFn from "../lib/shortVideos/getLimitedInfo";
import { VideoCard } from "../components/global/videoCard";
import styles from "./styles/shortVideosOPC.module.css";
import { ErrMsg } from "../components/global/errMsg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LoginNotice } from "../components/global/loginNotice";
export var ShortVideos = function () {
    var _a = useState(), vidsRes = _a[0], setVidsRes = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    var _c = useState(false), showLoginErr = _c[0], setShowLoginErr = _c[1];
    var token = Cookies.get("token");
    var navigate = useNavigate();
    useEffect(function () {
        try {
            getShortVideosFn({ setErrMsg: setErrMsg }).then(function (res) {
                setVidsRes(res);
            });
        }
        catch (error) { }
    }, []);
    var vidsResContent = vidsRes === null || vidsRes === void 0 ? void 0 : vidsRes.result.map(function (vid) { return (_jsx(VideoCard, __assign({}, vid), vid.id)); });
    function handleNavigate2PostVideo() {
        if (!token) {
            console.log("login needed");
            setShowLoginErr(true);
            setTimeout(function () {
                setShowLoginErr(false);
            }, 10000);
            return;
        }
        else {
            navigate("/upload-short-videos");
        }
    }
    return (_jsx(_Fragment, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs("div", __assign({ className: styles.containerOPC }, { children: [_jsxs("div", { children: [_jsx("button", __assign({ onClick: handleNavigate2PostVideo }, { children: "Post video" })), showLoginErr && _jsx(LoginNotice, {})] }), _jsx("div", __assign({ className: styles.vidsArea }, { children: vidsResContent }))] }))) }));
};
