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
import { useParams } from "react-router-dom";
import { Card } from "../components/event/card";
import { ErrMsg } from "../components/global/errMsg";
import { GroupSuggestions } from "../components/groups/suggestions";
import getEServiceFUInfoFn from "../lib/eventsShowcase/getFUInfo";
import styles from "./styles/dynamicEServiceNF3.module.css";
import { AddReview } from "../components/event/addReview";
export var DynamicServiceProvides = function () {
    var eservice_id = useParams().eservice_id;
    var _a = useState(), resSProvider = _a[0], setResSProvider = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    if (!eservice_id) {
        throw new Error("Missing event_id");
    }
    useEffect(function () {
        try {
            getEServiceFUInfoFn({ sProvider_id: eservice_id, setErrMsg: setErrMsg }).then(function (res) {
                res && setResSProvider(res);
            });
        }
        catch (error) { }
    }, [eservice_id]);
    var cardContent = resSProvider === null || resSProvider === void 0 ? void 0 : resSProvider.result.map(function (eSerive) { return (_jsx(Card, __assign({}, eSerive), eSerive.id)); });
    var userHasReviewed = resSProvider === null || resSProvider === void 0 ? void 0 : resSProvider.result[0].user_has_reviewed;
    return (_jsx("div", __assign({ className: styles.containerNF3 }, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsxs(_Fragment, { children: [cardContent, _jsx("div", { children: !userHasReviewed && _jsx(AddReview, { eservice_id: eservice_id }) }), _jsx(GroupSuggestions, {})] })) })));
};
