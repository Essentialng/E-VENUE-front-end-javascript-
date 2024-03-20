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
import styles from "./styles/sliderX1Y.module.css";
import { useState } from "react";
export var Slider = function (_a) {
    var content = _a.content;
    var _b = useState(0), currentSlide = _b[0], setCurrentSlide = _b[1];
    var numSlidesToShow = 3; // Number of slides to display
    var handleNextSlide = function () {
        setCurrentSlide((currentSlide + numSlidesToShow) % content.length);
    };
    var handlePrevSlide = function () {
        setCurrentSlide((currentSlide - numSlidesToShow + content.length) % content.length);
    };
    return (_jsxs("div", __assign({ className: styles.sliderX1Y }, { children: [_jsx("div", __assign({ className: styles.slides }, { children: content.slice(currentSlide, currentSlide + numSlidesToShow) })), _jsx("button", __assign({ onClick: handlePrevSlide }, { children: "\u276E" })), _jsx("button", __assign({ onClick: handleNextSlide }, { children: "\u276F" }))] })));
};
