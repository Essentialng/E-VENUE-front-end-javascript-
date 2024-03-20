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
import styles from "./styles/limitedInfoCard71U.module.css";
import { Link } from "react-router-dom";
var LimitedInfoCard = function (props) {
    var guestSingluarOrPlural = props.no_of_guest === 1 ? "guest" : "guests";
    // display starIcon the number of times of props.rating
    var stars = [];
    for (var i = 0; i < props.rating; i++) {
        stars.push(_jsx("img", { src: "/home/star.svg", alt: "star", className: styles.starIcon }, i));
    }
    return (_jsxs(Link, __assign({ to: "/venues/".concat(props.id), className: styles.card71U }, { children: [_jsx("img", { src: props.first_img, alt: "venue" }), _jsxs("div", { children: [_jsx("h4", { children: props.title.length > 30
                            ? props.title.slice(0, 30) + "..."
                            : props.title }), _jsxs("p", { children: [_jsx("img", { src: "/home/system-uicons_location.svg", alt: "location" }), " ", props.location.length > 30
                                ? props.location.slice(0, 30) + "..."
                                : props.location] })] }), props.rating > 0 ? (_jsxs("div", __assign({ className: "".concat(styles.ratingArea) }, { children: [_jsx("div", { children: stars }), _jsxs("div", { children: [_jsx("div", { children: Math.round(props.rating) }), _jsx("div", { children: " (100)" })] })] }))) : (_jsx("div", { children: _jsx("p", { children: "No Rating" }) })), _jsx("div", { children: _jsx("div", { children: _jsx("p", { children: props.no_of_guest === 0 || props.no_of_guest === undefined
                            ? "Invite Only"
                            : "Up to ".concat(props.no_of_guest.toLocaleString(), " ").concat(guestSingluarOrPlural) }) }) })] })));
};
export default LimitedInfoCard;
