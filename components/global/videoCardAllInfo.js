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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { VideoCard } from "./videoCard";
import styles from "./styles/videoCardEFM.module.css";
import { formatTimestampDiff } from "./formatTimeDiff";
import { Share } from "./share";
import { useState } from "react";
import { AddCommentForm } from "../shortVideos/addCommentForm";
import addLikeFn from "../../lib/shortVideos/addLike";
import { InlineErrMsg } from "./inlineErrMsg";
import { InlineSuccessMsg } from "./inllineSuccessMsg";
import unLikeFn from "../../lib/shortVideos/unLike";
export var VideoCardAllInfo = function (props) {
    var _a = useState(true), hideShare = _a[0], setHideShare = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    var _c = useState(""), successMsg = _c[0], setSuccessMsg = _c[1];
    var _d = useState(props["user_has_liked"] ? 1 : 0), likeState = _d[0], setLikeState = _d[1];
    if ("first_name" in props) {
        return (_jsxs("div", __assign({ className: styles.cardEFM }, { children: [_jsx("div", { children: _jsx(VideoCard, __assign({}, props)) }), _jsx("div", __assign({ className: styles.cardInfo }, { children: _jsxs("section", { children: [_jsxs("div", { children: [_jsx("div", __assign({ className: styles.userImgBox }, { children: _jsx("img", { src: props.img, alt: "".concat(props.first_name, " ").concat(props.last_name) }) })), _jsx("div", { children: _jsxs("h3", { children: [props.first_name, " ", props.last_name] }) })] }), _jsx("div", { children: _jsx("div", { children: _jsx("img", { src: "/home/download_icon.svg", alt: "download", onClick: function () {
                                            var videoUrl = props.video;
                                            fetch(videoUrl)
                                                .then(function (response) { return response.blob(); })
                                                .then(function (blob) {
                                                var url = URL.createObjectURL(blob);
                                                var a = document.createElement("a");
                                                a.href = url;
                                                a.download = "".concat(props.first_name, " ").concat(props.last_name, ".mp4"); // Change the filename as needed
                                                a.click();
                                                URL.revokeObjectURL(url);
                                            });
                                        }, className: styles.actionIcon }) }) })] }) })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg }), successMsg && _jsx(InlineSuccessMsg, { successMsg: successMsg })] })));
    }
    else {
        var handleLikeToggle = function () { return __awaiter(void 0, void 0, void 0, function () {
            var newLikeState, response, newLikeState_1, error_1, newLikeState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        newLikeState = likeState === 1 ? 0 : 1;
                        setLikeState(newLikeState);
                        return [4 /*yield*/, (newLikeState === 1 ? addLikeFn : unLikeFn)({
                                video_id: props.id,
                                setErrMsg: setErrMsg,
                            })];
                    case 1:
                        response = _a.sent();
                        if (response === null || response === void 0 ? void 0 : response.message.includes("success")) {
                            setSuccessMsg(response.message);
                        }
                        else {
                            newLikeState_1 = likeState === 1 ? 0 : 1;
                            setLikeState(newLikeState_1); // Revert UI on failure
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        newLikeState = likeState === 1 ? 0 : 1;
                        setLikeState(newLikeState);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return (_jsxs("div", __assign({ className: styles.cardEFM }, { children: [_jsx("div", { children: _jsx(VideoCard, __assign({}, props)) }), _jsxs("div", __assign({ className: styles.cardInfo }, { children: [_jsxs("section", { children: [_jsxs("div", { children: [_jsx("div", __assign({ className: styles.userImgBox }, { children: _jsx("img", { src: props.video_user_img, alt: "".concat(props.video_user_first_name, " ").concat(props.video_user_last_name) }) })), _jsx("div", { children: _jsxs("h3", { children: [props.video_user_first_name, " ", props.video_user_last_name] }) }), _jsx("div", { children: _jsx("p", { children: formatTimestampDiff(props.posted_on) }) })] }), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: "/home/download_icon.svg", alt: "download", onClick: function () {
                                                    var videoUrl = props.video;
                                                    fetch(videoUrl)
                                                        .then(function (response) { return response.blob(); })
                                                        .then(function (blob) {
                                                        var url = URL.createObjectURL(blob);
                                                        var a = document.createElement("a");
                                                        a.href = url;
                                                        a.download = "".concat(props.video_user_first_name, " ").concat(props.video_user_last_name, ".mp4"); // Change the filename as needed
                                                        a.click();
                                                        URL.revokeObjectURL(url);
                                                    });
                                                }, className: styles.actionIcon }) }), _jsx("div", { children: _jsx("img", { src: "/home/share.svg", alt: "share", onClick: function () { return setHideShare(function (prev) { return !prev; }); }, className: styles.actionIcon }) }), _jsxs("div", __assign({ onClick: handleLikeToggle }, { children: [likeState ? (_jsx("img", { src: "/home/likeRed.svg", alt: "like", className: styles.actionIcon })) : (_jsx("img", { src: "/home/black-outline_like.svg", alt: "unlike", className: styles.actionIcon })), _jsx("p", { children: props.likes })] })), !hideShare && (_jsx(Share, { uRL: "http://localhost:3000/short-videos/".concat(props.id), title: "".concat(props.video_user_first_name, " ").concat(props.video_user_last_name, " short video"), hashtag: "#evenueShortVideo", summary: props.description.slice(0, 100), source: "https://evenue.com" }))] }), _jsx("div", { children: _jsxs("p", { children: [_jsxs("span", { children: [props.video_user_first_name, " ", props.video_user_last_name, ":"] }), " ", props.description] }) }), _jsx("section", { children: _jsx(AddCommentForm, { video_id: props.id }) })] }), props.comments && (_jsx("section", { children: props.comments.slice(0, 4).map(function (comment) { return (_jsxs("div", { children: [_jsxs("div", __assign({ className: styles.commentatorInfo }, { children: [_jsx("div", { children: comment.commentator_img && (_jsx("img", { src: comment.commentator_img, alt: "".concat(comment.commentator_username) })) }), _jsx("div", { children: _jsx("p", { children: comment.commentator_username }) }), _jsx("div", { children: comment.created_at && (_jsx("p", { children: formatTimestampDiff(comment.created_at) })) })] })), _jsx("div", { children: _jsx("p", { children: comment.comment }) })] }, comment.comment_id)); }) }))] })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg }), successMsg && _jsx(InlineSuccessMsg, { successMsg: successMsg })] })));
    }
};
