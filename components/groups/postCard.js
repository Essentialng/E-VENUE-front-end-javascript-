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
import updatePostViewsFn from "../../lib/groups/updatePostViews";
import { formatTimestampDiff } from "../global/formatTimeDiff";
import { PostCTAs } from "./postCTAs";
import styles from "./styles/postCard835.module.css";
import { AddCommentForm } from "./addCommentForm";
export var PostCard = function (props) {
    var group_post_id = props.group_post_id;
    var _a = useState(null), timerId = _a[0], setTimerId = _a[1];
    function handleMouseEnter() {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            var _this = this;
            return __generator(this, function (_a) {
                id = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, updatePostViewsFn({ group_post_id: group_post_id })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 5000);
                console.log("call made");
                // Store the timer ID in state
                setTimerId(id);
                return [2 /*return*/];
            });
        });
    }
    function handleMouseLeave() {
        // If the mouse leaves before 5 seconds, clear the timer
        if (timerId !== null) {
            clearTimeout(timerId);
            console.log("call cancelled");
            // Reset the timer ID
            setTimerId(null);
        }
    }
    // Ensure unique comments before rendering
    var uniqueCommentsSet = new Set(props.post_comments.map(function (comment) { return comment.comment_id; }));
    var uniqueCommentIds = Array.from(uniqueCommentsSet); // Convert Set to array for iteration
    var filteredComments = uniqueCommentIds.map(function (commentId) {
        return props.post_comments.find(function (comment) { return comment.comment_id === commentId; });
    });
    return (_jsxs("div", __assign({ className: styles.card835, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, { children: [_jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: props.owner_img, alt: props.owner_firstname + " " + props.owner_lastname, className: styles.img }) }), _jsxs("div", { children: [_jsxs("h4", { children: [props.owner_firstname, " ", props.owner_lastname] }), _jsx("p", { children: formatTimestampDiff(props.created_at) }), props.imgs && (_jsx("section", __assign({ className: styles.postImgsArea }, { children: _jsxs("div", { children: [_jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: props.imgs.split(",")[0], alt: "star", className: styles.starIcon }) }), props.imgs.split(",")[1] && (_jsx("div", { children: _jsx("img", { src: props.imgs.split(",")[1], alt: "star", className: styles.starIcon }) }))] }), props.imgs.split(",")[2] && (_jsx("div", { children: _jsx("div", { children: _jsx("img", { src: props.imgs.split(",")[2], alt: "star", className: styles.starIcon }) }) }))] }) }))), _jsx("p", { children: props.post })] })] }), _jsx("hr", {}), _jsx("div", __assign({ className: styles.postCTAs }, { children: _jsx(PostCTAs, { userLiked: props.user_liked, views: props.views, group_id: props.group_id, first_name: props.owner_firstname, last_name: props.owner_lastname, about: props.post, post_id: props.id }) })), _jsx("hr", {}), _jsxs("section", __assign({ className: styles.postCommentsArea }, { children: [_jsx("div", { children: filteredComments.length > 1 && _jsx("p", { children: "view more comments" }) }), _jsx("div", { children: filteredComments.map(function (comment) {
                            var _a;
                            return (comment === null || comment === void 0 ? void 0 : comment.comment) && (_jsxs("div", __assign({ className: styles.comment }, { children: [comment.commentator_img && (_jsx("div", { children: _jsx("img", { src: comment.commentator_img, alt: (_a = comment.commentator_first_name) !== null && _a !== void 0 ? _a : "User" }) })), _jsxs("div", __assign({ className: styles.commentDetails }, { children: [_jsxs("h5", { children: [comment.commentator_first_name, " ", comment.commentator_last_name] }), comment.created_at && (_jsx("p", { children: formatTimestampDiff(comment.created_at) })), _jsx("p", __assign({ className: styles.commentBody }, { children: comment.comment }))] }))] }), comment.comment_id));
                        }) })] })), _jsx(_Fragment, { children: _jsx(AddCommentForm, { group_post_id: props.group_post_id }) })] })));
};
