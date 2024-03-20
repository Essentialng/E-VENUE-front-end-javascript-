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
import styles from "./styles/eventCardOY0.module.css";
export var LimitedInfoCard = function (props) {
    if ("start_date_and_time" in props) {
        return (_jsx("div", __assign({ className: styles.cardOY0 }, { children: _jsxs(Link, __assign({ to: "/events/".concat(props.event_id) }, { children: [_jsx("div", { children: _jsx("img", { src: props.first_img, alt: "event" }) }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("h4", { children: props.name }), _jsxs("p", { children: [_jsx("img", { src: "/home/basil_location-outline.svg", alt: "location" }), props.location] })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/entypo_price-tag.svg", alt: "sale" }), "Price"] }), " ", _jsx("div", { children: _jsxs("p", { children: ["\u20A6", props.price] }) })] })] }), _jsxs("div", { children: [_jsxs("p", { children: [_jsx("img", { src: "/home/mdi_interaction-double-tap.svg", alt: "tap" }), "Total interactions"] }), _jsxs("section", { children: [_jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/lets-icons_view-alt-fill.svg", alt: "eye" }), " ", "Views"] }), _jsx("div", { children: props.views })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/love_shape.svg", alt: "love shape" }), " ", "Likes"] }), _jsx("div", { children: props.likes })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/material-symbols_share-reviews-outline-sharp.svg", alt: "share" }), " ", "Share"] }), _jsx("div", { children: props.share_count })] })] })] })] })) })) //{/* placeholder to attribute */}
        );
    }
    else if ("no_of_guest" in props) {
        return (_jsx("div", __assign({ className: styles.cardOY0 }, { children: _jsxs(Link, __assign({ to: "/events/".concat(props.event_id) }, { children: [_jsx("div", { children: _jsx("img", { src: props.first_img, alt: "event" }) }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("h4", { children: props.name }), _jsxs("p", { children: [_jsx("img", { src: "/home/basil_location-outline.svg", alt: "location" }), props.location] })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/entypo_price-tag.svg", alt: "sale" }), "Price"] }), " ", _jsx("div", { children: _jsxs("p", { children: ["\u20A6", props.price] }) })] })] }), _jsxs("div", { children: [_jsxs("p", { children: [_jsx("img", { src: "/home/mdi_interaction-double-tap.svg", alt: "tap" }), "Total interactions"] }), _jsxs("section", { children: [_jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/lets-icons_view-alt-fill.svg", alt: "eye" }), " ", "Views"] }), _jsx("div", { children: props.views })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/love_shape.svg", alt: "love shape" }), " ", "Likes"] }), _jsx("div", { children: props.likes })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/material-symbols_share-reviews-outline-sharp.svg", alt: "share" }), " ", "Share"] }), _jsx("div", { children: props.share_count })] })] })] })] })) })) //{/* placeholder to attribute */}
        );
    }
    else {
        return (_jsx("div", __assign({ className: styles.cardOY0 }, { children: _jsxs(Link, __assign({ to: "/events/".concat(props.event_id) }, { children: [_jsx("div", { children: _jsx("img", { src: props.first_img, alt: "event" }) }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("h4", { children: props.name }), _jsxs("p", { children: [_jsx("img", { src: "/home/basil_location-outline.svg", alt: "location" }), props.location] })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/entypo_price-tag.svg", alt: "sale" }), "Price"] }), " ", _jsx("div", { children: _jsxs("p", { children: ["\u20A6", props.price] }) })] })] }), _jsxs("div", { children: [_jsxs("p", { children: [_jsx("img", { src: "/home/mdi_interaction-double-tap.svg", alt: "tap" }), "Total interactions"] }), _jsxs("section", { children: [_jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/lets-icons_view-alt-fill.svg", alt: "eye" }), " ", "Views"] }), _jsx("div", { children: props.views })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/love_shape.svg", alt: "love shape" }), " ", "Likes"] }), _jsx("div", { children: props.likes })] }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { src: "/home/material-symbols_share-reviews-outline-sharp.svg", alt: "share" }), " ", "Share"] }), _jsx("div", { children: props.share_count })] })] })] })] })) })) //{/* placeholder to attribute */}
        );
    }
};
