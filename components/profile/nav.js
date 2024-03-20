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
import { NavLink } from "react-router-dom";
// attempt to change the styling based on NavLink
export var ProfileNav = function () {
    var _a = useState(new Date()), currentDate = _a[0], setCurrentDate = _a[1];
    useEffect(function () {
        var interval = setInterval(function () {
            setCurrentDate(new Date());
        }, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    var formattedDate = "".concat(String(currentDate.getDate()).padStart(2, "0"), "/").concat(String(currentDate.getMonth() + 1).padStart(2, "0"), "/").concat(String(currentDate.getFullYear()).slice(-2));
    return (_jsxs(_Fragment, { children: [_jsxs("span", { children: [_jsx("h4", { children: "Algorithm" }), " ", _jsx("p", { children: formattedDate })] }), _jsxs("div", { children: [_jsxs(NavLink, __assign({ to: "/profile" }, { children: [_jsx("img", { src: "/home/ic_round-dashboard.svg", alt: "dashboard" }), "Dashboard"] })), _jsxs(NavLink, __assign({ to: "/profile/post" }, { children: [_jsx("img", { src: "/home/healthicons_person.svg", alt: "dashboard" }), "Post"] })), _jsxs(NavLink, __assign({ to: "/profile/my-listings" }, { children: [_jsx("img", { src: "/home/material-symbols_box-add-outline.svg", alt: "dashboard" }), "My Listings"] })), _jsxs(NavLink, __assign({ to: "/profile/media" }, { children: [_jsx("img", { src: "/home/icon-park-outline_add-pic.svg", alt: "dashboard" }), "Media"] }))] })] }));
};
