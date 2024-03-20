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
import stylesDetails from "../../components/profile/styles/personalDetailsFY8.module.css";
import { CreateEventForm } from "../event/createEventForm";
export var PostEvent = function (_a) {
    var showProfile = _a.showProfile, handleShowEdit = _a.handleShowEdit, handleShowProfile = _a.handleShowProfile, first_name = _a.first_name;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("button", __assign({ onClick: handleShowProfile, className: showProfile ? stylesDetails.active : stylesDetails.nonActive }, { children: "Event" })), _jsx("button", __assign({ onClick: handleShowEdit, className: !showProfile ? stylesDetails.active : stylesDetails.nonActive }, { children: "Venue" }))] }), _jsx("div", { children: _jsx(CreateEventForm, { first_name: first_name }) })] }));
};
