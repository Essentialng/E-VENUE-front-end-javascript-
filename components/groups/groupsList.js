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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import getGroupsLFn from "../../lib/groups/res4GroupsList";
import { ErrMsg } from "../global/errMsg";
import { Card } from "./card";
export var GroupsList = function (_a) {
    var startNo = _a.startNo, endNo = _a.endNo;
    var _b = useState(), resGroups = _b[0], setResGroups = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    useEffect(function () {
        try {
            getGroupsLFn({ setErrMsg: setErrMsg }).then(function (res) {
                setResGroups(res);
            });
        }
        catch (error) { }
    }, []);
    var content;
    if (!startNo && !endNo) {
        content = resGroups === null || resGroups === void 0 ? void 0 : resGroups.result.map(function (group) { return (_jsx(Card, __assign({}, group), group.id)); });
    }
    else {
        content = resGroups === null || resGroups === void 0 ? void 0 : resGroups.result.slice(startNo, endNo).map(function (group) { return (_jsx(Card, __assign({}, group), group.id)); });
    }
    return _jsx(_Fragment, { children: errMsg ? _jsx(ErrMsg, { errMsg: errMsg }) : content });
};
