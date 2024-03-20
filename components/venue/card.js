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
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { useState } from "react";
import styles from "../event/styles/card.module.css";
import { Share } from "../global/share";
import { PopUp } from "../payment/popUp";
export var Card = function (props) {
    var _a;
    var _b = useState(false), showShare = _b[0], setShowShare = _b[1];
    var _c = useState(false), showPayment = _c[0], setShowPayment = _c[1];
    var handleShowShare = function () {
        setShowShare(function (prev) { return !prev; });
    };
    var togglePayment = function () {
        setShowPayment(function (prev) { return !prev; });
    };
    var sanitizedContent = DOMPurify.sanitize(props.description, {
        ALLOWED_TAGS: ["p", "strong", "u", "br"],
        USE_PROFILES: {
            html: true,
        },
    });
    // check if props.opening_hours is an array
    var hasOpeningHours = Array.isArray(props.opening_hours);
    return (_jsxs("div", __assign({ className: styles.card0OV }, { children: [showPayment && (_jsx(PopUp, { name: props.title, price: props.starting_price, email: props.vEmail, setShowPayment: setShowPayment })), _jsx("div", __assign({ className: styles.imgDetailsArea }, { children: _jsxs("section", __assign({ className: styles.imgsArea }, { children: [_jsx("div", { children: props.imgs.split(",")[0] && (_jsx("img", { src: props.imgs.split(",")[0], alt: "Photo of " + props.title })) }), _jsxs("div", { children: [props.imgs.split(",")[1] && (_jsx("img", { src: props.imgs.split(",")[1], alt: "Photo of " + props.title })), props.imgs.split(",")[2] && (_jsx("img", { src: props.imgs.split(",")[2], alt: "Photo of " + props.title })), props.imgs.split(",")[3] && (_jsx("img", { src: props.imgs.split(",")[3], alt: "Photo of " + props.title })), props.imgs.split(",")[4] && (_jsx("img", { src: props.imgs.split(",")[4], alt: "Photo of " + props.title }))] })] })) })), _jsxs("section", __assign({ className: styles.cTAArea }, { children: [_jsx("button", __assign({ onClick: togglePayment, className: styles.cTA }, { children: "Book venue" })), " ", _jsxs("button", __assign({ onClick: handleShowShare }, { children: [_jsx("img", { src: "/home/material-symbols_share.svg", alt: "share icon" }), "share"] })), showShare && (_jsx(Share, { uRL: "http://localhost:3000/venue/".concat(props.id), title: props.title, hashtag: "#".concat(props.title.split(" ").join("_")), summary: props.description.slice(0, 40) + "...", source: "https://evenue.com" }))] })), _jsx("section", {}), _jsx("h3", { children: "Description" }), _jsx("section", { children: parse(sanitizedContent) }), _jsxs("section", __assign({ className: styles.venueDetailsAreas }, { children: [hasOpeningHours && (_jsxs("div", { children: [_jsx("h3", { children: "Opening hours" }), (_a = props.opening_hours) === null || _a === void 0 ? void 0 : _a.map(function (day) { return (_jsxs("div", __assign({ className: styles.openingHours }, { children: [day.MONDAY_OPEN &&
                                        day.MONDAY_OPEN.substring(0, 5) !== "00:00" &&
                                        day.MONDAY_CLOSE &&
                                        day.MONDAY_CLOSE.substring(0, 5) !== "00:00" && (_jsxs("div", { children: [_jsx("div", { children: "Mon" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.MONDAY_OPEN.slice(0, 5), " -", " ", day.MONDAY_CLOSE.slice(0, 5)] }) })] })), day.TUESDAY_OPEN &&
                                        day.TUESDAY_OPEN.substring(0, 5) !== "00:00" &&
                                        day.TUESDAY_CLOSE &&
                                        day.TUESDAY_CLOSE.substring(0, 5) !== "00:00" && (_jsxs("div", { children: [_jsx("div", { children: "Tue" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.TUESDAY_OPEN.slice(0, 5), " -", " ", day.TUESDAY_CLOSE.slice(0, 5)] }) })] })), day.WEDNESDAY_OPEN &&
                                        day.WEDNESDAY_OPEN.substring(0, 5) !== "00:00" &&
                                        day.WEDNESDAY_CLOSE &&
                                        day.WEDNESDAY_CLOSE.substring(0, 5) !== "00:00" && (_jsxs("div", { children: [_jsx("div", { children: "Wed" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.WEDNESDAY_OPEN.slice(0, 5), " -", " ", day.WEDNESDAY_CLOSE.slice(0, 5)] }) })] })), day.THURSDAY_OPEN &&
                                        day.THURSDAY_OPEN.substring(0, 5) !== "00:00" &&
                                        day.THURSDAY_CLOSE &&
                                        day.THURSDAY_CLOSE.substring(0, 5) !== "00:00" && (_jsxs("div", { children: [_jsx("div", { children: "Thu" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.THURSDAY_OPEN.slice(0, 5), " -", " ", day.THURSDAY_CLOSE.slice(0, 5)] }) })] })), day.FRIDAY_OPEN &&
                                        day.FRIDAY_OPEN.substring(0, 5) !== "00:00" &&
                                        day.FRIDAY_CLOSE &&
                                        day.FRIDAY_CLOSE.substring(0, 5) !== "00:00" && (_jsxs("div", { children: [_jsx("div", { children: "Fri" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.FRIDAY_OPEN.slice(0, 5), " -", " ", day.FRIDAY_CLOSE.slice(0, 5)] }) })] })), day.SATURDAY_OPEN &&
                                        day.SATURDAY_OPEN.substring(0, 5) !== "00:00" &&
                                        day.SATURDAY_CLOSE &&
                                        day.SATURDAY_CLOSE.substring(0, 5) !== "00:00" && (_jsxs("div", { children: [_jsx("div", { children: "Sat" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.SATURDAY_OPEN.slice(0, 5), " -", " ", day.SATURDAY_CLOSE.slice(0, 5)] }) })] })), day.SUNDAY_OPEN &&
                                        day.SUNDAY_OPEN.substring(0, 5) !== "00:00" &&
                                        day.SUNDAY_CLOSE &&
                                        day.SUNDAY_CLOSE.substring(0, 5) !== "00:00" && (_jsxs("div", { children: [_jsx("div", { children: "Sun" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.SUNDAY_OPEN.slice(0, 5), " -", " ", day.SUNDAY_CLOSE.slice(0, 5)] }) })] }))] }), day.hours_id)); })] })), _jsxs("div", __assign({ className: styles.venueDetails }, { children: [_jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Venue Type" }), _jsx("th", { children: "Seating" }), _jsx("th", { children: "Starting Price" })] }) }), _jsx("tbody", { children: _jsxs("tr", { children: [_jsx("td", { children: props.venue_type }), _jsx("td", { children: props.seating.toLocaleString() }), _jsx("td", { children: props.starting_price.toLocaleString() })] }) })] }), _jsxs("div", { children: [_jsx("h4", { children: "Contact Info" }), _jsxs("p", { children: [_jsx("img", { src: "/home/basil_location-outline.svg", alt: "location" }), props.location] }), _jsxs("p", { children: [_jsx("img", { src: "/home/ic_round-mail.svg", alt: "email" }), props.vEmail] }), _jsxs("p", { children: [_jsx("img", { src: "/home/gg_phone.svg", alt: "phone" }), props.vPhone] })] })] }))] })), props.imgs.split(",")[1] && (_jsxs(_Fragment, { children: [_jsx("h3", { children: "More Photos" }), _jsxs("section", __assign({ className: styles.imgsArea2 }, { children: [_jsx("div", { children: props.imgs.split(",")[0] && (_jsx("img", { src: props.imgs.split(",")[0], alt: "Photo of " + props.title })) }), _jsx("div", { children: props.imgs.split(",")[1] && (_jsx("img", { src: props.imgs.split(",")[1], alt: "Photo of " + props.title })) }), _jsx("div", { children: props.imgs.split(",")[2] && (_jsx("img", { src: props.imgs.split(",")[2], alt: "Photo of " + props.title })) }), _jsx("div", { children: props.imgs.split(",")[3] && (_jsx("img", { src: props.imgs.split(",")[3], alt: "Photo of " + props.title })) }), _jsx("div", { children: props.imgs.split(",")[4] && (_jsx("img", { src: props.imgs.split(",")[4], alt: "Photo of " + props.title })) })] }))] }))] })));
};
