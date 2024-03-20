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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import addPostLikeFn from "../../lib/groups/addLike";
import unlikePostFn from "../../lib/groups/unlike";
import { InlineErrMsg } from "../global/inlineErrMsg";
import { InlineSuccessMsg } from "../global/inllineSuccessMsg";
import { Share } from "../global/share";
import styles from "./styles/postCTAsKLZ.module.css";
export var PostCTAs = function (_a) {
    var userLiked = _a.userLiked, views = _a.views, group_id = _a.group_id, first_name = _a.first_name, last_name = _a.last_name, about = _a.about, group_post_id = _a.post_id;
    var _b = useState(true), hideShare = _b[0], setHideShare = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    var _d = useState(""), successMsg = _d[0], setSuccessMsg = _d[1];
    var _e = useState(userLiked ? 1 : 0), likeState = _e[0], setLikeState = _e[1];
    var handleLikeToggle = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newLikeState, response, newLikeState_1, error_1, newLikeState;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newLikeState = likeState === 1 ? 0 : 1;
                    setLikeState(newLikeState);
                    return [4 /*yield*/, (newLikeState === 1
                            ? addPostLikeFn
                            : unlikePostFn)({ group_post_id: group_post_id, setErrMsg: setErrMsg })];
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: styles.containerKLZ }, { children: [_jsx("div", { children: _jsxs("span", __assign({ onClick: handleLikeToggle }, { children: [likeState ? (_jsx("img", { src: "/home/likeRed.svg", alt: "red like" })) : (_jsx("img", { src: "/home/bx_like.svg", alt: "unlike" })), _jsx("p", { children: likeState ? "Unlike" : "Like" })] })) }), _jsxs("div", { children: [_jsx("img", { src: "/home/commentIcon.svg", alt: "comment" }), _jsx("p", { children: "Comment" })] }), _jsxs("div", __assign({ onClick: function () { return setHideShare(function (prev) { return !prev; }); } }, { children: [_jsx("img", { src: "/home/share.svg", alt: "share" }), _jsx("p", { children: "Share" })] })), !hideShare && (_jsx(Share, { uRL: "http://localhost:4192/api/v1/groups/".concat(group_id), title: "".concat(first_name, " ").concat(last_name, " short video"), hashtag: "#evenueShortVideo", summary: about.slice(0, 100), source: "https://evenue.com" })), _jsx("div", { children: _jsx("p", { children: views === 1 ? views + " view" : views + " views" }) })] })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg }), successMsg && _jsx(InlineSuccessMsg, { successMsg: successMsg })] }));
};
