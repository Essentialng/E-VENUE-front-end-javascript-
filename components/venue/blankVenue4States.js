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
import { useEffect, useState } from "react";
import getAllVenuesFn from "../../lib/venues/getAll";
import { ErrMsg } from "../global/errMsg";
import LimitedInfoCard from "./limitedInfoCard";
import styles from "./styles/weddingVenuesDE7.module.css";
export var BlankVenue4States = function (_a) {
    var locationIdentifier = _a.locationIdentifier, title = _a.title;
    var _b = useState(), venues = _b[0], setVenues = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    useEffect(function () {
        getAllVenuesFn({ locationIdentifier: locationIdentifier, setErrMsg: setErrMsg })
            .then(function (res) {
            setVenues(res);
            setErrMsg("");
        })
            .catch(function (err) { });
    }, [locationIdentifier]);
    var content = venues === null || venues === void 0 ? void 0 : venues.finalResult[0].slice(0, 15).map(function (venue) { return (_jsx(LimitedInfoCard, __assign({}, venue), venue.id)); });
    return (_jsxs("div", __assign({ className: styles.containerDE7 }, { children: [_jsx("div", __assign({ className: styles.header }, { children: _jsx("h1", { children: title }) })), errMsg ? (_jsx(_Fragment, { children: _jsx(ErrMsg, { errMsg: errMsg }) })) : (_jsx("div", __assign({ className: styles.contentArea }, { children: content })))] })));
};
