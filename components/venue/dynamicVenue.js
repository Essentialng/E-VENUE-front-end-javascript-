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
import { useParams } from "react-router-dom";
import { Card } from "./card";
import { useState, useEffect } from "react";
import getVenueFn from "../../lib/venues/getVenue";
import { ErrMsg } from "../global/errMsg";
import { GroupSuggestions } from "../groups/suggestions";
export var DynamicVenue = function () {
    var venue_id = useParams().venue_id;
    var _a = useState(), res = _a[0], setres = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    // convert venue_id to number
    var venueId = Number(venue_id);
    if (!venueId) {
        throw new Error("Missing venue_id");
    }
    useEffect(function () {
        try {
            getVenueFn({ venue_id: venueId, setErrMsg: setErrMsg }).then(function (res) {
                res && setres(res);
            });
        }
        catch (error) { }
    }, [venueId]);
    var cardContent = res === null || res === void 0 ? void 0 : res.result.map(function (venue) { return (_jsx(Card, __assign({}, venue), venue.id)); });
    return (_jsx("div", { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [cardContent, _jsx(GroupSuggestions, {})] })) }));
};
