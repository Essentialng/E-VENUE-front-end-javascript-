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
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatDate, formatTime } from "../global/formatDate";
import { formatTimestampDiff } from "../global/formatTimeDiff";
import { LoginNotice } from "../global/loginNotice";
import { Share } from "../global/share";
import { PopUp } from "../payment/popUp";
import styles from "./styles/card.module.css";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
// Note: class 'oESFI' is only for OneEventServiceFUInfo type
export var Card = function (props) {
    var _a;
    var _b = useState(false), showShare = _b[0], setShowShare = _b[1];
    var _c = useState(false), showPayment = _c[0], setShowPayment = _c[1];
    var _d = useState(false), showLoginErr = _d[0], setShowLoginErr = _d[1];
    var navigate = useNavigate();
    var handleShowShare = function () {
        setShowShare(function (prev) { return !prev; });
    };
    var togglePayment = function () {
        setShowPayment(function (prev) { return !prev; });
    };
    if ("bio" in props) {
        var token_1 = Cookies.get("token");
        var hasOpeningHours = Array.isArray(props.opening_hours);
        var handleMsg = function () {
            if (!token_1) {
                console.log("login needed");
                setShowLoginErr(true);
                setTimeout(function () {
                    setShowLoginErr(false);
                }, 10000);
                return;
            }
            else {
                navigate("/chat/".concat(props.id, "/").concat(props.name));
            }
        };
        return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: "".concat(styles.card0OV, " ").concat(styles.oESFI) }, { children: [_jsxs("div", __assign({ className: styles.imgDetailsArea }, { children: [_jsx("section", __assign({ className: styles.imgsArea }, { children: _jsx("div", { children: props.imgs.split(",")[0] && (_jsx("img", { src: props.imgs.split(",")[0], alt: "Photo of " + props.name })) }) })), _jsxs("section", { children: [_jsxs("div", { children: [_jsxs("div", { children: [_jsx("h1", { children: props.name }), _jsx("h2", { children: props.profession }), _jsxs("p", { children: [_jsx("img", { src: "/home/location_filled.svg", alt: "location" }), " ", props.location] }), _jsxs("p", { children: [_jsx("img", { src: "/home/mail_filled.svg", alt: "mail" }), " ", props.email] }), _jsxs("p", { children: [_jsx("img", { src: "/home/phone_filled.svg", alt: "phone" }), " ", props.phone_number] })] }), " ", _jsx("div", { children: props.verified && _jsx("p", { children: "\u2705 Verified " }) })] }), _jsxs("div", { children: [_jsx("div", { children: _jsx("h4", { children: "Experience" }) }), _jsxs("div", { children: [_jsx("p", { children: "Over" }), " ", _jsx("p", { children: formatTimestampDiff(props.experience_duration).includes("y")
                                                            ? formatTimestampDiff(props.experience_duration).replace("y", " years")
                                                            : formatTimestampDiff(props.experience_duration).replace("m", " minutes")
                                                                ? formatTimestampDiff(props.experience_duration).replace("d", " days")
                                                                : formatTimestampDiff(props.experience_duration).replace("w", " weeks")
                                                                    ? formatTimestampDiff(props.experience_duration).replace("h", " hours")
                                                                    : "" })] })] }), _jsx("div", __assign({ className: styles.reviewLink }, { children: _jsx(Link, __assign({ to: "/reviews/".concat(props.id, "/").concat(props.name) }, { children: "Reviews" })) })), _jsx("div", __assign({ className: styles.cTAArea }, { children: _jsx(Share, { uRL: "http://localhost:3000/event/".concat(props.id), title: props.name, hashtag: "#".concat(props.name.split(" ").join("_")), summary: props.name + " " + props.profession, source: "https://evenue.com" }) })), _jsxs("section", __assign({ className: styles.cTAArea }, { children: [_jsx("button", __assign({ className: styles.cTA, onClick: handleMsg }, { children: "message" })), showLoginErr && _jsx(LoginNotice, {})] }))] })] })), _jsx("h4", { children: "Description" }), _jsx("div", { children: _jsx("p", { children: props.bio }) }), hasOpeningHours && (_jsxs("section", { children: [_jsx("h3", { children: "Opening hours" }), (_a = props.opening_hours) === null || _a === void 0 ? void 0 : _a.map(function (day) { return (_jsxs("div", { children: [day.MONDAY_OPEN && day.MONDAY_CLOSE && (_jsxs("div", { children: [_jsx("div", { children: "Mon" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.MONDAY_OPEN.slice(0, 5), " -", " ", day.MONDAY_CLOSE.slice(0, 5)] }) })] })), day.TUESDAY_OPEN && day.TUESDAY_CLOSE && (_jsxs("div", { children: [_jsx("div", { children: "Tue" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.TUESDAY_OPEN.slice(0, 5), " -", " ", day.TUESDAY_CLOSE.slice(0, 5)] }) })] })), day.WEDNESDAY_OPEN && day.WEDNESDAY_CLOSE && (_jsxs("div", { children: [_jsx("div", { children: "Wed" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.WEDNESDAY_OPEN.slice(0, 5), " -", " ", day.WEDNESDAY_CLOSE.slice(0, 5)] }) })] })), day.THURSDAY_OPEN && day.THURSDAY_CLOSE && (_jsxs("div", { children: [_jsx("div", { children: "Thu" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.THURSDAY_OPEN.slice(0, 5), " -", " ", day.THURSDAY_CLOSE.slice(0, 5)] }) })] })), day.FRIDAY_OPEN && day.FRIDAY_CLOSE && (_jsxs("div", { children: [_jsx("div", { children: "Fri" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.FRIDAY_OPEN.slice(0, 5), " -", " ", day.FRIDAY_CLOSE.slice(0, 5)] }) })] })), day.SATURDAY_OPEN && day.SATURDAY_CLOSE && (_jsxs("div", { children: [_jsx("div", { children: "Sat" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.SATURDAY_OPEN.slice(0, 5), " -", " ", day.SATURDAY_CLOSE.slice(0, 5)] }) })] })), day.SUNDAY_OPEN && day.SUNDAY_CLOSE && (_jsxs("div", { children: [_jsx("div", { children: "Sun" }), " ", _jsx("div", { children: _jsxs("p", { children: [day.SUNDAY_OPEN.slice(0, 5), " -", " ", day.SUNDAY_CLOSE.slice(0, 5)] }) })] }))] }, day.hours_id)); })] })), _jsx("section", {}), props.imgs.split(",")[1] && (_jsxs(_Fragment, { children: [_jsx("h3", { children: "More photos" }), _jsxs("section", __assign({ className: styles.imgsArea2 }, { children: [_jsx("div", { children: props.imgs.split(",")[0] && (_jsx("img", { src: props.imgs.split(",")[0], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[1] && (_jsx("img", { src: props.imgs.split(",")[1], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[2] && (_jsx("img", { src: props.imgs.split(",")[2], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[3] && (_jsx("img", { src: props.imgs.split(",")[3], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[4] && (_jsx("img", { src: props.imgs.split(",")[4], alt: "Photo of " + props.name })) })] }))] }))] })) }));
    }
    else {
        var sanitizedContent = DOMPurify.sanitize(props.description, {
            ALLOWED_TAGS: ["p", "strong", "u", "br"],
            USE_PROFILES: {
                html: true,
            },
        });
        return (_jsxs("div", __assign({ className: styles.card0OV }, { children: [showPayment && (_jsx(PopUp, { name: props.name, price: props.price, email: props.name, setShowPayment: setShowPayment })), _jsxs("div", __assign({ className: styles.imgDetailsArea }, { children: [_jsxs("section", __assign({ className: styles.imgsArea }, { children: [_jsx("div", { children: props.imgs.split(",")[0] && (_jsx("img", { src: props.imgs.split(",")[0], alt: "Photo of " + props.name })) }), _jsxs("div", { children: [props.imgs.split(",")[1] && (_jsx("img", { src: props.imgs.split(",")[1], alt: "Photo of " + props.name })), props.imgs.split(",")[2] && (_jsx("img", { src: props.imgs.split(",")[2], alt: "Photo of " + props.name })), props.imgs.split(",")[3] && (_jsx("img", { src: props.imgs.split(",")[3], alt: "Photo of " + props.name })), props.imgs.split(",")[4] && (_jsx("img", { src: props.imgs.split(",")[4], alt: "Photo of " + props.name }))] })] })), _jsxs("section", { children: [_jsxs("hgroup", { children: [_jsx("h2", { children: props.name }), " ", _jsx("p", { children: "\u2705 verfied" })] }), _jsxs("div", __assign({ className: styles.venueAndTicket }, { children: [_jsx("div", { children: "Venue" }), _jsx("address", { children: props.location }), " "] })), _jsxs("div", __assign({ className: styles.venueAndTicket }, { children: [_jsx("div", { children: "Tickets" }), _jsx("p", { children: props.price === 0
                                                ? "Free"
                                                : "\u20A6".concat(props.price.toLocaleString()) })] })), _jsxs("div", __assign({ className: styles.dateAndTimeArea }, { children: [_jsxs("div", __assign({ className: styles.dateTimeDiv }, { children: [_jsxs("div", __assign({ className: styles.dateTimeContent }, { children: [_jsxs("p", __assign({ className: styles.dateTimeHeader }, { children: [_jsx("img", { src: "/home/uil_calender.svg", alt: "calender" }), "Start Date"] })), _jsx("time", __assign({ dateTime: props.start_date_and_time.toString() }, { children: formatDate(props.start_date_and_time.toString()) }))] })), _jsxs("div", __assign({ className: styles.dateTimeContent }, { children: [_jsxs("p", __assign({ className: styles.dateTimeHeader }, { children: [_jsx("img", { src: "/home/ri_time-line.svg", alt: "calender" }), "Time"] })), _jsxs("div", __assign({ className: styles.timeDiv }, { children: [_jsx("p", { children: formatTime(props.start_date_and_time.toString()) }), " -", " ", _jsx("p", { children: formatTime(props.end_date_and_time.toString()) })] }))] }))] })), _jsxs("div", __assign({ className: styles.dateTimeDiv }, { children: [_jsxs("div", __assign({ className: styles.dateTimeContent }, { children: [_jsxs("p", __assign({ className: styles.dateTimeHeader }, { children: [_jsx("img", { src: "/home/uil_calender.svg", alt: "calender" }), "End Date"] })), _jsx("p", { children: formatDate(props.end_date_and_time.toString()) })] })), _jsxs("div", __assign({ className: styles.dateTimeContent }, { children: [_jsxs("p", __assign({ className: styles.dateTimeHeader }, { children: [_jsx("img", { src: "/home/ri_time-line.svg", alt: "calender" }), "Time"] })), _jsxs("div", __assign({ className: styles.timeDiv }, { children: [_jsx("p", { children: formatTime(props.start_date_and_time.toString()) }), " -", " ", _jsx("p", { children: formatTime(props.end_date_and_time.toString()) })] }))] }))] })), _jsxs("div", __assign({ className: styles.dateTimeDiv }, { children: [_jsxs("div", __assign({ className: styles.dateTimeContent }, { children: [_jsxs("p", __assign({ className: styles.dateTimeHeader }, { children: [_jsx("img", { src: "/home/uil_calender.svg", alt: "calender" }), "Days"] })), _jsx("p", { children: "3 Days" })] })), _jsxs("div", __assign({ className: styles.dateTimeContent }, { children: [_jsxs("p", __assign({ className: styles.dateTimeHeader }, { children: [_jsx("img", { src: "/home/ri_time-line.svg", alt: "calender" }), "Hours"] })), _jsx("div", __assign({ className: styles.timeDiv }, { children: _jsx("p", { children: "3hrs 30mins" }) }))] }))] }))] })), _jsxs("section", __assign({ className: styles.otherDetails }, { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/locationPin.svg", alt: "location icon" }), _jsxs("address", { children: [" ", props.location] })] }), _jsxs("div", { children: [_jsx("img", { src: "/home/ic_round-mail.svg", alt: "mail icon" }), _jsx("p", { children: "satventures@mail.com" })] }), _jsxs("div", { children: [_jsx("img", { src: "/home/gg_phone.svg", alt: "phone icon" }), _jsx("p", { children: "0802345678" })] }), _jsxs("div", { children: [_jsx("img", { src: "/home/mdi_web.svg", alt: "web icon" }), _jsx("p", { children: props.url })] })] }))] })] })), _jsxs("section", __assign({ className: styles.cTAArea }, { children: [_jsx("button", __assign({ className: styles.cTA, onClick: togglePayment }, { children: "Get Ticket" })), " ", _jsxs("button", __assign({ onClick: handleShowShare }, { children: [_jsx("img", { src: "/home/material-symbols_share.svg", alt: "share icon" }), "share"] })), showShare && (_jsx(Share, { uRL: "http://localhost:3000/event/".concat(props.event_id), title: props.name, hashtag: "#".concat(props.name.split(" ").join("_")), summary: props.description.slice(0, 40) + "...", source: "https://evenue.com" }))] })), _jsx("section", {}), _jsx("section", { children: _jsx("p", { children: parse(sanitizedContent) }) }), props.imgs.split(",")[1] && (_jsxs(_Fragment, { children: [_jsx("h3", { children: "More Photos" }), _jsxs("section", __assign({ className: styles.imgsArea2 }, { children: [_jsx("div", { children: props.imgs.split(",")[0] && (_jsx("img", { src: props.imgs.split(",")[0], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[1] && (_jsx("img", { src: props.imgs.split(",")[1], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[2] && (_jsx("img", { src: props.imgs.split(",")[2], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[3] && (_jsx("img", { src: props.imgs.split(",")[3], alt: "Photo of " + props.name })) }), _jsx("div", { children: props.imgs.split(",")[4] && (_jsx("img", { src: props.imgs.split(",")[4], alt: "Photo of " + props.name })) })] }))] }))] })));
    }
};
