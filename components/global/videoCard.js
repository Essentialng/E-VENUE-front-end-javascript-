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
import { Link } from "react-router-dom";
import styles from "./styles/videoCardFBE.module.css";
import increaseViewFn from "../../lib/shortVideos/increaseView";
export var VideoCard = function (props) {
    if (props.bigPage) {
        return (_jsxs("div", __assign({ className: "".concat(styles.videoCardFBE, " ").concat(styles.bigPage) }, { children: [_jsxs("video", __assign({ controls: true }, { children: [_jsx("source", { src: props.video, type: "video/webm" }), _jsx("source", { src: props.video, type: "video/mp4" }), _jsxs("p", { children: ["Your browser doesn't support HTML video. Here is a", _jsx("a", __assign({ href: props.video, download: props.video }, { children: "link to the video" })), " ", "instead."] })] })), _jsxs("div", { children: [_jsxs("p", { children: [_jsx("img", { src: "/home/icon-park-outline_like.svg", alt: "like" }), props.likes.toLocaleString()] }), _jsxs("p", { children: [props.views.toLocaleString(), " ", props.views === 1 ? "view" : "views", " "] })] })] })));
    }
    else {
        return (_jsxs(Link, __assign({ to: props.src ? "/stories/".concat(props.id) : "/short-videos/".concat(props.id), className: styles.videoCardFBE, onClick: function () { return increaseViewFn({ video_id: props.id }); } }, { children: [_jsxs("video", __assign({ controls: true }, { children: [_jsx("source", { src: props.video, type: "video/webm" }), _jsx("source", { src: props.video, type: "video/mp4" })] })), _jsxs("div", { children: [_jsxs("p", { children: [_jsx("img", { src: "/home/icon-park-outline_like.svg", alt: "like" }), props.likes.toLocaleString()] }), _jsxs("p", { children: [props.views.toLocaleString(), " ", props.views === 1 ? "view" : "views", " "] })] })] })));
    }
};
