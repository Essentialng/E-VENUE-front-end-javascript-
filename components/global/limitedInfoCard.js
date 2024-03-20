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
import styles from "./styles/limitedInfoCard0Po.module.css";
import { formatDate, formatTime } from "./formatDate";
import { Link } from "react-router-dom";
var LimitedInfoCard = function (props) {
    return (_jsxs("div", __assign({ className: styles.card0Po }, { children: [_jsx("img", { src: props.first_img, alt: "event" }), _jsxs("div", { children: [_jsx("h4", { children: props.name.length > 30
                            ? props.name.slice(0, 30) + "..."
                            : props.name }), _jsxs("p", { children: [_jsx("img", { src: "/home/system-uicons_location.svg", alt: "location" }), " ", props.location.length > 30
                                ? props.location.slice(0, 30) + "..."
                                : props.location] }), _jsxs("div", { children: [_jsx("p", { children: formatDate(props.start_date_and_time.toString()) }), _jsx("p", { children: formatTime(props.start_date_and_time.toString()) })] })] }), _jsx("div", { children: _jsxs("div", { children: [_jsx("p", { children: props.price === 0 || props.price === undefined
                                ? "Free"
                                : "\u20A6".concat(props.price.toLocaleString()) }), _jsx(Link, __assign({ to: "/events/".concat(props.event_id) }, { children: "View" })), " "] }) })] })));
};
export default LimitedInfoCard;
