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
import { useParams } from "react-router-dom";
import getServiceReviewsFn from "../lib/eventsServices/getReviews";
import { ErrMsg } from "../components/global/errMsg";
import styles from "./styles/dynamicReview48O.module.css";
export var DynamicReviews = function () {
    var _a = useState(), res4Reviews = _a[0], setRes4Reviews = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    var _c = useParams(), service_id = _c.service_id, business_name = _c.business_name;
    if (!service_id) {
        throw new Error("Missing service_id");
    }
    useEffect(function () {
        getServiceReviewsFn({ sProvider_id: service_id, setErrMsg: setErrMsg }).then(function (res) {
            res && setRes4Reviews(res);
        });
    }, [service_id]);
    var reviews = res4Reviews === null || res4Reviews === void 0 ? void 0 : res4Reviews.finalResult[0].map(function (r) { return (_jsxs("div", __assign({ className: styles.container480 }, { children: [_jsx("img", { src: r.reviewer_img, alt: "".concat(r.reviewer_first_name, " ").concat(r.reviewer_last_name), className: "dp_img" }), _jsxs("div", { children: [_jsxs("h4", { children: [r.reviewer_first_name, " ", r.reviewer_last_name] }), _jsx("p", { children: r.review })] })] }), r.id)); });
    var reviewsTotal = res4Reviews === null || res4Reviews === void 0 ? void 0 : res4Reviews.finalResult[1].map(function (t) { return (_jsx("span", { children: t.total })); });
    return (_jsx(_Fragment, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs("div", __assign({ className: styles.parent480 }, { children: [_jsxs("h1", { children: [business_name, " Reviews (", reviewsTotal, ")"] }), reviews] }))) }));
};
