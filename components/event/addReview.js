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
import { useState } from "react";
import addReviewFn from "../../lib/eventsServices/addReview";
import { InlineSuccessMsg } from "../global/inllineSuccessMsg";
import { InlineErrMsg } from "../global/inlineErrMsg";
import styles from "./styles/addReviewXCB.module.css";
export var AddReview = function (_a) {
    var eservice_id = _a.eservice_id;
    var _b = useState(""), rating = _b[0], setRating = _b[1];
    var _c = useState(""), review = _c[0], setReview = _c[1];
    var _d = useState(""), errMsg = _d[0], setErrMsg = _d[1];
    var _e = useState(""), successMsg = _e[0], setSuccessMsg = _e[1];
    function handleSubmit(e) {
        e.preventDefault();
        try {
            addReviewFn({
                event_service_id: eservice_id,
                rating: rating,
                review: review,
                setErrMsg: setErrMsg,
            }).then(function (res) {
                if (res && res.message.includes("success")) {
                    setSuccessMsg(res.message);
                    setReview("");
                }
            });
        }
        catch (error) { }
    }
    return (_jsxs(_Fragment, { children: [_jsxs("form", __assign({ onSubmit: handleSubmit, className: styles.containerXCB }, { children: [_jsx("label", __assign({ htmlFor: "rating" }, { children: "Rating" })), _jsxs("select", __assign({ name: "rating", id: "rating", onChange: function (e) { return setRating(e.target.value); }, required: true, "aria-required": true }, { children: [_jsx("option", __assign({ value: "1" }, { children: "1" })), _jsx("option", __assign({ value: "2" }, { children: "2" })), _jsx("option", __assign({ value: "3" }, { children: "3" })), _jsx("option", __assign({ value: "4" }, { children: "4" })), _jsx("option", __assign({ value: "5" }, { children: "5" }))] })), _jsx("label", __assign({ htmlFor: "review" }, { children: "Post review" })), _jsx("input", { type: "text", onChange: function (e) { return setReview(e.target.value); }, name: "review", value: review, required: true, "aria-required": true }), _jsx("button", { children: "Post" })] })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg }), successMsg && _jsx(InlineSuccessMsg, { successMsg: successMsg })] }));
};
