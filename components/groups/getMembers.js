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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import getMembersFn from "../../lib/groups/getMembers";
import { ErrMsg } from "../global/errMsg";
import styles from "./styles/getMembers403.module.css";
import { Link } from "react-router-dom";
export var GetMembers = function (_a) {
    var group_id = _a.group_id;
    var _b = useState(), resMembers = _b[0], setResMembers = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    useEffect(function () {
        try {
            getMembersFn({ group_id: group_id, setErrMsg: setErrMsg }).then(function (res) {
                setResMembers(res);
            });
        }
        catch (error) { }
    }, [group_id]);
    var content = resMembers === null || resMembers === void 0 ? void 0 : resMembers.result.map(function (member) { return (_jsxs("div", __assign({ className: styles.card }, { children: [_jsx("div", { children: _jsx("img", { src: member.img, alt: member.first_name + " " + member.last_name }) }), _jsx("div", { children: _jsx("h3", { children: member.first_name + " " + member.last_name }) }), _jsx("div", { children: _jsx(Link, __assign({ to: "/chat/".concat(member.id, "/").concat(member.first_name) }, { children: "message" })) })] }), member.id)); });
    return (_jsx("div", __assign({ className: styles.container403 }, { children: errMsg ? _jsx(ErrMsg, { errMsg: errMsg }) : content })));
};
