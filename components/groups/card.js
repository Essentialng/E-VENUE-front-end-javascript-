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
import { Link } from "react-router-dom";
import styles from "./styles/cardFDS.module.css";
export var Card = function (props) {
    return (_jsxs("div", __assign({ className: styles.cardFDS }, { children: [_jsx("div", { children: _jsx("img", { src: props.logo, alt: props.name }) }), _jsx("div", { children: _jsx("h3", { children: props.name.length > 20
                        ? props.name.slice(0, 20) + "..."
                        : props.name }) }), _jsxs("div", { children: [_jsxs("p", { children: [props.member_total > 1
                                ? props.member_total + " Members"
                                : props.member_total + " Member", " "] }), _jsxs("p", { children: [props.total_post_last_24_hrs === 1
                                ? props.total_post_last_24_hrs + " post"
                                : props.total_post_last_24_hrs + " posts", " ", "today"] })] }), _jsx("div", { children: _jsx(Link, __assign({ to: "/groups/".concat(props.id) }, { children: "View" })) })] })));
};
