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
import { useNavigate, useParams } from "react-router-dom";
import { ErrMsg } from "../components/global/errMsg";
import { VideoCardAllInfo } from "../components/global/videoCardAllInfo";
import getShortVideosAllFn from "../lib/shortVideos/getAllInfo";
import styles from "./styles/shortVideosOPC.module.css";
export var DynamicShortVideos = function () {
    var _a = useState(), vidsRes = _a[0], setVidsRes = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    var navigate = useNavigate();
    var video_id = useParams().video_id;
    if (!video_id) {
        navigate("/");
        throw new Error("Missing video_id");
    }
    useEffect(function () {
        try {
            getShortVideosAllFn({ video_id: video_id, setErrMsg: setErrMsg }).then(function (res) {
                setVidsRes(res);
            });
        }
        catch (error) { }
    }, [video_id]);
    var vidsResContent = vidsRes === null || vidsRes === void 0 ? void 0 : vidsRes.result.map(function (vid) { return (_jsx(VideoCardAllInfo, __assign({}, vid, { bigPage: true }), vid.id)); });
    return (_jsx(_Fragment, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsx("div", __assign({ className: styles.containerOPC }, { children: vidsResContent }))) }));
};
