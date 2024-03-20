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
import { Card } from "../components/event/card";
import { useState, useEffect } from "react";
import getEventFn from "../lib/events/getEvent";
import { ErrMsg } from "../components/global/errMsg";
import { GroupSuggestions } from "../components/groups/suggestions";
export var DynamicEvent = function () {
    var event_id = useParams().event_id;
    var _a = useState(), res = _a[0], setres = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    // convert event_id to number
    var eventId = Number(event_id);
    if (!eventId) {
        throw new Error("Missing event_id");
    }
    useEffect(function () {
        try {
            getEventFn({ event_id: eventId, setErrMsg: setErrMsg }).then(function (res) {
                res && setres(res);
            });
        }
        catch (error) { }
    }, [eventId]);
    var cardContent = res === null || res === void 0 ? void 0 : res.result.map(function (event) { return (_jsx(Card, __assign({}, event), event.event_id)); });
    return (_jsx("div", { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [cardContent, _jsx(GroupSuggestions, {})] })) }));
};
