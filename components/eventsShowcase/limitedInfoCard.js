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
import styles from "./styles/limitedInfoCardX38.module.css";
var LimitedInfoCard = function (props) {
    return (_jsxs("div", __assign({ className: styles.cardX38 }, { children: [_jsx("div", { children: _jsx("img", { src: props.first_img, alt: "venue" }) }), _jsxs("section", { children: [_jsx("div", { children: _jsx("h4", { children: props.name.length > 30
                                ? props.name.slice(0, 30) + "..."
                                : props.name }) }), _jsx("div", { children: _jsx("p", { children: props.intro }) }), _jsxs("span", { children: [_jsx(Link, __assign({ to: "/events/".concat(props.id) }, { children: _jsx("i", { children: "View Media" }) })), " "] })] })] })));
};
export default LimitedInfoCard;
