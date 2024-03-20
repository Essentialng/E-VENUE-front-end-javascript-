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
import LimitedInfoCard from "./limitedInfoCard";
import { useEffect, useState } from "react";
import styles from "./styles/weddingVenuesDE7.module.css";
import getAllVenuesFn from "../../lib/venues/getAll";
import { Link } from "react-router-dom";
import { ErrMsg } from "../global/errMsg";
export var BlankVenue = function (_a) {
    var identifierValue = _a.identifierValue, title = _a.title;
    var _b = useState(), venues = _b[0], setVenues = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    useEffect(function () {
        getAllVenuesFn({ categoryIdentifier: identifierValue, setErrMsg: setErrMsg })
            .then(function (res) {
            setVenues(res);
            setErrMsg("");
        })
            .catch(function (err) { });
    }, [identifierValue]);
    var content = venues === null || venues === void 0 ? void 0 : venues.finalResult[0].slice(0, 6).map(function (venue) { return (_jsx(LimitedInfoCard, __assign({}, venue), venue.id)); });
    // problem of correct key attr here
    var total = venues === null || venues === void 0 ? void 0 : venues.finalResult[1].map(function (total, index) { return (_jsx("span", { children: total.total }, index)); });
    return (_jsxs("div", __assign({ className: styles.containerDE7 }, { children: [_jsxs("div", __assign({ className: styles.header }, { children: [_jsx("h1", { children: title }), content && content.length > 6 && (_jsxs(Link, __assign({ to: "" }, { children: ["View All (", total, ")"] }))), " "] })), errMsg ? (_jsx(_Fragment, { children: _jsx(ErrMsg, { errMsg: errMsg }) })) : (_jsx("div", __assign({ className: styles.contentArea }, { children: content })))] })));
};
