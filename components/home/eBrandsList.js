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
import styles from "./styles/eBrands.module.css";
// array with eBrands images
var eBrands = [
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
    "/home/Rectangle 111.svg",
    "/home/Rectangle 114.svg",
];
// create a div for each image
export var EBrandsList = function () {
    var eBrandsList = eBrands.map(function (eBrand, index) { return (_jsx("div", __assign({ className: "".concat(styles.card, " ").concat(styles.slide, " ") }, { children: _jsx("div", __assign({ className: styles.slide_track }, { children: _jsx("img", { src: eBrand, alt: "eBrand-".concat(index) }) })) }), index)); });
    return (_jsxs("div", __assign({ className: styles.containerHJ0 }, { children: [_jsx("h5", { children: "List of essential Group Brands" }), _jsx("div", __assign({ className: styles.list }, { children: eBrandsList })), ";", _jsxs("p", { children: ["The world is going ", _jsx("span", { children: "e" }), " so are we", " "] })] })));
};
