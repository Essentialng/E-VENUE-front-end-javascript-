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
import styles from "../venue/styles/limitedInfoCard71U.module.css";
import { Link } from "react-router-dom";
var LimitedInfoCard = function (props) {
    // display starIcon the number of times of props.rating
    var stars = [];
    for (var i = 0; i < Number(props.rating); i++) {
        stars.push(_jsx("img", { src: "/home/star.svg", alt: "star", className: styles.starIcon }, i));
    }
    return (_jsxs(Link, __assign({ to: "/event-services/".concat(props.id), className: styles.card71U }, { children: [_jsxs("div", { children: [_jsx("img", { src: props.first_img, alt: "venue" }), _jsx(_Fragment, { children: Number(props.verified) === 1 && _jsx("p", { children: "verified" }) })] }), _jsxs("div", { children: [_jsx("h4", { children: props.name.length > 30
                            ? props.name.slice(0, 30) + "..."
                            : props.name }), _jsxs("p", { children: [_jsx("img", { src: "/home/system-uicons_location.svg", alt: "location" }), " ", props.location.length > 30
                                ? props.location.slice(0, 30) + "..."
                                : props.location] })] }), Number(props.rating) > 0 && (_jsxs("div", __assign({ className: styles.ratingArea }, { children: [_jsx("div", { children: stars }), _jsxs("div", { children: [_jsx("div", { children: Math.round(Number(props.rating)) }), _jsxs("div", { children: ["(", props.total_raings_no, ")"] })] })] })))] })));
};
export default LimitedInfoCard;
