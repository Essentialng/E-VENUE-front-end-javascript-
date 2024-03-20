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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import LimitedInfoCard from "../global/limitedInfoCard";
import { useEffect, useState } from "react";
import styles from "../venue/styles/weddingVenuesDE7.module.css";
// import { Link } from "react-router-dom";
import { ErrMsg } from "../global/errMsg";
import getLimitedInfoFn from "../../lib/events/getLimitedInfo";
import { useParams } from "react-router-dom";
export var ViewByCategory = function () {
    var _a = useState(), events = _a[0], setEvents = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    var category_view = useParams().category_view;
    console.log({ category_view: category_view });
    useEffect(function () {
        getLimitedInfoFn({ categoryIdentifier: category_view, setErrMsg: setErrMsg })
            .then(function (res) {
            setEvents(res);
            setErrMsg("");
        })
            .catch(function (err) { });
    }, []);
    var content = events === null || events === void 0 ? void 0 : events.result.map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.event_id)); });
    // problem of correct key attr here
    //   const total = venues?.finalResult[1].map((total, index) => (
    //     <span key={index}>{total.total}</span>
    //   ));
    return (_jsxs("div", __assign({ className: styles.containerDE7, style: { padding: "2rem" } }, { children: [_jsx("div", { className: styles.header }), errMsg ? (_jsx(_Fragment, { children: _jsx(ErrMsg, { errMsg: errMsg }) })) : (_jsx("div", __assign({ className: styles.contentArea }, { children: content })))] })));
};
