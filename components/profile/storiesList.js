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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import getStoriesFn from "../../lib/story/getLimitedInfo";
import { ErrMsg } from "../global/errMsg";
import { VideoCard } from "../global/videoCard";
import styles from "../../pages/styles/shortVideosOPC.module.css";
export var StoriesList = function () {
    var _a = useState(), vidsRes = _a[0], setVidsRes = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    useEffect(function () {
        try {
            getStoriesFn({ setErrMsg: setErrMsg }).then(function (res) {
                setVidsRes(res);
            });
        }
        catch (error) { }
    }, []);
    var vidsResContent = vidsRes === null || vidsRes === void 0 ? void 0 : vidsRes.result.map(function (vid) { return (_jsx(VideoCard, __assign({}, vid, { src: vid.id }), vid.id)); });
    return (_jsx(_Fragment, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsx("div", __assign({ className: styles.containerOPC }, { children: _jsx("div", __assign({ className: styles.vidsArea }, { children: vidsResContent })) }))) }));
};
