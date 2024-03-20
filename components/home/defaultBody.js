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
import { Upcoming } from "./upcoming";
import { VenueOrEventAd } from "./venueAd";
import { TopEvents } from "./topEvents";
import { GlamoreAd } from "./glamoreAd";
import { GroupSuggestions } from "../groups/suggestions";
import { EBrandsList } from "./eBrandsList";
import { InlineStories } from "../stories/inlineStories";
import styles from "./styles/defaultBodyY2D.module.css";
export var DefaultBody = function () {
    return (_jsxs("div", __assign({ className: styles.containerY2D }, { children: [_jsx("section", { children: _jsx(InlineStories, {}) }), _jsx("section", { children: _jsx(EBrandsList, {}) }), _jsx("section", { children: _jsx(Upcoming, {}) }), _jsx("section", { children: _jsx(VenueOrEventAd, { props: "Find the, BEST, VENUE, for your, Events ", body: "Lorem ipsum dolor sit amet consectetur. Velit viverra rhoncus pharetra in ut sit.", toAttr: "venues" }) }), _jsx("section", { children: _jsx(TopEvents, {}) }), _jsx("section", __assign({ style: { rowGap: "0 !important" } }, { children: _jsx(GlamoreAd, {}) })), _jsx("section", { children: _jsx(GroupSuggestions, {}) })] })));
};
